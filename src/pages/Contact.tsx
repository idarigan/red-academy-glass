import { useState } from "react";
import { Input, Card, Button, useToast } from "dara-ui";
import { api } from "../lib/api";

/* =============================================
   FORM STATE
   ============================================= */

type Form = { name: string; email: string; message: string };

const EMPTY: Form = { name: "", email: "", message: "" };

/* =============================================
   PAGE
   ============================================= */

export default function Contact() {
  const toast = useToast();
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [sending, setSending] = useState(false);

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  /* ---------- VALIDATION ---------- */
  const validate = (): boolean => {
    const e: Partial<Form> = {};
    if (!form.name.trim()) e.name = "نام الزامی است";
    if (!form.email.trim()) e.email = "ایمیل الزامی است";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "ایمیل معتبر نیست";
    if (form.message.trim().length < 10)
      e.message = "پیام باید حداقل ۱۰ کاراکتر باشد";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------- SUBMIT ---------- */
  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await api("/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      toast.success("پیام شما با موفقیت ارسال شد");
      setForm(EMPTY);
      setErrors({});
    } catch {
      toast.error("ارسال پیام ناموفق بود. لطفاً مجدداً تلاش کنید");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3">
          تماس با <span className="text-[var(--color-primary)]">ما</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
          سوال یا پیشنهادی دارید؟ فرم زیر را پر کنید. در اسرع وقت پاسخ می‌دهیم.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* FORM */}
        <Card className="md:col-span-3">
          <form onSubmit={submit} className="flex flex-col gap-5" noValidate>
            <Input
              label="نام و نام خانوادگی"
              placeholder="مثلاً علی رضایی"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              validation={errors.name ? "error" : undefined}
              errorMessage={errors.name}
            />

            <Input
              label="ایمیل"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              validation={errors.email ? "error" : undefined}
              errorMessage={errors.email}
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-[var(--color-text-secondary)]">
                متن پیام
              </label>
              <textarea
                rows={6}
                placeholder="پیام خود را اینجا بنویسید..."
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                className={`w-full rounded-[14px] px-4 py-3 text-base bg-[var(--color-bg-tertiary)] border outline-none transition-colors ${
                  errors.message
                    ? "border-[var(--color-danger)]"
                    : "border-[var(--color-border-primary)] focus:border-[var(--color-primary)]"
                }`}
              />
              {errors.message && (
                <span className="text-xs text-[var(--color-danger)]">
                  {errors.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              loading={sending}
              disabled={sending}
              fullWidth
            >
              ارسال پیام
            </Button>
          </form>
        </Card>

        {/* SIDE INFO */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <Card variant="solid">
            <h3 className="font-bold mb-2">ایمیل پشتیبانی</h3>
            <p className="text-sm text-[var(--color-text-secondary)]" dir="ltr">
              support@redacademy.ir
            </p>
          </Card>
          <Card variant="solid">
            <h3 className="font-bold mb-2">ساعات پاسخگویی</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              شنبه تا چهارشنبه، ۹ صبح تا ۶ عصر
            </p>
          </Card>
          <Card variant="outline">
            <h3 className="font-bold mb-2">پاسخ سریع‌تر</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              برای سوالات فنی مربوط به دوره، شماره تراکنش پرداخت را در متن پیام
              ذکر کنید.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
