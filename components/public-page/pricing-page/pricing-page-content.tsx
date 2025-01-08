"use client"
import { useWindowSize } from "@uidotdev/usehooks"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';

const font = Inter({
    weight:["700"],
    subsets:["latin"]
});

const font2 = Inter({
    weight:["600"],
    subsets:["latin"]
})

const font3 = Inter({
    weight:["400"],
    subsets:["latin"]
})



export const PricingPageContent =()=>{
    const router = useRouter()
    const [isYearly, setIsYearly] = useState(false);

    const onClick =()=>{
        router.push("/auth/register")
    }

    return(
        <main className="w-full flex flex-col h-[3600px]">
            <div className=" w-full h-[900px] flex flex-col items-center mt-[60px]">
                <div className={cn(
                    "text-[70px] text-center",
                    font2.className
                )}>
                    Flexible plans for everyone
                </div>
                <div>
                <div className={cn(
                    "p-8 min-h-screen flex flex-col items-center",
                    font2.className
                )}>
                    {/* Toggle Switch */}
                    <div className={cn(
                        "relative flex items-center bg-white border-[2px] shadow-md rounded-full h-[70px] mb-8 w-[500px]",
                        font.className
                    )}>
                        {/* Black Sliding Background */}
                        <div
                        className={`absolute bg-gray-800 rounded-full h-[50px] w-[240px] transition-transform duration-500 ${
                            isYearly ? "translate-x-[248px]" : "translate-x-2"
                        }`}
                        />

                        <button
                        className={`flex-1 py-2 text-md font-medium relative z-10 ${
                            !isYearly ? "text-white" : "text-gray-800"
                        }`}
                        onClick={() => setIsYearly(false)}
                        >
                        Billed monthly
                        </button>
                        <button
                        className={`flex-1 py-2 text-md font-medium relative z-10 ${
                            isYearly ? "text-white" : "text-gray-800"
                        }`}
                        onClick={() => setIsYearly(true)}
                        >
                        Billed yearly
                        </button>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px] max-w-[1300px] w-full">
                        {/* Standard Plan */}
                        <div
                        className={`bg-white p-6 border rounded-[15px] shadow-lg flex flex-col items-center h-[515px] transform transition-all duration-500 ${
                            isYearly ? "translate-y-0 opacity-100" : "translate-y-8 opacity-90"
                        }`}
                        >
                        <h2 className="text-[30px] flex justify-start w-full font-semibold mb-2">Standard</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Ideal for freelancers and small businesses just starting out.
                        </p>
                        <p className="text-[50px] w-full flex justify-start font-bold mb-4">
                            ${isYearly ? "99.99" : "9.99"}
                            <span className="text-base font-normal flex items-end mb-[17px]">/per month</span>
                        </p>
                        <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium mb-6 hover:bg-gray-900 transition">
                            Get started
                        </button>
                        <ul className="text-gray-600 space-y-4 flex items-start flex-col w-full">
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Real-time analytics
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Automated workflows
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Basic security features
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Email support
                            </li>
                        </ul>
                        </div>

                        {/* Professional Plan */}
                        <div
                        className={`bg-white p-6 border rounded-[15px] shadow-lg flex flex-col items-center h-[515px] transform transition-all duration-500 ${
                            isYearly ? "translate-y-0 opacity-100" : "translate-y-8 opacity-90"
                        }`}
                        >
                        <h2 className="text-[30px] flex justify-start w-full font-semibold mb-2">Professional</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Ideal for growing businesses needing advanced features.
                        </p>
                        <p className="text-[50px] w-full flex justify-start font-bold mb-4 text-green-500">
                            ${isYearly ? "299.99" : "29.99"}
                            <span className="text-base font-normal flex items-end mb-[17px] text-black">/per month</span>
                        </p>
                        <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium mb-6 hover:bg-gray-900 transition">
                            Get started
                        </button>
                        <ul className="text-gray-600 space-y-4 flex items-start flex-col w-full">
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            All basic plan features
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Advanced analytics
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Enhanced security
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Priority email support
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            API access for integrations
                            </li>
                        </ul>
                        </div>

                        {/* Enterprise Plan */}
                        <div
                        className={`bg-white p-6 border rounded-[15px] shadow-lg flex flex-col items-center h-[515px] transform transition-all duration-500 ${
                            isYearly ? "translate-y-0 opacity-100" : "translate-y-8 opacity-90"
                        }`}
                        >
                        <h2 className="text-[30px] flex justify-start w-full font-semibold mb-2">Enterprise</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Tailored for large organizations and institutions, the Enterprise Plan.
                        </p>
                        <p className="text-[50px] w-full flex justify-start font-bold mb-4">
                            ${isYearly ? "599.99" : "59.99"}
                            <span className="text-base font-normal flex items-end mb-[17px]">/per month</span>
                        </p>
                        <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium mb-6 hover:bg-gray-900 transition">
                            Get started
                        </button>
                        <ul className="text-gray-600 space-y-4 flex items-start flex-col w-full">
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            All pro plan features
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Customizable workflows
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Dedicated account manager
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            24/7 phone and email support
                            </li>
                            <li className="flex items-center">
                            <FaRegCheckCircle className="text-[16px] mr-2" />
                            Onboarding and training
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[400px] flex justify-center mt-[130px]">
                <div className="flex flex-row bg-green-500 w-[1310px] h-[370px] rounded-[25px] shadow-xl">
                    <div className={cn(
                        "w-[400px] h-[340px]  flex flex-col items-start mt-[60px] ml-[80px]",
                        font.className
                    )}>
                        <p className="text-[35px] text-white w-[350px]">
                            Upgrade when your investment grows
                        </p>
                        <button className="px-9 py-4 text-md bg-gray-700 text-gray-100 font-medium rounded-[10px] transition hover:bg-gray-300 hover:text-gray-800 mt-[40px]" onClick={onClick}>
                            Get started
                        </button>
                    </div>
                    <div className="w-full mt-[30px] ml-[170px]">
                        <div className={cn(
                            "text-white p-6 rounded-lg w-[800px] mx-auto",
                            font.className
                        )}>
                            <h2 className="text-2xl font-bold mb-4">
                                For organizations with <span className="font-extrabold">&gt;500 employees</span> that need comprehensive access controls and detailed auditing
                            </h2>
                            <p className={cn(
                                "mb-4 text-[18px]",
                                font2.className
                            )}>Everything in Business, plus:</p>
                            <ul className={cn(
                                "space-y-2",
                                font2.className
                            )}>
                                <li className="flex items-center">
                                <FaCheckCircle className="text-white mr-2" />
                                API access for deeper integration
                                </li>
                                <li className="flex items-center">
                                <FaCheckCircle className="text-white mr-2" />
                                Advanced customization options
                                </li>
                                <li className="flex items-center">
                                <FaCheckCircle className="text-white mr-2" />
                                Dedicated customer support
                                </li>
                                <li className="flex items-center">
                                <FaCheckCircle className="text-white mr-2" />
                                Advanced security features
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[1000px] mt-[210px] items-center flex-col flex">
                <div className="w-[1300px] h-[90px] flex flex-row space-x-[20px]">
                    <div className="w-[350px]">

                    </div>
                    <p className={cn(
                        "flex flex-col text-center text-[20px] w-[350px]",
                        font2.className
                    )}>
                        Basic Plan
                        <span>
                            $9.99
                        </span>
                    </p>
                    <p className={cn(
                        "flex flex-col text-center text-[20px] w-[350px]",
                        font2.className
                    )}>
                        Pro plan
                        <span>
                            $29.99
                        </span>
                    </p>
                    <p className={cn(
                        "flex flex-col text-center text-[20px] w-[350px]",
                        font2.className
                    )}>
                        Enterprise plan
                        <span>
                            $59.99
                        </span>
                    </p>
                </div>
                <div className={cn(
                    "flex items-center justify-start w-[1300px] h-[60px] bg-gray-100 rounded-[15px]",
                    font2.className
                )}>
                    <p className="text-xl ml-[40px] text-gray-700">Account features</p>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        3 users in workspace
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Weekly billing
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Collaborate work
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Workflow automatons
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className={cn(
                    "flex items-center justify-start w-[1300px] h-[60px] bg-gray-100 rounded-[15px] mt-[60px]",
                    font2.className
                )}>
                    <p className="text-xl ml-[40px] text-gray-700">Account features</p>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        3 users in workspace
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Weekly billing
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Collaborate work
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Workflow automatons
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className={cn(
                    "flex items-center justify-start w-[1300px] h-[60px] bg-gray-100 rounded-[15px] mt-[60px]",
                    font2.className
                )}>
                    <p className="text-xl ml-[40px] text-gray-700">Account features</p>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        3 users in workspace
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Weekly billing
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Collaborate work
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
                <div className="flex flex-row w-[1300px] h-[65px] items-center space-x-[25px] border-b-[1px] border-gray-300">
                    <p className={cn(
                        "text-gray-500 ml-[40px] w-[320px]",
                        font3.className
                    )}>
                        Workflow automatons
                    </p>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                    <div className="flex justify-center text-[18px] w-[350px]">
                        <FaCheckCircle/>
                    </div>
                </div>
            </div>
            <div className="mt-[200px] w-full h-[700px]">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className={cn(
                        "text-[45px] font-bold text-center mb-8",
                        font2.className
                    )}>Frequently asked questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* First Column */}
                        <div>
                            <h3 className={cn(
                                "text-[20px] mb-2",
                                font2.className
                            )}>What payment methods do you accept?</h3>
                            <p className={cn(
                                "text-gray-600",
                                font3.className
                            )}>
                                We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers.
                            </p>
                            </div>
                            <div>
                            <h3 className={cn(
                                "text-[20px] mb-2",
                                font2.className
                            )}>Can I change my subscription plan?</h3>
                            <p className={cn(
                                "text-gray-600",
                                font3.className
                            )}>
                                Yes, you can upgrade or downgrade your subscription plan at any time. Visit the "Subscription" or "Account Settings" section in your account dashboard to make changes.
                            </p>
                        </div>

                        {/* Second Column */}
                        <div>
                            <h3 className={cn(
                                "text-[20px] mb-2",
                                font2.className
                            )}>How do I access my billing history or invoices?</h3>
                            <p className={cn(
                                "text-gray-600",
                                font3.className
                            )}>
                                Your billing history and invoices can be accessed from your account dashboard under the "Billing" or "Invoices" section. You can view and download invoices for your records.
                            </p>
                            </div>
                            <div>
                            <h3 className={cn(
                                "text-[20px] mb-2",
                                font2.className
                            )}>How can I update my billing information?</h3>
                            <p className={cn(
                                "text-gray-600",
                                font3.className
                            )}>
                                You can update your billing information by logging into your account and navigating to the "Billing" or "Payment Settings" section. From there, you can modify your payment details.
                            </p>
                        </div>

                        {/* Third Column */}
                        <div>
                            <h3 className={cn(
                                "text-[20px] mb-2",
                                font2.className
                            )}>Can I cancel my subscription at any time?</h3>
                            <p className={cn(
                                "text-gray-600",
                                font3.className
                            )}>
                                Yes, you can cancel your subscription at any time through your account dashboard. Once canceled, you may lose access to premium features at the end of your billing cycle.
                            </p>
                            </div>
                            <div>
                            <h3 className={cn(
                                "text-[20px] mb-2",
                                font2.className
                            )}>How can I protect my software from viruses and malware?</h3>
                            <p className={cn(
                                "text-gray-600",
                                font3.className
                            )}>
                                We recommend updating your software regularly and using antivirus solutions. Please visit our support center for more tips on protecting your account and devices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}