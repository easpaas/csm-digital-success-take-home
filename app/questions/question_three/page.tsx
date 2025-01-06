import Link from 'next/link'

const question_three = {
    main: "Through use of a monitoring dashboard, you notice that an Enterprise customer has reduced the number of builds and their usage has gone down by about half quarter over quarter. Please write an email to the champion and executive sponsor of the account to re-engage and start to perform some discovery.",
    a: "a. Your customer is an SMB with yearly revenue about $5.5 million, 20 employees total with one developer. They have a $22K ARR Vercel subscription. The executive sponsor is the VP of marketing and Vercel hosts their marketing pages. They have a reverse proxy in front of Vercel (Cloudflare) and history shows some errors in their builds. The managerʼs name is Alex (she/her), Engineering Manager. The champion, Tanner – the lead on the project – it is found out, has left the company."
}

export default function Three() {
    return (
       <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 3</h2>
                <p className="py-2">{question_three.main}</p>
                <p className="py-2 pl-8">{question_three.a}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    {/* TODO: answer toggle */}
                </div>
            </div>
        </div>
    )
}