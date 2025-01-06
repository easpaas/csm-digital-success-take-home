import Link from 'next/link'


const question_two = {
    main: "A customer has reached out asking, “When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?ˮ Please write a reply to the customer",
    a: "a. Your Enterprise customer is Trevor (they/them), a frontend developer at a winery using Next.js and Statsig and they are primarily interested in being able to use the Vercel platform with Next.js to do personalization when it comes to what they are able to offer in their online shop based on geolocation (some places donʼt allow for shipping of alcohol via delivery)."
}

export default function Two() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">
                <h2 className="text-3xl font-bold">Question 2</h2>
                <p className="py-2">{question_two.main}</p>
                <p className="py-2 pl-8">{question_two.a}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    {/* TODO: answer toggle */}
                </div>
            </div>
        </div>
    )
}