import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function About() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8">
        <Image
          className="border-gray-300 border hidden md:block"
          src={`${basePath}/janet-holmes.jpg`}
          alt="Janet Holmes"
          height={500}
          width={500}
        />
        <Image
          className="border-gray-300 border rounded-full md:hidden max-w-[200px] mx-auto"
          src={`${basePath}/janet-holmes-mobile.jpg`}
          alt="Janet Holmes"
          height={500}
          width={500}
        />
        <div>
          <div>
            <h1 className="text-5xl font-bold mb-4 text-jhcteal-100">
              Janet Holmes
            </h1>
            <h2 className="text-xl font-bold">Visual Practitioner</h2>
            <p>
              I am a visual practitioner who uses graphic recording and graphic
              facilitation to help teams and organizations make sense of their
              conversations. I have a passion for helping people understand and
              communicate complex ideas through visual means.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mt-6">Education & Experience</h2>
            <p>
              A degree in Health Studies from University of Waterloo and a MBA
              from York University prepared me for 5 years in public health and
              30 years in a global financial services organization. I
              specialized in Learning & Development facilitation and consulting.
              A Certificate in Adult Learning from St Francis Xavier and a
              Certified Training & Development Practitioner (CTDP) certification
              further developed my learning expertise. Various other
              certifications (including Everything DiSC) allow me to help teams
              achieve their objectives through effective communication and
              relationship building. Being a member of the International Forum
              of Visual Practitioners and numerous courses supports my desire to
              continue to build my visual graphic skills.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row justify-around items-center w-full mt-8">
          <li className="my-2 md:mb-0">
            <Image
              className="h-20 object-contain"
              src={`${basePath}/ifvp-member-badge.png`}
              alt="ifvp member badge"
              height={500}
              width={500}
            />
          </li>
          <li className="my-2 md:mb-0">
            <Image
              className="h-20 object-contain"
              src={`${basePath}/i4pl+member-logo-2020-eng.jpg`}
              alt="i4pl member logo"
              height={500}
              width={500}
            />
          </li>
          <li className="my-2 md:mb-0">
            <Image
              className="h-18 object-contain"
              src={`${basePath}/disc-certified-facilitator.png`}
              alt="disc certified facilitator"
              height={500}
              width={500}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
