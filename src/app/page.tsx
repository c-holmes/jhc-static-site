import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Image
          src="/home-banner.jpg"
          alt="Visual Offerings"
          width={500}
          height={500}
        />
      </div>
      <main>
        <div>
          <h1>A visual representation of key messages and graphics is a powerful way to make sense of complicated topics or situations and aid in memory recall as people apply concepts in life or work.</h1>
        </div>
        <ul>
        <li>
          <Image
            src="/vo-rebecca-sutherns-zoom-but-better.jpg"
            alt="Rebecca Sutherns - Zoom but Better"
            width={500}
            height={500}
          />
        </li>
        <li>
          <Image
            src="/vo-empathy-elliott-masie.jpg"
            alt="Empathy - Elliott Masie"
            width={500}
            height={500}
          />
        </li>
        <li>
          <Image
            src="/vo-carizon-final.jpg"
            alt="Carizon Strategic Plan 2018-2022"
            width={500}
            height={500}
          />
        </li>
      </ul>
      <Link
       key={"/visual-offerings"}
       href={"/visual-offerings"}
       className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
        >
        See more examples      
      </Link>
      </main>
    </div>
  );
}
