type ResidentRow = { flat: string; resident: string; phone: string; role: string }

export default function ResidentsTable({ rows }: { rows: ResidentRow[] }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg">All residents</h2>
                <span className="text-xs border border-[#D9D6C7] px-2 py-1">{rows.length} residents</span>
            </div>
            <table className="w-full border-t border-[#D9D6C7] text-sm">
                <thead>
                    <tr className="text-left text-xs tracking-widest uppercase text-[#8A8A78]">
                        <th className="py-3 font-normal">Flat</th>
                        <th className="py-3 font-normal">Resident</th>
                        <th className="py-3 font-normal">Phone</th>
                        <th className="py-3 font-normal">Role</th>
                        <th className="py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.flat} className="border-t border-[#D9D6C7]">
                            <td className="py-4">{row.flat}</td>
                            <td className="py-4">{row.resident}</td>
                            <td className="py-4">{row.phone}</td>
                            <td className="py-4 capitalize">{row.role}</td>
                            <td className="py-4 text-right"><button className="underline text-sm">Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}