import { Link } from "react-router-dom";
import { Button, Card, Badge } from "dara-ui";

export default function Landing() {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
        <Badge variant="primary" glow className="mb-6">
          دوره جدید در حال ثبت‌نام
        </Badge>
        <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-4">
          یادگیری <span className="text-[var(--color-primary)]">حرفه‌ای</span>
          <br />
          با آکادمی رد
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto mb-8">
          یک دوره ویدیویی جامع، فصل‌بندی‌شده و همراه با آزمون. با پشتیبانی
          مستقیم اساتید.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/register">
            <Button size="lg" variant="primary" glow="primary">
              ثبت‌نام در دوره
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">
              درباره بیشتر
            </Button>
          </Link>
        </div>
      </section>

      {/* GIF CARD */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <Card variant="glass" padding="none" float className="overflow-hidden">
          <div className="aspect-video bg-[var(--color-bg-tertiary)] flex items-center justify-center">
            {/* TODO: replace with your course preview GIF */}
            <img
              src="/course-preview.gif"
              alt="پیش‌نمایش دوره"
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="absolute text-[var(--color-text-tertiary)] text-sm">
              پیش‌نمایش دوره
            </span>
          </div>
        </Card>
      </section>

      {/* FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card glow="primary">
          <h3 className="font-bold text-lg mb-2">ویدیوی فصل‌بندی‌شده</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            هر فصل شامل چندین ویدیو با موضوع مستقل.
          </p>
        </Card>
        <Card glow="primary">
          <h3 className="font-bold text-lg mb-2">آزمون پس از هر فصل</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            برای عبور باید حداقل ۷۰٪ نمره کسب کنید.
          </p>
        </Card>
        <Card glow="primary">
          <h3 className="font-bold text-lg mb-2">پشتیبانی واقعی</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            سوالات خود را از طریق صفحه تماس ارسال کنید.
          </p>
        </Card>
      </section>
    </div>
  );
}
