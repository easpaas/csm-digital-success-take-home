import Link from 'next/link'

const question_four = {
    main: "An Enterprise customer who has been sold Vercel through a reseller called Sitecore has reached out to the team to ask about the product. Can you give a brief 2-5 sentence introduction to Vercel to showcase what Vercel does?",
    a: "a. Your new Enterprise customer is Acme Universityʼs Marketing Department and their lead point person is called Clara (she/her). They have no web development or technical background and donʼt know what Vercel is."
}

export default function Four() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 4</h2>
                <p className="py-2">{question_four.main}</p>
                <p className="py-2 pl-8">{question_four.a}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    {/* TODO: answer toggle */}
                </div>
            </div>
        </div>
    )
}