import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://api.spacexdata.com/v3/rockets';

// Async Action Creators
export const fetchRocketsApi = createAsyncThunk(
  'rockets/fetchRocketsApi',
  async () => {
    const response = await axios.get(url);
    return response.data;
  },
);

// Slice Reducer
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: {
    [fetchRocketsApi.fulfilled]: (state, action) => {
      const rockets = action.payload.map((el) => ({
        rocketId: el.rocket_id,
        rocketName: el.rocket_name,
        rocketDesc: el.description,
        rocketImg: el.flickr_images,
      }));
      return rockets;
    },
  },
});

export default rocketsSlice.reducer;