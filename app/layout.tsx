import Link from "next/link";
// import file "golbabl.css"
import "./globals.css"
import Image from "next/image";
//import fontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css"

export const metadata = {
  title: "Next.js",
  description: "Generate by Next.js"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        {/* area header */}

        <header className="mt-3">
          {/* area image/banner */}
          {/* <img src="../images/logo.png" alt="Logo UTI" /> */}
          <Image src={"/images/logo.png"} alt="Logo UTI" width={320} height={60} priority></Image>

          {/* area menu */}
          <nav className="text-center mt-5 flex justify-center mr-7">
            <Link href={"/"} className="bg-teal-400 hover:bg-teal-500 text-black rounded-full px-5 py-2.5 mr-3">
              Data Mahasiswa</Link>
            <Link href={"/"} className="bg-teal-400 hover:bg-teal-500 text-black rounded-full px-5 py-2.5 ml-3">
              Log Data Mahasiswa</Link>
          </nav>
        </header>

        {/* area content */}
        <section className="m-5">
          {children}
        </section>

        {/* area footer */}
        <footer className="flex justify-center  bg-color1 text-white mt-5 py-5">
          Copyright &copy; 2024 - Rendika Ganteng
        </footer>
      </body>
    </html>
  );
}