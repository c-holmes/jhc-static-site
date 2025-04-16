import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-jhcteal-100 py-8">
      <div className="max-w-screen-lg mx-auto flex items-center space-x-2 text-sm justify-center">
        <Link
          key={"https://www.linkedin.com/in/janetkholmes/"}
          href={"https://www.linkedin.com/in/janetkholmes/"}
          className="text-white"
        >
          LinkedIn
        </Link>
        <span className="text-white">|</span>
        <Link key={"/contact"} href={"/contact"} className="text-white">
          Contact
        </Link>
      </div>
      <div className="max-w-screen-lg mx-auto text-center text-xs mt-4">
        <p className="text-white">
          © {new Date().getFullYear()} Janet Holmes Consulting. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
