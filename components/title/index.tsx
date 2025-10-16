import { cn } from "@/lib/utils";

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-[34px]/9 md:text-[42px] md:leading-12 font-medium", className)}>
      {children}
    </h3>
  );
}
