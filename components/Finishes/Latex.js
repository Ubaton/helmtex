import React from "react";
import { ArrowRightCircle, GripHorizontal, ShieldCheck } from "lucide-react";


const benefits = [
    {    
        icon: <ShieldCheck className="w-6 h-6 text-green-600"/>,
        title: "Durability",
        text: "Latex backing extends life by adding strength and resistance to wear and tear, even in high-traffic areas"
    },
    {
        icon: <ArrowRightCircle className="w-6 h-6 text-green-600"/>,
        title: "Stability",
        text: "Maintains fabric weave integrity, preventing shifting, stretching, or distortion over time."
    },
    {
        icon: <GripHorizontal className="w-6 h-6 text-green-600"/>,
        title: "Enhanced Grip",
        text: "Non-slip surface reduces movement on furniture for a secure fit."
    }
];

export default function Latex() {
    return (
        <div className="max-w-3xl, mx-auto p-8">
            <h2  className="text-3xl text-gray-900 font-bold mb-6 text-center">
                LATEX
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((i) => (
                    <div
                    key={i.title} 
                    className="flex items-start space-x-4">
                        {i.icon}

                        <div>
                            <h3 className="font-semibold">
                                {i.title}
                            </h3>
                            <p className="text-sm text-gray-700">
                                {i.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
