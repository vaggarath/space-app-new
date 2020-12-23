import Layout from "../../components/Layout";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function Endpoints({ res }) {
  return (
    <Layout page={"Page " + res.name}>
      <h1 className="text-5xl m-5">{res.name}</h1>
      <div className="description pb-5">
        <p className="text-center">{res.description}</p>
      </div>
      <div className="slide-container">
        <Slide>
          {
            res.flickr_images.map(item=>{
              return(
                <div className="each-slide bg-auto">
                <div className ="h-screen bg-auto bg-no-repeat bg-center" style={{'backgroundImage': `url(${item})`}}>
                  <span><a href={item} target="_blank">{item}</a></span>
                </div>
              </div>
              )
            })
          }
              

                   
        </Slide>
      </div>
    </Layout>
  );
}


export async function getServerSideProps({ query }) {
  console.log(query.endpoints);
  try {
    const res = await fetch(
      `https://api.spacexdata.com/v4/dragons/${query.endpoints}`
    );
    const result = await res.json();

    return {
      props: { res: result },
    };
  } catch (err) {
    console.error(err);
  }
}