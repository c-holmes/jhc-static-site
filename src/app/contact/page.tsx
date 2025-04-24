import Image from "next/image";

export default function About() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8">
        <div>
          <Image
            className="hidden md:block"
            src="/globe.jpg"
            alt="Janet Holmes"
            height={500}
            width={500}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 text-jhcteal-100">
            Let&apos;s Get in Touch
          </h1>
          <p>
            If you would like to get in touch with me, please feel free to reach
            out via email at{" "}
            <a
              className="font-bold mb-4 text-jhcteal-100"
              href="mailto:janetholmesconsulting@gmail.com"
            >
              janetholmesconsulting@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
