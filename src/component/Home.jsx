import useFetch from "./useFetch";
import Animelist from "./Animelist";

const Home = () => {
  
  let{data:animes,error,pending}=useFetch("https://api.jikan.moe/v4/anime");
   
    return (
        <div className="home">
  
    {pending && <h1>Loading....................</h1>}

    {animes && <Animelist animes={animes}  /> }


        </div>
      );
}
 
export default Home;