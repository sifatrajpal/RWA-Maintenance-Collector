'use client'
import { useState } from "react";
import FormField from "@/app/Components/molecules/FormField";
import SelectField from "@/app/Components/molecules/SelectField";
import { Button } from "@/app/Components/atoms/Button";
import { addFlat } from "@/app/(admin)/manage-flats/actions";

export default function AddResidentForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [flatNumber, setFlatNumber] = useState("");
    const [role, setRole] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit() {
        const [firstName, ...rest] = fullName.trim().split(" ");
        const result = await addFlat({
            firstName,
            lastName: rest.join(" "),
            email,
            phoneNumber: phone,
            flatNumber,
            
        });

        if (result?.success === false) {
            setErrorMsg(result.message ?? "Something went wrong");
        } else {
            setFullName(""); setEmail(""); setPhone(""); setFlatNumber(""); setRole("");
            setErrorMsg("");
        }
    }

    return (
        <div className="border border-[#D9D6C7] bg-white p-8 mb-10">
            <h2 className="text-lg mb-1">Add a resident</h2>
            <p className="text-sm text-[#8A8A78] mb-6">Sends an invite email — the resident sets their own password on first login.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <FormField labelChildren="Full Name" placeholder="First and last name" value={fullName} type="text" onChange={(e) => setFullName(e.target.value)} />
                <FormField labelChildren="Email" placeholder="resident@email.com" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
                <FormField labelChildren="Phone Number" placeholder="+91" value={phone} type="text" onChange={(e) => setPhone(e.target.value)} />
                <FormField labelChildren="Flat Number" placeholder="e.g. B-204" value={flatNumber} type="text" onChange={(e) => setFlatNumber(e.target.value)} />
                <SelectField
                    labelChildren="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Owner or Tenant"
                    options={[{ label: "Owner", value: "owner" }, { label: "Tenant", value: "tenant" }]}
                />
            </div>

            {errorMsg && <p className="text-sm text-red-700 mt-2">{errorMsg}</p>}

            <Button variant="dark" children="Send invite" onClick={handleSubmit}  />
        </div>
    )
}