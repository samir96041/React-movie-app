import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getdata = createAsyncThunk(
  "getCards",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${data}`);
      console.log("get Response", response);
  
      const result = await response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


//All Apis in (endpoints)

export const getallapidata = createAsyncThunk(
    "getMovies",
    async ({ endpoint, page }, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${endpoint}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`
        );
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  

export const homeReducer = createSlice({
  name: "HomeR",
  initialState: {
    HomeData: [],
    IsAdding: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getdata.pending, (state) => {
      state.loading = true;
    });
    
    builder.addCase(getdata.fulfilled, (state, action) => {
      state.HomeData = action.payload;
      state.loading = false;
    });
    
    builder.addCase(getdata.rejected, (state, action) => {
      state.error = action.payload ? action.payload.message : "An error occurred";
      state.loading = false;
    });




    // All Api Data Resusable code
    builder.addCase(getallapidata.pending, (state) => {
        state.loading = true;
      });
      
      builder.addCase(getallapidata.fulfilled, (state, action) => {
        state.HomeData = action.payload;
        state.loading = false;
      });
      
      builder.addCase(getallapidata.rejected, (state, action) => {
        state.error = action.payload ? action.payload.message : "An error occurred";
        state.loading = false;
      });
  },
});

export default homeReducer.reducer;
