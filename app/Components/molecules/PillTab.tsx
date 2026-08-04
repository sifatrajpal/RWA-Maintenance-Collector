type PillTabProps = {
  label: string;
  active?: boolean;
};

export default function PillTab({ label, active = false }: PillTabProps) {
  return (
    <div
      className={`flex items-center gap-3 py-4 border-t border-[#3A4A3C] font-mono text-[13px] tracking-wide ${
        active ? 'text-[#F5F1E6] opacity-100' : 'text-[#EDE4CC] opacity-55'
      }`}
    >
      <span
        className={`w-[7px] h-[7px] rounded-full border ${
          active ? 'bg-[#E7C989] border-[#E7C989]' : 'border-current bg-transparent'
        }`}
      />
      {label}
    </div>
  );
}