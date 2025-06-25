import React from 'react'
import ImageUploader from './ImageUploader'

export default function Upload() {
    return (
        <section className="w-full py-12 md:py-24 bg-gray-700 items-center justify-center" id="upload">
            <div className="px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Upload Your Brain Scan</h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Get instant analysis of your MRI or X-ray images. Our AI-powered system can detect abnormalities with
                            high precision.
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-center">
                    <ImageUploader />
                </div>
            </div>
        </section>
    )
}
