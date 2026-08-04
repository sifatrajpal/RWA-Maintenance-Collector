
type InputBoxProps = {
    placeholder: string;
    type: "text" | "password";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function InputBox({placeholder, value, type, onChange}: InputBoxProps){

    return(
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full border border-[#D9D6C7] bg-transparent px-4 py-3 text-sm placeholder:text-[#A8A38C] focus:outline-none focus:border-[#1C2317] transition-colors"
        />
    )
}