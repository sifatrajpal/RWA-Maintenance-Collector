'use client'

import { Button } from "../atoms/Button";
import FormField from "../molecules/FormField";
import SectionHeader from "../molecules/SectionHeader";
import { sectionHeaderSizeProp } from "../molecules/SectionHeader";
import { useState } from "react";
import { LoginWithEmailAndPassword } from "@/app/login/actions";

type LoginFormProps = {
    title: string,
    description: string,
    eyebrow: string,
    size: sectionHeaderSizeProp,
}

export default function LoginForm({title, description, eyebrow, size}: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit() {
        const result = await LoginWithEmailAndPassword(email, password);
        if (result?.success === false) {
            setErrorMsg(result.message);
        }
        console.error('profile lookup error:', result)
    }

    return(
        <div className="w-full max-w-md mx-auto px-6 py-12 sm:px-0">
            <SectionHeader title={title} eyebrow={eyebrow} description={description} size={size} />

            <div className="mt-8 mb-2">
                <FormField labelChildren="Email" placeholder="you@greenfieldresidency.in" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
                <FormField labelChildren="Password" placeholder="*****" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            {errorMsg && <p className="text-sm text-red-700 mb-4">{errorMsg}</p>}

            <Button
                variant="dark"
                children="Sign in"
                onClick={handleSubmit}

            />

            <div className="flex justify-between text-sm mt-5">
                <a href="#" className="text-[#1C2317] underline underline-offset-2">Trouble signing in?</a>
                <a href="#" className="text-[#1C2317] underline underline-offset-2">New society? Register</a>
            </div>
        </div>
    )
}