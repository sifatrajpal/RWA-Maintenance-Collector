type FileInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({ onChange }: FileInputProps) {
    return (
        <input
            type="file"
            accept="image/*"
            onChange={onChange}
            className="w-full ml-2 border border-[#D9D6C7] bg-transparent px-4 py-3 text-sm file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:bg-[#1C2317] file:text-white file:text-xs"
        />
    )
}