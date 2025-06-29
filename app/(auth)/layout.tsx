"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: "Register", href:"/register"},
    {name: "Login", href: "/login"},
    {name: "Forgot Password", href: "/forgot-password"}
];

const AuthLayout = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();

    return (
        <div>
            {navLinks.map((navLink) => {
                const isActive = pathname === navLink.href || (pathname.startsWith(navLink.href) && navLink.href !== "/")
                return (
                    <Link
                    className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                        href={navLink.href} 
                        key={navLink.name}
                    >
                        {navLink.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}

export default AuthLayout;
