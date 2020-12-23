import Link from "next/link";
import Layout from "../../components/Layout";

export default function Endpoints({ res }) {
  let compteur = 1
  return (
    <Layout page={"Page " + res.name}>
      <h1 className="text-5xl m-5">{res.name}</h1>
      <div className="description pb-5">
        <p className="text-center text-2xl">{res.agency}</p>
      </div>
      <img
                    src= {res.image}
                    alt= "Photo du pilote"
                    className="w-1/2 h-1/2 mx-auto mb-6"
                  />

    <div className="">
      {/* <h2 className="text-3xl">Lancements :</h2>  */}
          <Link href={`../launches/${res.launches[0]}`}>
              <a className="rounded-md">
                <h2 className="text-2xl text-blue-200 mb-6 uppercase tracking-wider text-black">
                  Lancement effectué
                </h2>
              </a>
          </Link>
    </div>
    </Layout>
  );
}


export async function getServerSideProps({ query }) {
  console.log(query.endpoints);
  try {
    const res = await fetch(
      `https://api.spacexdata.com/v4/crew/${query.endpoints}`
    );
    const result = await res.json();

    return {
      props: { res: result },
    };
  } catch (err) {
    console.error(err);
  }
}