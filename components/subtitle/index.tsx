import { cn } from "@/lib/utils";

export default function SectionSubtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h4 className={cn("text-base", className)}>{children}</h4>;
}
