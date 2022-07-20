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
  reducers: {
    joinMission: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? { ...mission, reserved: true } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
    leaveMission: {
      reducer: (state, action) => state.map((mission) => (
        mission.mission_id === action.payload ? { ...mission, reserved: false } : mission
      )),
      prepare: (id) => ({
        payload: id,
      }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => (action.payload));
  },
});

const { joinMission, leaveMission } = missionsSlice.actions;

export { fetchMissions, joinMission, leaveMission };
export default missionsSlice.reducer;
