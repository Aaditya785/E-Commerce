import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEcomm = createAsyncThunk('fetchEcomm', async () => {
    const response = await fetch("https://my-json-server.typicode.com/Aaditya785/ecomm/products");
    return response.json();
})


const ecommSlice = createSlice({
    name: "ecomm",
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    reducers: {
        addProducts(state, action){
            console.log("This is inside the addProduct reducer",action.payload)
                state.data.push(action.payload);
        },
        removeProducts(state, action) {
            if (action.payload) {
                const newItem = state.data.filter((item) => item.id !== action.payload.id)
                state.data = newItem;
            }
        }
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(fetchEcomm.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(fetchEcomm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        
        builder.addCase(fetchEcomm.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        })

    }

});

export const {addProducts,removeProducts} = ecommSlice.actions;

export default ecommSlice.reducer;
// export const ecommProduct = ecommSlice.reducer.addProducts;