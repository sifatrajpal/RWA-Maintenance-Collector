import LoginBrandPanel from "@/app/Components/organisms/LoginBrandPanel";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid md:grid-cols-2">
            <LoginBrandPanel />
            <div className="flex items-center justify-center bg-[#F1EFE3] px-6 py-12">
                {children}
            </div>
        </div>
    )
}