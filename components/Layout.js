import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
        //classe du body
        <div className="bg-blue-900 pt-5 text-center min-h-screen text-white">
            {/* header */}
            <Head>
                <title>{page}</title>
            </Head>
            <header>
                <Link href="/">
                    <button>
                        <h1 className="text-6xl p-5">SPACE APP</h1>
                    </button>
                </Link>
                
        <div>
        
          <Image
            src="/space.jpg"
            alt="image d'en-tête"
            width="500"
            height="60"
            className="rounded-3xl object-center"
          />
        </div>
        </header>
        {/* corps de la page */}
        <main className="pt-4 mx-20">{children}</main>
        {/* footer */}
        <footer className="p-10">
          <Image
            src="/space.jpg"
            alt="image de pied de page"
            width="980"
            height="60"
            id="img-footer"
            className="rounded-3xl object-cover object-center"
          />
          <ul className="pt-10 pb-4 flex justify-around">
            <li>&#xA9; Vaggarath - JC - 2020</li>
          </ul>
      </footer>

        </div>
    )
}