import { Button, ButtonVariant } from "../atoms/Button";
import SectionHeader from "../molecules/SectionHeader";
import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  primaryVariant: ButtonVariant;
  secondaryLabel: string;
  secondaryHref: string;
  secondaryVariant: ButtonVariant;
};

export default function Hero({
  eyebrow, title, description,
  primaryLabel, primaryHref, primaryVariant,
  secondaryLabel, secondaryHref, secondaryVariant,
}: HeroProps) {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 pt-16 md:pt-20">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        size="hero"
      />

      <div className="flex flex-col sm:flex-row gap-3.5 mt-8">
        <Link href={primaryHref}>
          <Button variant={primaryVariant}>{primaryLabel}</Button>
        </Link>
        <Link href={secondaryHref}>
          <Button variant={secondaryVariant}>{secondaryLabel}</Button>
        </Link>
      </div>
    </div>
  );
}