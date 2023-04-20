import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";


export default  configureStore({
    reducer:{
      Movies:MovieSlice
    }

    })
    

