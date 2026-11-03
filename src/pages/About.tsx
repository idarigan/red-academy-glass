import { Card, Accordion } from "dara-ui";

/* =============================================
   CONTENT DATA
   ============================================= */

const SECTIONS = [
  {
    title: "آکادمی رد چیست؟",
    body: "آکادمی رد یک پلتفرم آموزش آنلاین تخصصی است که با تمرکز بر آموزش ویدیویی گام‌به‌گام، مسیر یادگیری ساختارمند را برای دانشجویان فراهم می‌کند. هدف ما ساده‌سازی یادگیری حرفه‌ای است.",
  },
  {
    title: "چرا آکادمی رد؟",
    body: "هر فصل از دوره با آزمون همراه است تا مطمئن شوید مطالب را به‌درستی یاد گرفته‌اید. حداقل نمره قبولی ۷۰٪ است و تا رسیدن به این نمره، امکان ادامه فصل بعد وجود ندارد.",
  },
  {
    title: "اساتید ما",
    body: "تمام دوره‌ها توسط متخصصان با تجربه صنعتی تهیه شده‌اند و پس از تولید، توسط تیم کیفیت آکادمی رد بازبینی می‌شوند تا از نظر محتوا و کیفیت تصویر و صدا بی‌نقص باشند.",
  },
  {
    title: "پشتیبانی و ارتباط",
    body: "تیم پشتیبانی آکادمی رد از طریق صفحه تماس با ما، در تمام روزهای کاری پاسخگوی سوالات شماست. برای سوالات فنی نیز می‌توانید از همین مسیر استفاده کنید.",
  },
];

/* =============================================
   PAGE
   ============================================= */

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* HEADER */}
      <header className="text-center mb-12">
        <h1 className="font-bold text-4xl mb-3">
          درباره <span className="text-[var(--color-primary)]">آکادمی رد</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
          داستان ما، ماموریت ما و افرادی که پشت این پلتفرم ایستاده‌اند.
        </p>
      </header>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SECTIONS.map((s, i) => (
          <Card key={i} glow="primary" float>
            <h2 className="font-bold text-lg mb-2">{s.title}</h2>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {s.body}
            </p>
          </Card>
        ))}
      </div>

      {/* FAQ ACCORDION */}
      <section className="mt-16">
        <h2 className="font-bold text-2xl mb-6 text-center">سوالات پرتکرار</h2>
        <Accordion
          items={[
            {
              id: "q1",
              title: "آیا دوره برای مبتدی‌ها مناسب است؟",
              content: (
                <p className="text-sm text-[var(--color-text-secondary)]">
                  بله. فصل اول دوره از پایه‌ترین مفاهیم شروع می‌شود و نیازی به
                  پیش‌زمینه تخصصی ندارید.
                </p>
              ),
            },
            {
              id: "q2",
              title: "چگونه به محتوای دوره دسترسی پیدا کنم؟",
              content: (
                <p className="text-sm text-[var(--color-text-secondary)]">
                  پس از ثبت‌نام و تایید پرداخت توسط تیم پشتیبانی، اطلاعات ورود
                  از طریق پیامک برای شما ارسال می‌شود.
                </p>
              ),
            },
            {
              id: "q3",
              title: "اگر در آزمون مردود شوم چه می‌شود؟",
              content: (
                <p className="text-sm text-[var(--color-text-secondary)]">
                  می‌توانید ویدیوها را دوباره تماشا کنید و در آزمون مجدد شرکت
                  کنید. محدودیتی برای تعداد تلاش وجود ندارد.
                </p>
              ),
            },
          ]}
          defaultOpenItems={["q1"]}
        />
      </section>
    </div>
  );
}
