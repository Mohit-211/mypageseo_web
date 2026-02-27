import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      businessName,
      email,
      phone,
      service,
      budget,
      message,
      turnstileToken,
    } = body;

    if (!fullName || !email || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ---------------------------
       1️⃣ VERIFY TURNSTILE
    ---------------------------- */
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    /* ---------------------------
       2️⃣ SAVE TO FIRESTORE
    ---------------------------- */
    const docRef = await db.collection("contact_submissions").add({
      fullName,
      businessName: businessName || "",
      email,
      phone: phone || "",
      service,
      budget: budget || "",
      message: message || "",
      createdAt: new Date(),
      source: "website",
    });

    /* ---------------------------
       3️⃣ SEND EMAIL (GMAIL SMTP)
    ---------------------------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"MyPageSEO Website" <${process.env.GMAIL_USER}>`,
      to: process.env.LEAD_RECEIVER_EMAIL,
      subject: `New Inquiry from ${fullName}`,
      html: `
        <h3>New Website Inquiry</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Business:</strong> ${businessName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
