import axios from "axios";
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("seotoken");
  }
  return null;
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// Register
export const registerUser = async (payload: {
  name: string;
  email: string;
  mobile: string;
  user_type: string;
  password: string;
  confirm_password: string;
  business_name: string;

}) => {
  try {
    const timeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { data } = await api.post(
      "user/auth/register",
      payload,
      {
        headers: {
          time_zone: timeZone,
        },
      }
    );

    return data;
  } catch (error: any) {
    console.error(
      "Register Error:",
      error?.response?.data || error
    );
    throw error;
  }
};

// Login
export const loginUser = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const timeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { data } = await api.post(
      "user/auth/login",
      payload,
      {
        headers: {
          time_zone: timeZone,
        },
      }
    );

    return data;
  } catch (error: any) {
    console.log("Login Error:", error?.response?.data);
    throw error;
  }
};

// Send OTP
export const sendOtp = async (payload: {
  type: string;
  email: string;
}) => {
  const { data } = await api.post("user/auth/otp", payload);
  return data;
};

// Verify OTP
export const verifyOtp = async (payload: {
  type: string;
  email: string;
  otp: string;
}) => {
  const { data } = await api.post("user/auth/verify-otp", payload);
  return data;
};
// Forgot Password Reset
export const forgotPassword = async (payload: {
  email: string;
  password: string;
  confirm_password: string;
  token: string;
}) => {
  const { data } = await api.post(
    "user/auth/forgot-password",
    payload
  );
  return data;
};
// Subscription Plans
export const getSubscriptionPlans = async () => {
  try {
    const { data } = await api.get("subscription/plans");
    return data;
  } catch (error) {
    console.error("Get Subscription Plans Error:", error);
    throw error;
  }
};

// Create Order
export const createSubscriptionOrder = async (payload: {
  name: string;
  email: string;
  mobile: string;
  plan_id: string;
  coupon_code?: string;
}) => {
  try {
    const { data } = await api.post(
      "subscription/create-order",
      payload
    );

    return data;
  } catch (error: any) {
    console.error("Create Subscription Order Error:", error);
    throw error;
  }
};

// Validate Coupon
export const validateCoupon = async (
  coupon_code: string,
  plan_id: string
) => {
  try {
    const { data } = await api.post(
      "subscription/coupon/validate",
      {
        coupon_code,
        plan_id,
      }
    );

    return data;
  } catch (error) {
    console.error("Validate Coupon Error:", error);
    throw error;
  }
};
export const getSubscriptionPaymentsHistory = async () => {
  try {
    const token = getToken();
    const { data } = await api.get(
      "subscription/payments",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error("Get Subscription Payments Error:", error);
    throw error;
  }
};
export const getUserProfile = async () => {
  try {
    const token = getToken();
    const { data } = await api.get("user/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
    });

    return data;
  } catch (error) {
    console.error("Get User Profile Error:", error);
    throw error;
  }
};
export const updateUserProfile = async (payload: {
  name: string;
  mobile: string;
  business_name: string;
  website_url?: string;
  business_address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
}) => {
  try {
    const token = getToken();
    const { data } = await api.put(
      "user/profile",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          time_zone:
            Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      }
    );

    return data;
  } catch (error) {
    console.error("Update User Profile Error:", error);
    throw error;
  }
};
export const resetPassword = async (payload: {
  old_password: string;
  new_password: string;
  confirm_password: string;
}) => {
  try {
    const token = getToken();
    const { data } = await api.post(
      "user/auth/reset-password",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,

        },
      }
    );

    return data;
  } catch (error: any) {
    console.error("Reset Password Error:", error);
    throw error;
  }
};