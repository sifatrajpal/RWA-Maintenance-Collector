import InputBox from "../atoms/InputBox";

type FormFieldProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    value: string,
    type: "text" | "password";
    labelChildren: string
}

export default function FormField({onChange, placeholder, value, type, labelChildren}: FormFieldProps){
    return(
        <label className="block mb-4 sm:mb-5">
            <span className="block text-xs tracking-widest uppercase text-[#8A7A4C] mb-2">
                {labelChildren}
            </span>
            <InputBox placeholder={placeholder} onChange={onChange} value={value} type={type} />
        </label>
    )
}