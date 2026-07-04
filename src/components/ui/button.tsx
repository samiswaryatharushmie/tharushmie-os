import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={
        variant === "primary"
          ? `
            rounded-xl
            bg-violet-600
            px-7
            py-4
            font-semibold
            transition-all
            duration-300
            hover:bg-violet-500
          `
          : `
            rounded-xl
            border
            border-violet-500/30
            bg-transparent
            px-7
            py-4
            font-semibold
            transition-all
            duration-300
            hover:bg-violet-500/10
          `
      }
    >
      {children}
    </button>
  );
}