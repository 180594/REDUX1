import { useSelector } from "react-redux"
import MovieCard from "./MovieCard"


const MovieList =()=>{
   const list= useSelector(state=>state.Movies.Movies)
    return(
<div>
   {list.map((item,index)=>{
     return(
        <MovieCard Movies={item} key={index}/>
     )
    })}
</div>
    )
}
export default MovieList