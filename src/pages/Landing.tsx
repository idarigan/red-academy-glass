import { Link } from "react-router-dom";
import { Button, Card, Badge, Avatar, Accordion } from "dara-ui";
import {
  PlayIcon,
  CheckIcon,
  ClockIcon,
  ShieldIcon,
  ChartIcon,
  SparkleIcon,
  UsersIcon,
  ArrowLeftIcon,
} from "../components/Icons";

/* =============================================
   STATIC CONTENT
   ============================================= */

const STATS = [
  { value: "+۱۲۰", label: "دانشجوی فعال" },
  { value: "+۴۵", label: "ساعت دوره" },
  { value: "۹۴٪", label: "اجرای پروژه" },
  { value: "۵", label: "روز در هفته پشتیبانی" },
];

const FEATURES = [
  {
    icon: <PlayIcon className="h-6 w-6" />,
    title: "آموزش ویدیویی قدم به قدم",
    body: "هر فصل شامل چندین ویدیو با موضوع مستقله تا با سرعت خودت یاد بگیری.",
  },
  {
    icon: <CheckIcon className="h-6 w-6" />,
    title: "ماموریت آخر فصل",
    body: "برای عبور به فصل بعد باید حداقل ۷۰ امتیاز از فصل قبلیش بگیری.",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "دسترسی بلند مدت",
    body: "عجله نکن! تا یک سال بعد از ثبت‌نام، هر زمان و هرجا که خواستی میتونی آموزشتو دنبال کنی.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "تایید پرداخت امن",
    body: "تیم پشتیبانی هر تراکنش رو بررسی و کمتر از ۲۴ ساعت تایید میکنه.",
  },
  {
    icon: <ChartIcon className="h-6 w-6" />,
    title: "ببین چیکار کردی",
    body: "میتونی همیشه ببینی چه چیز هایی یادگرفتی و چقدر امتیاز داری.",
  },
  {
    icon: <UsersIcon className="h-6 w-6" />,
    title: "همراهی و پشتیبانی",
    body: "برای ماموریت‌ها و تمرین‌های دوره میتونی با تیم پشتیبانی ارتباط بگیری😘",
  },
];

const CHAPTERS = [
  { title: "فصل اول - مبانی", lessons: 8, minutes: 95, done: true },
  { title: "فصل دوم - ابزارها", lessons: 10, minutes: 120, done: true },
  { title: "فصل سوم - پروژه عملی", lessons: 12, minutes: 180, done: false },
  { title: "فصل چهارم - پیشرفته", lessons: 9, minutes: 140, done: false },
  { title: "فصل پنجم - جمع‌بندی", lessons: 5, minutes: 60, done: false },
];

const TESTIMONIALS = [
  {
    name: "مرتضی",
    role: "توسعه‌دهنده فرانت‌اند",
    quote:
      "بعد از این دوره تونستم اولین پروژه واقعی رو با اعتماد به نفس کامل تحویل بدم. ساختار فصل‌ها واقعاً حرفه‌ای چیده شده.",
  },
  {
    name: "سارا محمدی",
    role: "طراح رابط کاربری",
    quote:
      "چیزی که این دوره رو متفاوت می‌کنه آزمون‌های پایان فصله. من رو مجبور کرد واقعاً یاد بگیرم، نه فقط تماشا کنم.",
  },
  {
    name: "رضا کریمی",
    role: "دانشجوی مهندسی",
    quote:
      "پشتیبانی خیلی سریع جواب می‌ده. حتی سوالات تخصصی رو با حوصله جواب دادن و راهنمایی کردن.",
  },
];

const FAQ = [
  {
    id: "faq1",
    title: "آیا این دوره برای مبتدی‌ها مناسبه؟",
    content: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        بله. فصل اول از پایه‌ترین مفاهیم شروع می‌شه و نیازی به پیش‌زمینه تخصصی
        ندارید.
      </p>
    ),
  },
  {
    id: "faq2",
    title: "برای شرکت در دوره چه چیزی لازمه؟",
    content: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        فقط یک لپ‌تاپ یا کامپیوتر شخصی، اینترنت پایدار و کمی وقت. هیچ نرم‌افزار
        تجاری خاصی لازم نیست.
      </p>
    ),
  },
  {
    id: "faq3",
    title: "اگر نمره آزمون از ۷۰٪ کمتر بشه چی می‌شه؟",
    content: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        می‌تونید ویدیوهای فصل رو دوباره تماشا کنید و مجدد در آزمون شرکت کنید.
        محدودیتی در تعداد تلاش وجود نداره.
      </p>
    ),
  },
  {
    id: "faq4",
    title: "مدت زمان دسترسی به دوره چقدره؟",
    content: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        از زمان ثبت‌نام تا یک سال به تمام محتوای دوره دسترسی خواهید داشت.
      </p>
    ),
  },
  {
    id: "faq5",
    title: "چطور پرداخت رو انجام بدم؟",
    content: (
      <p className="text-sm text-[var(--color-text-secondary)]">
        در صفحه ثبت‌نام اطلاعات واریز نمایش داده می‌شه. پس از انتقال وجه، تصویر
        رسید رو بارگذاری کنید. تیم پشتیبانی حداکثر تا ۲۴ ساعت تایید می‌کنه.
      </p>
    ),
  },
];

