 import { createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";
{/*// type TResData = {
//  id:number,title:string,prefix:string,img:string
//  }
// /**
//  * Async thunk action to fetch categories from the server.
//  *
//  * This function uses `createAsyncThunk` to handle the asynchronous operation
//  * of fetching categories from the API endpoint `http://localhost:3000/categories`.
//  * It handles both successful responses and errors, including Axios-specific errors.
//  *
//  * @async
//  * @function actGetCategories
//  * @param {void} _ - Unused parameter.
//  * @param {Object} thunkAPI - The thunk API object provided by Redux Toolkit.
//  * @param {Function} thunkAPI.rejectWithValue - Function to return a rejected action with a custom error message.
//  * @returns {Promise<any>} A promise that resolves with the fetched categories data or rejects with an error message.
//  *
//  * @throws {string} If an Axios error occurs, it returns the error message from the response or a generic error message.
//  * If the error is not an Axios error, it returns "An unknown error occurred".
//  */}
const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try{
        // const response = await axios.get<TResData>("http://localhost:3000/categories");
        const response = await axios.get("http://localhost:3000/categories");
        return response.data;
        // const data = response.data.map((el)=> el.);
        // return data;

    } catch(err){
        // return thunkAPI.rejectWithValue(err);
        if(axios.isAxiosError(err)){
            // Check if the error is an Axios error
            return rejectWithValue(err.response?.data.message || err.message);
        }
        else{
            return rejectWithValue("An unknown error occurred");
        }
        
    }
});

export default actGetCategories;