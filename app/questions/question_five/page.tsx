import Link from 'next/link'


const question_five = {
    main: "A Pro customer who typically spends $900 monthly on Vercel has experienced a sudden increase to $2,100 for their next billing period due to increased data transfer costs. Their main website also shows poor Core Web Vitals performance, specifically a failed Largest Contentful Paint score",
    a: "a. Your champion is Travis (he/him) and he is the lead developer for a mobile game company, $14 million in revenue, 100 employees/10 Vercel team members. They are NOT an Enterprise customer yet, but have spent on average $900 per month in the last three months on Vercel. They are headquartered in Singapore."
}

export default function Five() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 5</h2>
                <p className="py-2">{question_five.main}</p>
                <p className="py-2 pl-8">{question_five.a}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    {/* TODO: answer toggle */}
                </div>
            </div>
        </div>
    )
}