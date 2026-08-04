// components/organisms/PageIntro.tsx
import SectionHeader from "../molecules/SectionHeader";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-4 ">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} size="hero" />
    </div>
  );
}