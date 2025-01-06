'use client'

import Link from 'next/link'
import AnswerToggle from "@/app/components/AnswerToggle.tsx"
import ANSWER_SIX  from "@/app/answers/ANSWER_SIX.mdx"

const question_six = {
    main: "An Enterprise customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. They have two questions",
    a: "1. Why didnʼt my MIUs cover this bill?",
    b: "2. I didnʼt use all my MIUs last month...so why didnʼt those roll over?",
    c: "a. What would be the best way to help mitigate this so we donʼt see these overage bills in the future?"
}

export default function Six() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 6</h2>
                <p className="py-2">{question_six.main}</p>
                <p className="py-2 ">{question_six.a}</p>
                <p className="py-2 ">{question_six.b}</p>
                <p className="py-2 pl-8">{question_six.c}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    <AnswerToggle>
                        <ANSWER_SIX />
                    </AnswerToggle>
                </div>
            </div>
        </div>
    )
}