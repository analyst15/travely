"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const [openMore, setOpenMore] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleEnter = (setOpen: (v: boolean) => void) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setOpen(true);
    };

    const handleLeave = (setOpen: (v: boolean) => void) => {
        timeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 150); // 🔥 delay (adjust 100–250ms if needed)
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">

                {/* Logo */}
                <div className="text-white font-semibold text-lg">
                    Travely
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">

                    <Link href="#" className="text-green-400">Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Destinations</Link>
                    <Link href="#">Tours</Link>
                    <Link href="#">Gallery</Link>
                    <Link href="#">Blog</Link>

                    {/* More Pages Dropdown */}
                    <DropdownMenu open={openMore} onOpenChange={setOpenMore}>
                        <div
                            onMouseEnter={() => handleEnter(setOpenMore)}
                            onMouseLeave={() => handleLeave(setOpenMore)}
                        >
                            <DropdownMenuTrigger className="hover:text-white">
                                More Pages
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-60 rounded-2xl bg-white shadow-xl border p-3"
                            >
                                {[
                                    "Destination Details",
                                    "Tour Details",
                                    "Booking",
                                    "Testimonials",
                                    "Frequently Asked Questions",
                                    "Blog Details",
                                    "Terms",
                                    "Privacy",
                                    "404",
                                ].map((item) => (
                                    <DropdownMenuItem
                                        key={item}
                                        className="px-3 py-2.5 rounded-lg text-sm cursor-pointer focus:bg-gray-100 hover:bg-gray-100"
                                    >
                                        {item}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </div>
                    </DropdownMenu>

                    {/* Dropdown with Nested Menu */}
                    <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
                        <div
                            onMouseEnter={() => handleEnter(setOpenDropdown)}
                            onMouseLeave={() => handleLeave(setOpenDropdown)}
                        >
                            <DropdownMenuTrigger className="hover:text-white">
                                Dropdown
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="start"
                                sideOffset={12}
                                className="w-52 rounded-2xl bg-white shadow-xl border p-2"
                            >
                                <DropdownMenuItem className="px-3 py-2.5 rounded-lg hover:bg-gray-100">
                                    Dropdown 1
                                </DropdownMenuItem>

                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="px-3 py-2.5 rounded-lg hover:bg-gray-100">
                                        Deep Dropdown
                                    </DropdownMenuSubTrigger>

                                    <DropdownMenuSubContent className="rounded-xl p-2">
                                        <DropdownMenuItem className="px-3 py-2 rounded-md hover:bg-gray-100">
                                            Deep Item 1
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="px-3 py-2 rounded-md hover:bg-gray-100">
                                            Deep Item 2
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="px-3 py-2 rounded-md hover:bg-gray-100">
                                            Deep Item 3
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>

                                <DropdownMenuItem className="px-3 py-2.5 rounded-lg hover:bg-gray-100">
                                    Dropdown 2
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-2.5 rounded-lg hover:bg-gray-100">
                                    Dropdown 3
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-2.5 rounded-lg hover:bg-gray-100">
                                    Dropdown 4
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </div>
                    </DropdownMenu>

                    <Link href="#">Contact</Link>
                </nav>

                {/* CTA */}
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">
                    Get Started
                </Button>
            </div>
        </header>
    );
}