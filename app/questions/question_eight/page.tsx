import Link from 'next/link'

const question_eight = {
    main: "How could we improve or alter this familiarization exercise?"
}

export default function Eight() {
    return (
        <div className="flex flex-col items-center text-left px-16 py-16 min-h-screen">
            <div className="w-1/2 py-8">
                <Link className="text-2xl" href="/">⬅</Link>
            </div>
            <div className="w-1/2">  
                <h2 className="text-3xl font-bold">Question 8</h2>
                <p className="py-2">{question_eight.main}</p>
            </div>
            <div className="w-1/2">  
                <div className="w-full py-8">
                    {/* TODO: answer toggle */}
                </div>
            </div>
        </div>
    )
}