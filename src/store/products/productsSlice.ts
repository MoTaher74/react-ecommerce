import { createSlice } from "@reduxjs/toolkit";
import { TLoad } from "@customtypes/shared";
import actGetProductByCategoryPrefix from "./act/actGetProductByCategoryPrefix";
import { TProduct } from "@customtypes/product";
interface ICategoriesState{
records:TProduct[];
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
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{

        productCleanUp:(state)=>{
            state.records=[];
        }
    },
    /**
     * extraReducers is a function that returns an object with three properties:
     * - pending: sets loading state to "pending" and error to null
     * - fulfilled: sets loading state to "succeeded" and records to the action.payload
     * - rejected: sets loading state to "failed" and error to the action.payload (if it is a string)
     */
    extraReducers:(builder) => {
        builder.addCase(actGetProductByCategoryPrefix.pending,(state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(actGetProductByCategoryPrefix.fulfilled,(state,action) => {
            state.loading = "succeeded";
            state.records = action.payload;
        });
        builder.addCase(actGetProductByCategoryPrefix.rejected,(state,action) => {
            state.loading = "failed";
            if(action.payload && typeof action.payload ==="string"){
                state.error = action.payload;
            }
 });
    
    
    }

});
export const {productCleanUp} = productSlice.actions;
export{actGetProductByCategoryPrefix};
export default productSlice.reducer;