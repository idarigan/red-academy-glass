import { Link } from "react-router-dom";
import { Navbar, ThemeChanger, Button } from "dara-ui";

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
   LAYOUT
   ============================================= */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
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
        themeChanger={
          <ThemeChanger
            iconOnly
            size="sm"
            availableThemes={[
              { value: "light", label: "روشن" },
              { value: "dark", label: "تاریک" },
            ]}
            defaultValue="light"
          />
        }
        themeChangerMobile={
          <ThemeChanger
            iconOnly
            size="sm"
            availableThemes={[
              { value: "light", label: "روشن" },
              { value: "dark", label: "تاریک" },
            ]}
            defaultValue="light"
            openUpward
          />
        }
        rightContent={
          <Link to="/register" className="hidden md:block">
            <Button size="sm" variant="primary">
              ثبت‌نام
            </Button>
          </Link>
        }
      />

      <main className="flex-1 pt-20">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border-primary)] py-8 px-4 text-center text-sm text-[var(--color-text-tertiary)]">
        © {new Date().getFullYear()} آکادمی رد — تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}
