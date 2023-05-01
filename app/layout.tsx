import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import { name, description } from "../config/config";
import axios from "axios";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header className="">
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/CB.webp"
          width={40}
          height={40}
          className="mx-auto"
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4 font-coco">
            {name}
          </h1>
        </Link>
        <p className="text-slate-300">{description}</p>
        <div className="flex justify-center">
          <a
            className="mx-5 text-white border-b-2 border-white border-hidden duration-100 hover:border-solid"
            href="/about"
          >
            About
          </a>
          <a
            className="mx-5 text-white border-b-2 border-white border-hidden duration-100 hover:border-solid"
            href="/contact"
          >
            Contact
          </a>
          <a
            className="mx-5 text-white border-b-2 border-white border-hidden duration-100 hover:border-solid"
            href="/guide"
          >
            Guide
          </a>
        </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t flex justify-center border-slate-400 mt-12 py-6 text-center text-slate-400">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img
            alt="Licence Creative Commons"
            src="https://i.creativecommons.org/l/by/4.0/88x31.png"
          />
        </a>
        <br />
      </div>
      <p className="text-center">
        Cette œuvre est mise à disposition selon les termes de la{" "}
        <a
          rel="license"
          className="text-yellow-500"
          href="http://creativecommons.org/licenses/by/4.0/"
        >
          Licence Creative Commons Attribution 4.0 International
        </a>
      </p>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-80xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
