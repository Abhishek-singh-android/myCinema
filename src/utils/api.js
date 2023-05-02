import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzY3MDczOTcwNTUwZjBlYmIzMzZiMTFiNTJhNWY0NyIsInN1YiI6IjYzZTM0YTlmZGIxNTRmMDBhYjM4NzE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bVi6dUfUxfuEiuv6-nT2hcbekw_bXZEq7W8xRHCwEnk";

console.log(TMDB_TOKEN);

const headers = {
    Authorization:"bearer "+ TMDB_TOKEN,
};

export const fetchDataFromApi = async(url,params) =>{
    try{
        const {data} = await axios.get(BASE_URL+url,{
            headers,
            params
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
};