import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_one"
        >
          Question 1 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_two"
        >
          Question 2 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_three"
        >
          Question 3 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_four"
        >
          Question 4 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_five"
        >
          Question 5 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_six"
        >
          Question 6 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_seven"
        >
          Question 7 ➡
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4" 
          href="/questions/question_eight"
        >
          Question 8 ➡
        </Link>
      </footer>
    </div>
  );
}
