import { useRef, useState } from "react";
import { Button } from "dara-ui";

/* =============================================
   CONSTANTS
   ============================================= */

const MAX_MB = 5;
const ACCEPT = "image/png,image/jpeg,image/webp,application/pdf";

/* =============================================
   COMPONENT
   ============================================= */

type Props = {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
};

export default function ReceiptUpload({ file, onChange, error }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [localError, setLocalError] = useState<string>("");

  /* ---------- PICK ---------- */
  const pick = (f: File | undefined) => {
    setLocalError("");
    if (!f) return;

    if (f.size > MAX_MB * 1024 * 1024) {
      setLocalError(`حجم فایل نباید بیشتر از ${MAX_MB} مگابایت باشد`);
      return;
    }
    const ok = f.type.startsWith("image/") || f.type === "application/pdf";
    if (!ok) {
      setLocalError("فقط تصویر یا PDF مجاز است");
      return;
    }
    onChange(f);
  };

  const shown = localError || error;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[var(--color-text-secondary)]">
        تصویر رسید پرداخت
      </label>

      {/* DROP ZONE */}
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          pick(e.dataTransfer.files[0]);
        }}
        className={`
          cursor-pointer rounded-[14px] border-2 border-dashed
          px-4 py-8 text-center transition-colors
          ${
            shown
              ? "border-[var(--color-danger)]"
              : "border-[var(--color-border-primary)] hover:border-[var(--color-primary)]"
          }
          bg-[var(--color-bg-tertiary)]
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT}
          className="hidden"
          onChange={(e) => pick(e.target.files?.[0])}
        />

        {file ? (
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              {file.name}
            </span>
            <span className="text-xs text-[var(--color-text-tertiary)]">
              {(file.size / 1024).toFixed(0)} KB. برای تغییر کلیک کنید
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-[var(--color-text-tertiary)]">
            <span className="text-3xl">📎</span>
            <span className="text-sm">
              فایل رسید را انتخاب یا اینجا رها کنید
            </span>
            <span className="text-xs">
              PNG · JPG · WEBP · PDF (حداکثر {MAX_MB}MB)
            </span>
          </div>
        )}
      </div>

      {/* REMOVE */}
      {file && (
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => onChange(null)}
          className="self-start"
        >
          حذف فایل
        </Button>
      )}

      {/* ERROR */}
      {shown && (
        <span className="text-xs text-[var(--color-danger)]">{shown}</span>
      )}
    </div>
  );
}
