import Link from "next/link";
import { Button, type ButtonVariant } from "@/components/ui";

export function CTA({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8">
      <Button asChild variant={variant}>
        <Link href={href}>{children}</Link>
      </Button>
    </div>
  );
}
