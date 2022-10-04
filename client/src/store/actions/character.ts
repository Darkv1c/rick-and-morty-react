import { createAsyncThunk } from "@reduxjs/toolkit";
import { characters } from '../types/character'
import axios from "axios";

export const getCharacters = createAsyncThunk(
    'character/getCharacters',
    async (page:number) => {
        let response = null
        await axios.get("https://rickandmortyapi.com/api/character", {params: {page}})
            .then(({data}:{data:characters}) => {
                response = data
                response!.info.currentPage = page
            })
            .catch(e => {throw e})
        return response
    }
)