import Layout from "../components/Layout";
import Link from "next/link";

export default function Dragons({ res }) {
  return (
    <Layout page="Dragons">
      <ul className="flex justify-around py-10">
        {res.map((dragons, index) => (
          <li
            key={index}
            className="relative hover:shadow-md p-4 border border-blue-300 rounded-3xl bg-blue-300 md:w-auto flex-1 mx-2"
          >
            <Link href={`dragons/${dragons.id}`}>
              <a className="rounded-md">
                <div className="text-center">
                  <img
                    src={dragons.flickr_images[0]}
                    alt={dragons.name}
                    className="w-80 h-80 mx-auto mb-6"
                  />
                </div>
                <h2 className="text-2xl mb-6 uppercase tracking-wider text-black">
                  {dragons.name}
                </h2>
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
      "https://api.spacexdata.com/v4/dragons/"
    ).then((res) => res.json());

    return {
      props: { res },
    };
  } catch (err) {
    console.error(err);
  }
}