/* =============================================
   PAGE
   ============================================= */

export default function Landing() {
  return (
    <div>
      {/* ============ HERO (two columns) ============ */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* TEXT - order 2 on mobile, order 1 on md */}
          <div className="order-2 md:order-1 text-center">
            <Badge variant="primary" glow className="mb-6">
              میتونی همین حالا ثبت نام کنی
              <SparkleIcon className="h-3 w-3 ms-1" />
            </Badge>

            <h1 className="font-bold text-4xl md:text-4xl lg:text-6xl leading-tight mb-5">
              یادبگیر، خلق کن <br />
              <span className="text-[var(--color-primary)]">
                جلو تر از بقیه باش!
              </span>
            </h1>

            <p className="text-[var(--color-text-secondary)] text-base md:text-lg max-w-xl max-md:mx-auto mb-8">
              یک دوره ویدیویی جامع، فصل‌بندی‌شده و همراه با ماموریت های جذاب و
              پشتیبانی مستقیم اساتید و تیم فنی آکدمی رد.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/register"
                className="w-full md:w-[calc(50%-0.375rem)] lg:w-auto"
              >
                <Button size="lg" variant="primary" glow="primary" fullWidth>
                  شروع یادگیری
                </Button>
              </Link>
              <Link
                to="/about"
                className="w-full md:w-[calc(50%-0.375rem)] lg:w-auto"
              >
                <Button size="lg" variant="outline" fullWidth>
                  آشنایی با رد آکادمی
                </Button>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Card
              variant="glass"
              padding="none"
              className="overflow-hidden w-full max-w-lg"
            >
              <div className="bg-[var(--color-bg-tertiary)] flex items-center justify-center p-8 min-h-[240px]">
                <img
                  src="/logo.svg"
                  alt="پیش‌نمایش دوره آکادمی رد"
                  className="w-full max-w-[320px] h-auto object-contain"
                  loading="eager"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <Card variant="glass" padding="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="font-bold text-3xl text-[var(--color-primary)] mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-[var(--color-text-tertiary)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* ============ FEATURES GRID ============ */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl mb-2">چرا آکادمی رد؟</h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            هم تماشا کن و یادبگیر، هم از چیزی که یادگرفتی استفاده کن.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => (
            <Card key={i} float glow="primary">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center mb-3">
                {f.icon}
              </div>
              <h3 className="font-bold mb-1.5">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {f.body}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ============ CHAPTERS LIST ============ */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl mb-2">سرفصل‌های دوره</h2>
          <p className="text-[var(--color-text-secondary)]">
            مسیر یادگیریت از اول تا آخرش.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {CHAPTERS.map((c, i) => (
            <Card key={i} variant="solid" padding="sm">
              <div className="flex items-center gap-3">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    c.done
                      ? "bg-[var(--color-success)] text-white"
                      : "bg-[var(--color-bg-elevated)] text-[var(--color-text-tertiary)]"
                  }`}
                >
                  {c.done ? <CheckIcon className="h-4 w-4" /> : i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-0.5">{c.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-[var(--color-text-tertiary)]">
                    <span className="flex items-center gap-1">
                      <PlayIcon className="h-3 w-3" />
                      {c.lessons} ویدیو
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      {c.minutes} دقیقه
                    </span>
                  </div>
                </div>
                {c.done && (
                  <Badge variant="success" size="sm">
                    تکمیل‌شده
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl mb-2">دانشجو های ما چی میگن؟</h2>
          <p className="text-[var(--color-text-secondary)]">
            تجربه کسایی که تو دوره بودن.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} variant="glass" float>
              <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] mb-4">
                «{t.quote}»
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border-secondary)]">
                <Avatar size="md" fallbackText={t.name} glow="primary" />
                <div className="min-w-0">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl mb-2">سوالات پرتکرار</h2>
          <p className="text-[var(--color-text-secondary)]">
            اگر پاسخ سوال خود را پیدا نکردید،{" "}
            <Link
              to="/contact"
              className="text-[var(--color-primary)] hover:underline"
            >
              با ما تماس بگیرید
            </Link>
            .
          </p>
        </div>
        <Accordion items={FAQ} defaultOpenItems={["faq1"]} />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        <Card
          glow="primary"
          padding="lg"
          className="text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,var(--color-primary-light),transparent_70%)]" />
          <div className="relative">
            <h2 className="font-bold text-3xl mb-3">آماده‌اید شروع کنید؟</h2>
            <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
              همین امروز ثبت‌نام کنید و به بیش از هزار دانشجوی فعال آکادمی رد
              بپیوندید.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/register">
                <Button size="lg" variant="primary" glow="primary">
                  ثبت‌نام در دوره
                  <ArrowLeftIcon className="h-4 w-4 ms-2 rtl:-scale-x-100" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button size="lg" variant="outline">
                  راهنمای ثبت‌نام
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
