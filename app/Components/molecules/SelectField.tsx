import SelectBox from "../atoms/SelectBox";

type SelectFieldProps = {
    labelChildren: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { label: string; value: string }[];
    placeholder: string;
}

export default function SelectField({ labelChildren, value, onChange, options, placeholder }: SelectFieldProps) {
    return (
        <label className="block mb-4 sm:mb-5">
            <span className="block text-xs tracking-widest uppercase text-[#8A7A4C] mb-2">{labelChildren}</span>
            <SelectBox value={value} onChange={onChange} options={options} placeholder={placeholder} />
        </label>
    )
}