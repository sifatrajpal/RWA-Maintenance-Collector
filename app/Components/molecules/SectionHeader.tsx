import Eyebrow from "../atoms/Eyebrow";

const themes = {
  light: { eyebrow: 'brass', title: 'text-[#16231B]' },
  dark: { eyebrow: 'ink', title: 'text-[#F5F1E6]' },
} as const;

const sectionHeaderSizes = {
  hero: 'text-[40px] md:text-[64px] leading-[1.1] md:leading-[1.04]',
  default: 'text-[26px] md:text-[34px] leading-[1.25] md:leading-[1.2]',
  sm: 'text-[19px] md:text-[22px] leading-[1.4] md:leading-[1.5]',
};

export type sectionHeaderSizeProp = keyof typeof sectionHeaderSizes;

export type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow: string;
  size?: sectionHeaderSizeProp;
  theme?: keyof typeof themes;
};

export default function   SectionHeader({
  eyebrow, title, description, size = 'default', theme = 'light',
}: SectionHeaderProps) {
  const TitleTag = size === 'hero' ? 'h1' : 'h2';
  const t = themes[theme];

  return (
    <div>
      <Eyebrow color={t.eyebrow}>{eyebrow}</Eyebrow>
      <TitleTag className={`font-serif mt-3 md:mt-4 ${sectionHeaderSizes[size]} ${t.title}`}>
        {title}
      </TitleTag>
      {description && (
        <p className={`mt-3 md:mt-4 text-sm md:text-base leading-relaxed max-w-xl ${theme === 'dark' ? 'text-[#EDE4CC]' : 'text-[#2B3D2F]'}`}>
          {description}
        </p>
      )}
    </div>
  );
}