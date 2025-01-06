'use client'
import Link from 'next/link'
import AnswerToggle from "@/app/components/AnswerToggle.tsx"
import ANSWER_ONE  from "@/app/answers/ANSWER_ONE.mdx"


const question_one = { main: "An Enterprise customer has come to you to ask about the difference between React and Next.js and what the benefits are of using Next.js for her team. Please write a response to the customer.",
a: "a. Your customer is Christy (she/her), a project manager for the marketing department of a wearable tech company – in charge of making sure the marketing pages meet their core web vitals, SEO best practices, and conversion rate goals." };


export default function One() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 1</h2>
                <p className="py-2">{question_one.main}</p>
                <p className="py-2 pl-8">{question_one.a}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    <AnswerToggle>
                        <ANSWER_ONE />
                    </AnswerToggle>
                </div>
            </div>
        </div>
    )
}