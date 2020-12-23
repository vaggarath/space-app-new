import Link from "next/link";
import Layout from '../components/Layout';


export default function Home() {

  return (
    <div>
      <Layout page={'Space-App - Home'}>

      <ul className="grid grid-cols-3 gap-4">
          <li
            className="relative hover:shadow-md p-8 border border-blue-400 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5"
          >
            <Link href={`/dragons`}>
              <a className="rounded-md text-black">
                <div className="text-center">
                  <img
                    src= "/dragon.jpg"
                    alt= "dragon de Space X"
                    className="w-40 h-40 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                  Dragons
                </h2>
              </a>
            </Link>
           
          </li>

          <li
            className="relative hover:shadow-md p-8 border border-blue-400 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5"
          >
            <Link href={`/launches`}>
              <a className="rounded-md text-black">
                <div className="text-center">
                  <img
                    src= "/launches.jpg"
                    alt= "image du cockpit d'un lancement Space X"
                    className="w-40 h-40 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                  Lancements (launches)
                </h2>
              </a>
            </Link>
           
          </li>

          <li
            className="relative hover:shadow-md p-8 border border-blue-400 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5"
          >
            <Link href={`/crew`}>
              <a className="rounded-md text-black">
                <div className="text-center">
                  <img
                    src= "/crew1.jpg"
                    alt= "photo du célèbre crew-1 en combinaison de vol"
                    className="w-40 h-40 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider">
                  Équipages (crew)
                </h2>
              </a>
            </Link>
           
          </li>
          
      </ul>

      </Layout>
    </div>
  )
}

