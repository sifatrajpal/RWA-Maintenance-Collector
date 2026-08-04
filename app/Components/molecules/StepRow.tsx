import SectionHeader, { SectionHeaderProps } from "./SectionHeader";

type StepRowProps = SectionHeaderProps & {
  number: string;
};

export default function StepRow({ eyebrow, title, description, number, size, theme }: StepRowProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 md:py-11 border-t border-[#DED2AE]">
      <span className="font-mono text-sm md:text-[15px] text-[#B4863A] md:w-[150px] shrink-0">
        {number}
      </span>
      <div className="max-w-xl">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} size={size} theme={theme} />
      </div>
    </div>
  );
}