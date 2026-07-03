import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 font-medium transition-all duration-300",
        "bg-violet-600 hover:bg-violet-500",
        "hover:scale-105 active:scale-95",
        className
      )}
    >
      {children}
    </button>
  );
}