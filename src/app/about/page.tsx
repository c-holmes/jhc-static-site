import Image from "next/image";

export default function About() {
  return (
    <div>
      <div>
        <Image
          src="/janet-holmes.jpg"
          alt="Janet Holmes"
          height={500}
          width={500}
        />
        <h1>Hello, I am Janet Holmes. </h1>
        <p>
          I’m a Learning & Development Specialist who has discovered the power
          of visuals to capture key messages. My background in learning
          complements the strategy behind creating visual ‘maps’ that enhance
          comprehension and retention of key messages.{" "}
        </p>
        <p>
          In addition to delivering workshops, my main focus is now on the
          ‘maps’ or sketchnotes in a digital format. Developing skills and
          gaining knowledge is the front end of learning and growing – the
          harder part is making these new skills or behaviours ‘stick’. One way
          to increase ‘stickiness’ is to pair visuals with key messages and
          ideas. This engages both sides of the brain which deepens the learning
          and increases retention (stickiness)!{" "}
        </p>
      </div>
      <div>
        <Image
          src="/experience-icon.jpg"
          alt="Experience Icon"
          height={500}
          width={500}
        />
        <h2>Education & Experience</h2>
        <p>
          A degree in Health Studies from University of Waterloo and a MBA from
          York University prepared me for 5 years in public health and 30 years
          in a global financial services organization. I specialized in Learning
          & Development facilitation and consulting. A Certificate in Adult
          Learning from St Francis Xavier and a Certified Training & Development
          Practitioner (CTDP) certification further developed my learning
          expertise. Various other certifications (including Everything DiSC)
          allow me to help teams achieve their objectives through effective
          communication and relationship building. Being a member of the
          International Forum of Visual Practitioners and numerous courses
          supports my desire to continue to build my visual graphic skills.
        </p>
      </div>
    </div>
  );
}
