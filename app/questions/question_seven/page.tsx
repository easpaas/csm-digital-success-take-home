import Link from 'next/link'

const question_seven = {
    main: "What resources would you want to prepare to make sure that the CISO of a newly signed Enterprise customer has everything they need to succeed as they migrate to the Enterprise version of the platform? Feel free to use documentation from vercel.com, and our YouTube channel to find assets to help",
    a: "a. Your customer is Ty, a CISO for a Fortune 500 firm that just signed on for Enterprise with Vercel Secure Compute. They would like to discuss the security products Vercel offers as well as Enterprise offering and roadmap"
}

export default function Seven() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 7</h2>
                <p className="py-2">{question_seven.main}</p>
                <p className="py-2 pl-8">{question_seven.a}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    {/* TODO answer toggle */}
                </div>
            </div>
        </div>
    )
}