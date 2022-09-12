import { useEffect , useState } from "react";
import useFetch from "./useFetch";
import Animelist from "./Animelist";

const Wishlist =()=>{

    let{data:animes,pending,error}=useFetch("https://api.jikan.moe/v4/anime");

    const [wishlistAnime , setwishlistAnime]= useState(null);

    const[wish,setwish]= useState(null);
    
    
    useEffect (()=>{

        let wish = localStorage.getItem("wish");
        wish= JSON.parse(wish);
        setwish(wish);

        
    },[])

    return( 
        <div>

            {error && <h1> data not found</h1>}
                {pending && <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden">Loading.....</span>
        </div>}
        {animes && <Animelist animes={animes.filter((animes)=>{return wish.includes(animes.mal_id)})} />}
        </div>
    );
}

export default Wishlist;