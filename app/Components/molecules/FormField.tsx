
import InputBox from "../atoms/InputBox"
type FormFieldProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    value: string,
    type: "text" | "password" | "number" | "date";
    labelChildren: string,
    min?: string,
    max?: string,
}

export default function FormField({onChange, placeholder, value, type, labelChildren, min, max}: FormFieldProps){
    return(
        <label>
            {labelChildren}
            <InputBox placeholder={placeholder} onChange={onChange} value={value} type={type} min={min} max={max} />
        </label>
    )
}