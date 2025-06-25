import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="w-full px-20 py-12 md:py-24 lg:py-32 bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Advanced Brain Tumor Detection Using AI
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our cutting-edge technology helps medical professionals detect brain tumors with higher accuracy and
                            efficiency. Upload your MRI or X-ray images for instant analysis.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <button className="bg-teal-600 hover:bg-teal-700 p-2 cursor-pointer rounded-lg text-white font-semibold transition duration-200 ease-in-out">
                                Upload Scan
                            </button>
                            <button className='bg-gray-700 hover:bg-gray-600 p-2 cursor-pointer rounded-lg text-white font-semibold transition duration-200 ease-in-out'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto lg:ml-auto flex justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/placeholder.svg?height=500&width=500"
                                alt="Brain scan visualization"
                                fill
                                className="object-cover rounded-lg shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
