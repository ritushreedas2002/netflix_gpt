import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        //gptMovies:null,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeResults:(state)=>{
            state.movieNames=null;
            state.movieResults=null;
        }
    }
})
export const {toggleGptSearchView,addGptMovieResult,removeResults}=gptSlice.actions;
export default gptSlice.reducer;