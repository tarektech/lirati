import { cn } from "@/lib/utils";

export function RichHtml({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <span
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
