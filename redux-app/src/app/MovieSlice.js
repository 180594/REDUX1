import {createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice ({
     name:"movie",
     initialState:{
        Movies:[
           {title:'movie1',
            description:'the movie num1',
            postUrl:"https://media.npr.org/assets/img/2022/07/25/moviestill2_custom-717caa5dc12a74098925c048754fa2e19aff431e.jpg",
           rating:8
} ,
{title:'movie2',
            description:'the movie num2',
            postUrl:"https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg",
           rating:9
} ,
{title:'movie3',
            description:'the movie num3',
            postUrl:"https://i.ytimg.com/vi/sNGf-i9T-Zs/movieposter_en.jpg",
           rating:5
} 

        ]
     },
     reducers:{
addMovie:(State, action)=>{
   State.Movies.unishift(action.payload)
}
     }
})
export  const{addMovie}= MovieSlice.actions;
export default MovieSlice.reducer

