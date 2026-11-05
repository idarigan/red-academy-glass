import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Button, SocialMedia } from "dara-ui";

/* =============================================
   NAV LINK DATA
   ============================================= */

const NAV_LINKS = [
  { label: "خانه", href: "/" },
  { label: "درباره ما", href: "/about" },
  { label: "راهنما و قوانین", href: "/guide" },
  { label: "تماس با ما", href: "/contact" },
];

/* =============================================
   SOCIAL ICONS
   ============================================= */

const TELEGRAM_ICON = (
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

/* =============================================
   THEME HOOK
   ============================================= */

type Theme = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("dara-ui-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) {}
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("dara-ui-theme", theme);
    } catch (_) {}
  }, [theme]);

  return { theme, setTheme };
}

/* =============================================
   THEME TOGGLE BUTTON
   ============================================= */

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next: Theme = theme === "light" ? "dark" : "light";

  return (
    <Button
      size="sm"
      variant="glass"
      onClick={() => setTheme(next)}
      aria-label={theme === "light" ? "حالت تاریک" : "حالت روشن"}
    >
      {theme === "light" ? (
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </Button>
  );
}

/* =============================================
   LAYOUT
   ============================================= */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR — dara ui handles mobile drawer + hamburger internally */}
      <Navbar
        brand={
          <Link
            to="/"
            className="font-bold text-lg text-[var(--color-primary)] no-underline"
          >
            آکادمی رد
          </Link>
        }
        links={NAV_LINKS}
        showSearch={false}
        showThemeChanger
        themeChanger={<ThemeToggle />}
        themeChangerMobile={<ThemeToggle />}
        rightContent={
          <Link to="/register" className="hidden md:block">
            <Button size="sm" variant="primary">
              ثبت‌نام
            </Button>
          </Link>
        }
      />

      <main className="flex-1 pt-20">{children}</main>

      {/* FLOATING SOCIAL */}
      <SocialMedia
        position="left"
        size="md"
        showLabels={false}
        links={[
          {
            platform: "instagram",
            url: "https://instagram.com/redacademy",
          },
          {
            platform: "telegram",
            url: "https://t.me/redacademy",
            icon: TELEGRAM_ICON,
            color: "#26A5E4",
          },
        ]}
      />

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border-primary)] py-8 px-4 text-center text-sm text-[var(--color-text-tertiary)]">
        © {new Date().getFullYear()} آکادمی رد — تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}
