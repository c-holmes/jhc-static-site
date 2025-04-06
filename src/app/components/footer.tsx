import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>
        <Link
          key={"https://www.linkedin.com/in/janetkholmes/"}
          href={"https://www.linkedin.com/in/janetkholmes/"}
        >
          LinkedIn
        </Link>
      </div>
      <div>
        <Link key={"/contact"} href={"/contact"}>
          Contact
        </Link>
      </div>
    </footer>
  );
}
