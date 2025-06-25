import React from 'react'

export default function HowItWorks() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
                            How It Works
                        </h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Our platform makes it easy to get quick and accurate analysis of brain scans.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 dark:bg-teal-600 dark:text-teal-100">
                            <span className="text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Upload Scan</h3>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            Upload your MRI or X-ray image through our secure platform.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 dark:bg-teal-600 dark:text-teal-100">
                            <span className="text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI Analysis</h3>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            Our advanced algorithms analyze the image for potential abnormalities.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-900 dark:bg-teal-600 dark:text-teal-100">
                            <span className="text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Get Results</h3>
                        <p className="text-center text-gray-500 dark:text-gray-400">
                            Receive detailed results with visual markers and recommendations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}