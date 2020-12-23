import Layout from "../../components/Layout";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import YouTube from 'react-youtube';

export default function Endpoints({ res }) {
  return (
    <Layout page={"Page " + res.name}>
      <h1 className="text-5xl m-5">{res.name}</h1>
      <p className="text-2xl">{"Date de lancement (launch date) : " + res.date_local}</p>
      <div className="description pb-5 pt-5">
        <p className="text-center">{res.details}</p>
      </div>

      <YouTube
        videoId={res.links.youtube_id}   
        className={"mx-auto mt-5 mb-5"} 
      />

      <div className="slide-container">
        <h2 className="text-center text-4xl pb-5">Gallerie photo</h2>
        {
          res.links.flickr.original[0] == null ? (
            <h2 className="text-5xl">Aucune photo disponible</h2>
          ) : (
            <Slide>
                      {
                        res.links.flickr.original.map(item=>{
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
          )
        }
        
      </div>
    </Layout>
  );
}


export async function getServerSideProps({ query }) {
  console.log(query.endpoints);
  try {
    const res = await fetch(
      `https://api.spacexdata.com/v4/launches/${query.endpoints}`
    );
    const result = await res.json();

    return {
      props: { res: result },
    };
  } catch (err) {
    console.error(err);
  }
}