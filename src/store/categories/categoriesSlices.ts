import { createSlice } from "@reduxjs/toolkit";
import  actGetCategories  from "./act/actGetCategories";
import { TLoad } from "@customtypes/shared";
import { TCategory } from "@customtypes/category";
interface ICategoriesState{
records:TCategory[];
// records: {id:number,title:string,prefix:string,img:string}[];
loading:TLoad;
// loading:"idle" | "pending" | "succeeded" | "failed";
error:string | null;
}




const initialState:ICategoriesState = {
    records:[],
    loading:"idle",
    error:null,
}
const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    /**
     * extraReducers is a function that returns an object with three properties:
     * - pending: sets loading state to "pending" and error to null
     * - fulfilled: sets loading state to "succeeded" and records to the action.payload
     * - rejected: sets loading state to "failed" and error to the action.payload (if it is a string)
     */
    extraReducers:(builder) => {
        builder.addCase(actGetCategories.pending,(state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetCategories.fulfilled,(state,action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetCategories.rejected,(state,action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload ==="string"){
                state.error = action.payload;
            }
 });
    
    
    }

});
export{actGetCategories};
export default categoriesSlice.reducer;