"use client"

import { usePathname, useRouter } from "next/navigation"
import React from "react"

export const SidebarItem = ({href, title, icon} : {
    href: string,
    title: string,
    icon: React.ReactNode
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;

    return (
        <div className={` flex  items-center ${selected ? "text-[#6a51a6]" : "text-slate-500"} cursor-pointer`} onClick={() => router.push(href)}>
            <div className="pr-2">
                {icon}
            </div>
            <div className={`font-bold ${selected ? "text-[#6a51a6]" : "text-slate-500"}`}>
                {title}
            </div>
        </div>
    )

}