import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const actGetProductByCategoryPrefix= createAsyncThunk("products/actGetProductByCategoryPrefix", async (prefix:string,thunkAPI) => {
   const { rejectWithValue } = thunkAPI;

   try{
       // const response = await axios.get<TResData>("http://localhost:3000/categories");
       const response = await axios.get(`http://localhost:3000/products?cat_prefix=${prefix}`);
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

export default actGetProductByCategoryPrefix;