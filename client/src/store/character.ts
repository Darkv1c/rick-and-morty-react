import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCharacters } from './actions/character'
import { characters } from './types/character'

const initialState = null as characters

const character = createSlice({
    name: 'reducer',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => { 
        builder.addCase( getCharacters.fulfilled, (state, action:PayloadAction<characters>) => {
            return state = action.payload
         })
     }
})

export const {  } = character.actions
export default character.reducer