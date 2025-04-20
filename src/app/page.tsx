import Image from "next/image";
import Link from "next/link";
import ImageGridWithModal from "./components/ImageGridWithModal";

const images = [
  {
    src: "/vo-rebecca-sutherns-zoom-but-better.jpg",
    alt: "Rebecca Sutherns - Zoom but Better",
  },
  {
    src: "/vo-empathy-elliott-masie.jpg",
    alt: "Empathy - Elliott Masie",
  },
  {
    src: "/vo-carizon-final.jpg",
    alt: "Carizon Strategic Plan 2018-2022",
  },
];

export default function Home() {
  return (
    <main>
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
      <ImageGridWithModal images={images} />
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
