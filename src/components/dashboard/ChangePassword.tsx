"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Form,
  Input,
  Button,
  Alert,
  Progress,
  Typography,
  Space,
  Modal,
} from "antd";
import {
  CheckCircleOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { resetPassword } from "@/api/Api";

const { Title, Text } = Typography;

const BRAND_COLOR = "#BD2725";

const passwordRules = [
  {
    label: "At least 8 characters",
    test: (p: string) => p.length >= 8,
  },
  {
    label: "One uppercase letter",
    test: (p: string) => /[A-Z]/.test(p),
  },
  {
    label: "One lowercase letter",
    test: (p: string) => /[a-z]/.test(p),
  },
  {
    label: "One number",
    test: (p: string) => /\d/.test(p),
  },
  {
    label: "One special character",
    test: (p: string) => /[^A-Za-z0-9]/.test(p),
  },
];

export default function ChangePasswordSection() {
  const [form] = Form.useForm();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [password, setPassword] = useState("");

  const strength = passwordRules.filter((rule) =>
    rule.test(password)
  ).length;

  const strengthPercent =
    (strength / passwordRules.length) * 100;

  const getStrengthColor = () => {
    if (strength <= 2) return "#ff7875";
    if (strength <= 4) return "#faad14";
    return BRAND_COLOR;
  };

  const getStrengthText = () => {
    if (strength === 0) return "";
    if (strength <= 2) return "Weak";
    if (strength <= 4) return "Good";
    return "Strong";
  };

  const logoutAndRedirect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("seotoken");
    localStorage.removeItem("user");

    router.replace("/auth/login");
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    setApiError("");

    try {
      const res = await resetPassword({
        old_password: values.current_password,
        new_password: values.new_password,
        confirm_password: values.confirm_password,
      });

      if (
        res?.success ||
        res?.status === true ||
        res?.message
      ) {
        form.resetFields();
        setPassword("");

        Modal.success({
          title: "Password Updated Successfully",
          content:
            res?.message ||
            "Your password has been changed successfully. Please login again.",
          centered: true,
          okText: "Login Again",
          onOk: logoutAndRedirect,
        });

        return;
      }

      setApiError(
        res?.message ||
          "Failed to update password. Please try again."
      );
    } catch (error: any) {
      setApiError(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message ||
          "Failed to update password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 650,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <Title
          level={3}
          style={{
            marginBottom: 6,
            color: BRAND_COLOR,
          }}
        >
          Change Password
        </Title>

        <Text type="secondary">
          Choose a strong password you don't use elsewhere.
        </Text>
      </div>

      <Card
        style={{
          borderRadius: 16,
          border: "1px solid #f0f0f0",
          boxShadow:
            "0 4px 20px rgba(189,39,37,0.08)",
        }}
      >
        <Space
          align="start"
          style={{
            marginBottom: 20,
          }}
        >
          <SafetyOutlined
            style={{
              color: BRAND_COLOR,
              fontSize: 20,
            }}
          />

          <Text type="secondary">
            Your password is encrypted and never shared.
          </Text>
        </Space>

        {apiError && (
          <Alert
            type="error"
            message={apiError}
            showIcon
            style={{
              marginBottom: 20,
            }}
          />
        )}

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Current Password"
            name="current_password"
            rules={[
              {
                required: true,
                message:
                  "Please enter your current password",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter current password"
            />
          </Form.Item>

          <Form.Item
            label="New Password"
            name="new_password"
            rules={[
              {
                required: true,
                message:
                  "Please enter a new password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.resolve();
                  }

                  const valid =
                    passwordRules.every((rule) =>
                      rule.test(value)
                    );

                  if (!valid) {
                    return Promise.reject(
                      new Error(
                        "Password does not meet all requirements"
                      )
                    );
                  }

                  if (
                    value ===
                    getFieldValue("current_password")
                  ) {
                    return Promise.reject(
                      new Error(
                        "New password must be different from current password"
                      )
                    );
                  }

                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter new password"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </Form.Item>

          {password && (
            <div
              style={{
                marginTop: -8,
                marginBottom: 24,
              }}
            >
              <Progress
                percent={strengthPercent}
                showInfo={false}
                strokeColor={getStrengthColor()}
              />

              <Text
                strong
                style={{
                  color: getStrengthColor(),
                }}
              >
                {getStrengthText()}
              </Text>

              <div
                style={{
                  marginTop: 12,
                }}
              >
                {passwordRules.map((rule) => {
                  const passed =
                    rule.test(password);

                  return (
                    <div
                      key={rule.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 6,
                      }}
                    >
                      <CheckCircleOutlined
                        style={{
                          color: passed
                            ? BRAND_COLOR
                            : "#d9d9d9",
                        }}
                      />

                      <Text
                        style={{
                          color: passed
                            ? BRAND_COLOR
                            : "#8c8c8c",
                        }}
                      >
                        {rule.label}
                      </Text>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <Form.Item
            label="Confirm New Password"
            name="confirm_password"
            dependencies={["new_password"]}
            rules={[
              {
                required: true,
                message:
                  "Please confirm your password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    getFieldValue("new_password") ===
                      value
                  ) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "Passwords do not match"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Confirm new password"
            />
          </Form.Item>

          <Form.Item
            style={{
              marginBottom: 0,
              marginTop: 10,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              style={{
                backgroundColor: BRAND_COLOR,
                borderColor: BRAND_COLOR,
                minWidth: 180,
                height: 45,
                fontWeight: 600,
              }}
            >
              Update Password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}