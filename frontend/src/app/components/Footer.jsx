import React from 'react'
import Link from 'next/link'
import { GiBrain } from "react-icons/gi";

export default function Footer() {
    return (
        <footer className="border-t bg-gray-800">
            <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
                <div className="flex flex-col gap-2 md:gap-4 md:w-1/3">
                    <div className="flex items-center gap-2">
                        <GiBrain className="h-6 w-6 text-teal-600" />
                        <span className="text-xl font-bold">NeuraScan</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        Advanced brain tumor detection using artificial intelligence. Helping medical professionals save lives.
                    </p>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Product</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    API
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-sm font-medium">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
                    <p className="text-xs text-gray-500">© 2025 NeuraScan. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-xs hover:underline">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-xs hover:underline">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
