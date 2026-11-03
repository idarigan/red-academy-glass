import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Card, Button, Progress, useToast } from "dara-ui";
import ReceiptUpload from "../components/ReceiptUpload";

/* =============================================
   TYPES
   ============================================= */

type Form = {
  name: string;
  phone: string;
  email: string;
  avatar: File | null;
  receipt: File | null;
};

type Errors = Partial<Record<keyof Form | "otp", string>>;

const EMPTY: Form = {
  name: "",
  phone: "",
  email: "",
  avatar: null,
  receipt: null,
};

/* =============================================
   HELPERS
   ============================================= */

const IRAN_PHONE = /^09\d{9}$/;

/* =============================================
   PAGE
   ============================================= */

export default function Register() {
  const toast = useToast();

  /* ---------- STATE ---------- */
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  /* ---------- STEP ---------- */
  const step = !otpSent ? 1 : !otpVerified ? 2 : 3;
  const progress = (step / 3) * 100;

  /* ---------- FIELD SET ---------- */
  const set = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  /* ---------- VALIDATION ---------- */
  const validateIdentity = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "نام الزامی است";
    if (!IRAN_PHONE.test(form.phone))
      e.phone = "شماره موبایل باید با ۰۹ شروع و ۱۱ رقم باشد";
    if (!form.email.trim()) e.email = "ایمیل الزامی است";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "ایمیل معتبر نیست";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateFinal = (): boolean => {
    const e: Errors = {};
    if (!form.avatar) e.avatar = "تصویر پروفایل الزامی است";
    if (!form.receipt) e.receipt = "تصویر رسید پرداخت الزامی است";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------- OTP SEND ---------- */
  const sendOtp = async () => {
    if (!validateIdentity()) return;
    setSendingOtp(true);
    try {
      // TODO: await api("/auth/send-otp", { method: "POST", body: JSON.stringify({ phone: form.phone }) });
      await new Promise((r) => setTimeout(r, 600)); // mock
      setOtpSent(true);
      toast.success("کد تایید ارسال شد");
    } catch {
      toast.error("ارسال کد تایید ناموفق بود");
    } finally {
      setSendingOtp(false);
    }
  };

  /* ---------- OTP VERIFY ---------- */
  const verifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      setErrors({ otp: "کد باید ۶ رقم باشد" });
      return;
    }
    setVerifyingOtp(true);
    try {
      // TODO: await api("/auth/verify-otp", { method: "POST", body: JSON.stringify({ phone: form.phone, code: otp }) });
      await new Promise((r) => setTimeout(r, 600)); // mock
      setOtpVerified(true);
      setErrors({});
      toast.success("شماره موبایل تایید شد");
    } catch {
      setErrors({ otp: "کد وارد شده صحیح نیست" });
    } finally {
      setVerifyingOtp(false);
    }
  };

  /* ---------- FINAL SUBMIT ---------- */
  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!otpVerified || !validateFinal()) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", form.name);
      fd.append("phone", form.phone);
      fd.append("email", form.email);
      if (form.avatar) fd.append("avatar", form.avatar);
      if (form.receipt) fd.append("receipt", form.receipt);

      // TODO: await apiUpload("/register", fd);
      await new Promise((r) => setTimeout(r, 800)); // mock

      toast.success("ثبت‌نام شما دریافت شد. پس از تایید پرداخت پیامک می‌شود.");
      setForm(EMPTY);
      setOtp("");
      setOtpSent(false);
      setOtpVerified(false);
    } catch {
      toast.error("ثبت‌نام ناموفق بود. لطفاً مجدداً تلاش کنید");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------- RENDER ---------- */
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* HEADER */}
      <header className="text-center mb-8">
        <h1 className="font-bold text-4xl mb-3">
          ثبت‌نام در <span className="text-[var(--color-primary)]">دوره</span>
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          در سه مرحله ساده ثبت‌نام خود را تکمیل کنید.
        </p>
      </header>

      {/* PROGRESS */}
      <div className="mb-8">
        <Progress
          value={progress}
          color="primary"
          labelPosition="right"
          showLabel
        />
        <div className="flex justify-between text-xs text-[var(--color-text-tertiary)] mt-2">
          <span>اطلاعات شخصی</span>
          <span>تایید موبایل</span>
          <span>پرداخت</span>
        </div>
      </div>

      <Card>
        <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
          {/* ============ STEP 1: IDENTITY ============ */}
          <Input
            label="نام و نام خانوادگی"
            placeholder="مثلاً علی رضایی"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            disabled={otpVerified}
            validation={errors.name ? "error" : undefined}
            errorMessage={errors.name}
          />

          <Input
            label="شماره موبایل"
            placeholder="09123456789"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            disabled={otpSent}
            dir="ltr"
            validation={errors.phone ? "error" : undefined}
            errorMessage={errors.phone}
            leftIcon={<span className="text-sm">📱</span>}
          />

          <Input
            label="ایمیل"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            disabled={otpVerified}
            validation={errors.email ? "error" : undefined}
            errorMessage={errors.email}
          />

          {/* profile picture */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text-secondary)]">
              تصویر پروفایل
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => set("avatar", e.target.files?.[0] ?? null)}
              disabled={otpVerified}
              className="text-sm text-[var(--color-text-secondary)] file:me-3 file:px-3 file:py-1.5 file:rounded-full file:border-0 file:bg-[var(--color-primary-solid)] file:text-white file:text-sm file:cursor-pointer"
            />
            {errors.avatar && (
              <span className="text-xs text-[var(--color-danger)]">
                {errors.avatar}
              </span>
            )}
          </div>

          {/* send OTP */}
          {!otpVerified && (
            <Button
              type="button"
              variant="secondary"
              loading={sendingOtp}
              disabled={sendingOtp || otpSent}
              onClick={sendOtp}
              fullWidth
            >
              {otpSent ? "کد ارسال شد" : "ارسال کد تایید"}
            </Button>
          )}

          {/* ============ STEP 2: OTP ============ */}
          {otpSent && !otpVerified && (
            <div className="flex flex-col gap-3 p-4 rounded-[14px] bg-[var(--color-bg-tertiary)]">
              <Input
                label="کد تایید پیامکی"
                placeholder="123456"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                dir="ltr"
                validation={errors.otp ? "error" : undefined}
                errorMessage={errors.otp}
              />
              <Button
                type="button"
                variant="primary"
                loading={verifyingOtp}
                disabled={verifyingOtp || otp.length !== 6}
                onClick={verifyOtp}
                fullWidth
              >
                تایید کد
              </Button>
            </div>
          )}

          {/* ============ STEP 3: PAYMENT ============ */}
          {otpVerified && (
            <>
              <div className="p-4 rounded-[14px] bg-[var(--color-primary-light)] border border-[var(--color-primary)]/30">
                <h3 className="font-bold text-sm mb-2 text-[var(--color-primary)]">
                  اطلاعات واریز
                </h3>
                <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                  <li>
                    شماره کارت:{" "}
                    <span className="font-mono" dir="ltr">
                      6037-XXXX-XXXX-XXXX
                    </span>
                  </li>
                  <li>بانک: بانک ملی ایران</li>
                  <li>به نام: آکادمی رد</li>
                  <li>
                    مبلغ: <span className="font-bold">۲,۵۰۰,۰۰۰ تومان</span>
                  </li>
                </ul>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-2">
                  لطفاً تصویر رسید تراکنش را در ادامه بارگذاری کنید.
                </p>
              </div>

              <ReceiptUpload
                file={form.receipt}
                onChange={(f) => set("receipt", f)}
                error={errors.receipt}
              />

              <Button
                type="submit"
                variant="primary"
                loading={submitting}
                disabled={submitting}
                fullWidth
                glow="primary"
              >
                تکمیل ثبت‌نام
              </Button>
            </>
          )}

          {/* BACK LINK */}
          {otpSent && !otpVerified && (
            <button
              type="button"
              className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] self-start"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setErrors({});
              }}
            >
              ← ویرایش شماره موبایل
            </button>
          )}
        </form>
      </Card>

      <p className="text-center text-xs text-[var(--color-text-tertiary)] mt-6">
        با ثبت‌نام،{" "}
        <Link to="/guide" className="text-[var(--color-primary)]">
          قوانین آکادمی رد
        </Link>{" "}
        را می‌پذیرید.
      </p>
    </div>
  );
}
