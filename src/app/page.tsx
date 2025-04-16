import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto p-4 font-[family-name:var(--font-geist-sans)]">
      <div>
        <Image
          src="/home-banner.jpg"
          alt="Visual Offerings"
          width={1024}
          height={500}
        />
      </div>
      <div>
        <h1 className="text-base md:text-3xl text-center py-14">
          A visual representation of key messages and graphics is a powerful way
          to make sense of complicated topics or situations and aid in memory
          recall as people apply concepts in life or work.
        </h1>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li className="border border-gray-300">
          <Image
            src="/vo-rebecca-sutherns-zoom-but-better.jpg"
            alt="Rebecca Sutherns - Zoom but Better"
            width={500}
            height={500}
          />
        </li>
        <li className="border border-gray-300">
          <Image
            src="/vo-empathy-elliott-masie.jpg"
            alt="Empathy - Elliott Masie"
            width={500}
            height={500}
          />
        </li>
        <li className="border border-gray-300">
          <Image
            src="/vo-carizon-final.jpg"
            alt="Carizon Strategic Plan 2018-2022"
            width={500}
            height={500}
          />
        </li>
      </ul>
      <div className="py-12 text-center">
        <Link
          key={"/visual-offerings"}
          href={"/visual-offerings"}
          className="bg-transparent hover:bg-jhcteal-100 text-jhcteal-100 font-semibold hover:text-white py-2 px-4 border border-jhcteal-100 hover:border-transparent rounded"
        >
          See more examples
        </Link>
      </div>
    </main>
  );
}
