'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../atoms/Button";
import FormField from "../molecules/FormField";
import SectionHeader from "../molecules/SectionHeader";
import { UpdatePassword } from "@/app/update-password/action";

export default function UpdatePasswordForm() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit() {
        const result = await UpdatePassword(password);
        if (result?.success === false) {
            setErrorMsg(result.message ??  "Something went wrong");
        } else {
            router.push("/login");
        }
    }

    return (
        <div className="w-full max-w-md mx-auto px-6 py-12 sm:px-0">
            <SectionHeader
                eyebrow="ALMOST THERE"
                title="Set your password"
                description="Choose a password to finish setting up your account."
                size="default"
            />

            <div className="mt-8 mb-2">
                <FormField
                    labelChildren="New Password"
                    placeholder="*****"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            {errorMsg && <p className="text-sm text-red-700 mb-4">{errorMsg}</p>}

            <Button
                variant="dark"
                children="Set password"
                onClick={handleSubmit}
            />
        </div>
    )
}