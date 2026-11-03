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
    title: "شرایط استرداد وجه",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        در صورتی که کمتر از ۲۴ ساعت از تایید پرداخت گذشته باشد و هنوز وارد
        محتوای دوره نشده باشید، وجه به طور کامل بازگردانده می‌شود. پس از دسترسی
        به محتوا، استرداد امکان‌پذیر نیست.
      </p>
    ),
  },
  {
    id: "p2",
    title: "قوانین استفاده از محتوا",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        تمام ویدیوها و مطالب دوره متعلق به آکادمی رد است. دانلود، تکثیر یا
        انتشار غیرمجاز محتوا پیگرد قانونی دارد و منجر به مسدودسازی دائمی حساب
        کاربری خواهد شد.
      </p>
    ),
  },
  {
    id: "p3",
    title: "سیاست حفظ حریم خصوصی",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        اطلاعات شخصی شما فقط برای احراز هویت، پشتیبانی و ارسال اعلانات دوره
        استفاده می‌شود و در اختیار هیچ شخص ثالثی قرار نمی‌گیرد. تصویر رسید
        پرداخت پس از تایید، حذف می‌شود.
      </p>
    ),
  },
  {
    id: "p4",
    title: "شرایط آزمون‌ها",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        حداقل نمره قبولی در هر آزمون ۷۰٪ است. در صورت عدم کسب نمره لازم،
        می‌توانید ویدیوهای فصل را دوباره تماشا کنید و در آزمون مجدد شرکت کنید.
        هیچ محدودیتی در تعداد تلاش وجود ندارد.
      </p>
    ),
  },
  {
    id: "p5",
    title: "قوانین ارتباط با پشتیبانی",
    content: (
      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
        برای پیگیری پرداخت، حتماً شماره تراکنش یا تصویر رسید را همراه داشته
        باشید. تیم پشتیبانی فقط از طریق ایمیل رسمی آکادمی پاسخ می‌دهد؛ به
        درخواست‌های خارج از این مسیر ترتیب اثر داده نمی‌شود.
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
              <div className="flex flex-col gap-4 pt-4">
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
              <div className="pt-4">
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
