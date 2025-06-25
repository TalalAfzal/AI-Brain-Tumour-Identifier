import React from 'react'
import { IoMdArrowDropleftCircle } from 'react-icons/io';
import { FaCheckCircle, FaInfoCircle } from 'react-icons/fa';


export default function Features() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Advanced Detection Technology
                        </h2>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our platform combines state-of-the-art deep learning algorithms with medical expertise to provide
                            accurate results.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8 hover:scale-125">
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                        <div className="rounded-full bg-teal-100 p-3">
                            <FaCheckCircle className="h-6 w-6 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-bold">High Accuracy</h3>
                        <p className="text-center text-gray-500">
                            Our algorithms achieve over 95% accuracy in detecting various types of brain tumors.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:scale-125">
                        <div className="rounded-full bg-teal-100 p-3">
                            <IoMdArrowDropleftCircle className="h-6 w-6 text-teal-600" />
                        </div>
                        <h3 className="text-xl font-bold">Early Detection</h3>
                        <p className="text-center text-gray-500">
                            Identify potential issues earlier than traditional methods for better treatment outcomes.
                        </p>
                    </div>
                    <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm hover:scale-125">
                        <div className="rounded-full bg-teal-100 p-3">
                            <FaInfoCircle className="h-6 w-6 text-teal-600 hover:scale-125" />
                        </div>
                        <h3 className="text-xl font-bold">Detailed Reports</h3>
                        <p className="text-center text-gray-500">
                            Receive comprehensive analysis with visual markers and probability assessments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
