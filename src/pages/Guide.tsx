import { Tabs, Card, Accordion } from "dara-ui";

/* =============================================
   CONTENT DATA
   ============================================= */

const GUIDE_STEPS = [
  {
    title: "۱. تکمیل فرم ثبت‌نام",
    body: "اطلاعات شخصی، شماره تماس و تصویر پروفایل خود را وارد کنید. پس از ارسال فرم، کد تایید پیامکی برای شما ارسال می‌شود.",
  },
  {
    title: "۲. تایید شماره تماس",
    body: "کد شش‌رقمی ارسال‌شده به شماره همراه خود را وارد کنید. این کد تنها ۲ دقیقه اعتبار دارد.",
  },
  {
    title: "۳. واریز شهریه",
    body: "شهریه دوره را به شماره حساب اعلام‌شده واریز کنید و تصویر رسید تراکنش را در فرم ثبت‌نام بارگذاری کنید.",
  },
  {
    title: "۴. تایید پرداخت توسط تیم",
    body: "تیم پشتیبانی حداکثر تا ۲۴ ساعت کاری رسید شما را بررسی و تایید می‌کند. سپس اطلاعات ورود از طریق پیامک ارسال می‌شود.",
  },
  {
    title: "۵. دسترسی به دوره",
    body: "با اطلاعات ارسال‌شده وارد پنل کاربری خود شوید، ویدیوها را تماشا کنید و پس از هر فصل در آزمون شرکت کنید.",
  },
];

const POLICY_ITEMS = [
  {
    id: "p1",
    title: "ماهیت دوره و مدت دسترسی",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        با خرید این دوره، به محتواهای از پیش‌ضبط‌شده دسترسی پیدا می‌کنید. اعتبار
        دسترسی شما به دوره به مدت ۱ سال از زمان ثبت‌نام خواهد بود.
      </p>
    ),
  },
  {
    id: "p2",
    title: "شرایط بازگشت وجه و تسویه",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        با توجه به ماهیت دیجیتال محصول، امکان بازگشت وجه پس از خرید وجود ندارد.
        همچنین، شرط ورود به دوره کارآموزی، تسویه کامل شهریه دوره آموزشی است.
      </p>
    ),
  },
  {
    id: "p3",
    title: "مالکیت معنوی و حساب کاربری",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        هرگونه کپی‌برداری، ضبط یا انتشار غیرمجاز محتوای دوره پیگرد قانونی دارد.
        اشتراک‌گذاری حساب کاربری با دیگران اکیداً ممنوع است و در صورت مشاهده،
        دسترسی کاربر مسدود خواهد شد.
      </p>
    ),
  },
  {
    id: "p4",
    title: "نحوه و زمان پشتیبانی",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        پشتیبانی کاملاً به صورت متنی (چت‌بات و تیکت) است و تماس تلفنی وجود
        ندارد. زمان پاسخگویی شنبه تا چهارشنبه از ساعت ۱۱ صبح تا ۸ شب می‌باشد و
        صرفاً در چارچوب گذراندن مأموریت‌ها و بررسی تمرینات دوره ارائه می‌شود.
      </p>
    ),
  },
  {
    id: "p5",
    title: "سلب مسئولیت کلی",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        آکادمی و مدرسین هیچ‌گونه مسئولیتی در قبال خسارات مستقیم، غیرمستقیم،
        اتفاقی یا تبعی ناشی از استفاده از پلتفرم، محتواها یا ابزارهای معرفی‌شده
        ندارند.
      </p>
    ),
  },
  {
    id: "p6",
    title: "عدم تضمین دسترسی مداوم",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        پلتفرم تعهدی برای دسترسی بدون وقفه ندارد و ممکن است به دلایل فنی،
        به‌روزرسانی یا موارد اضطراری، دسترسی موقتاً قطع شود.
      </p>
    ),
  },
];

/* =============================================
   PAGE
   ============================================= */

export default function Guide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3">
          راهنما و <span className="text-[var(--color-primary)]">قوانین</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
          هر چیزی که برای شروع دوره و آشنایی با قوانین آکادمی رد باید بدانید.
        </p>
      </header>

      {/* TABS */}
      <Tabs
        items={[
          {
            label: "راهنمای ثبت‌نام",
            value: "guide",
            content: (
              <div className="flex flex-col gap-4 px-8 pb-4">
                {GUIDE_STEPS.map((s, i) => (
                  <Card key={i} variant="solid" padding="sm">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary-solid)] text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm mb-1">{s.title}</h3>
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ),
          },
          {
            label: "قوانین و سیاست‌ها",
            value: "policy",
            content: (
              <div className="px-8 pb-4">
                <Accordion items={POLICY_ITEMS} defaultOpenItems={["p1"]} />
              </div>
            ),
          },
        ]}
        defaultValue="guide"
        glowColor="primary"
      />
    </div>
  );
}
