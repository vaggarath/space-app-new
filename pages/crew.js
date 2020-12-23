import Layout from "../components/Layout";
import Link from "next/link";

export default function Crew({ res }) {
  return (
    <Layout page="Crew">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {res.map((crew, index) => (
          <li
            key={index}
            className="relative hover:shadow-md p-4 border border-blue-300 rounded-3xl bg-blue-300 md:w-auto flex-1 mx-2 pb-5"
          >
            <Link href={`crew/${crew.id}`}>
              <a className="rounded-md">
                <div className="text-center">
                  <img
                    src={crew.image}
                    alt={crew.name + " (image absente)"}
                    className="w-80 h-80 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider text-black">
                  {crew.name}
                </h2>
                {
                    crew.status == "active" ? (
                        <p className="text-green-500 text-2xl">Actif</p>
                    ) : (
                        <p className="text-red-500 text-2xl">Inactif</p>
                    )
                }
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// fetch by server, rendered on a static generation
export async function getStaticProps(context) {
  try {
    const res = await fetch(
      "https://api.spacexdata.com/v4/crew/"
    ).then((res) => res.json());

    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}