import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Full Europe list (broad coverage)
const EUROPE_COUNTRIES = [
  "AL",
  "AD",
  "AT",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GI",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
  "VA",
];

export function middleware(req: NextRequest) {
  const country = req.headers.get("cf-ipcountry") || "IN";

  // 🔴 HARD BLOCK CANADA
  if (country === "CA") {
    return NextResponse.rewrite(new URL("/blocked", req.url));
  }

  // 💱 Currency logic
  let currency = "USD";

  if (country === "IN") {
    currency = "INR";
  } else if (EUROPE_COUNTRIES.includes(country)) {
    currency = "EUR";
  }

  const res = NextResponse.next();

  // Set currency cookie (only if not already set manually)
  if (!req.cookies.get("currency")) {
    res.cookies.set("currency", currency, { path: "/" });
  }

  return res;
}
