import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchMissionsFromAPI from '../../utils/fetchMissionsFromAPI';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const initialState = [];

const fetchMissions = createAsyncThunk(
  GET_MISSIONS,
  async () => {
    const response = await fetchMissionsFromAPI();
    return response;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => (action.payload));
  },
});

export default missionsSlice.reducer;
export { fetchMissions };
