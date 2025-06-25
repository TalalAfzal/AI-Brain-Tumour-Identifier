import React from 'react'

export default function CTA() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600">
            <div className="container px-4 md:px-6 text-center">
                <div className="mx-auto max-w-3xl space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                        Ready to Experience the Future of Medical Imaging?
                    </h2>
                    <p className="text-white/80 md:text-xl/relaxed">
                        Join thousands of medical professionals who trust our platform for accurate brain tumor detection.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
                        <button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 rounded-lg p-2 cursor-pointer font-semibold transition duration-200 ease-in-out">
                            Get Started Now
                        </button>
                        <button size="lg" variant="outline" className="text-white border-white hover:bg-teal-700 rounded-lg p-2 cursor-pointer font-semibold transition duration-200 ease-in-out">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}