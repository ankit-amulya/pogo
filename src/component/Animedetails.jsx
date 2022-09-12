import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Animedetails = () => {
    let history=useHistory()

    let {mal_id}=useParams();

    let{data:animes,pending,error}=useFetch(`https://api.jikan.moe/v4/anime/${mal_id}`)
    
    return (
 <div>
    <h1>{error}</h1>
     {animes &&  <div>
        <h2>Title:{animes.title}</h2>
        <h2>Type:{animes.type}</h2>
        <h2>Source:{animes.source}</h2>
        <h2>Epispode:{animes.episode}</h2>
        <h2>Status:{animes.status}</h2>
        <h2>Airing:{animes.airing}</h2>
    </div>}
 </div>
     );
}
 
export default Animedetails;