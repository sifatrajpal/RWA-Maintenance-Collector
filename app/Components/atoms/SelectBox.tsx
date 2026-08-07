type SelectBoxProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[];
    placeholder: string;
}

export default function SelectBox({ value, onChange, options, placeholder }: SelectBoxProps) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="w-full border border-[#D9D6C7] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#1C2317]"
        >
            <option value="" disabled>{placeholder}</option>
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    )
}