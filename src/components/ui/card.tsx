import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl",
        "p-6 transition-all duration-300",
        "hover:border-violet-500/30",
        className
      )}
    >
      {children}
    </div>
  );
}