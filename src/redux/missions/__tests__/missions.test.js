import store from "../../configureStore";
import { fetchMissions, joinMission, leaveMission } from "../missions";

describe('Test missions reducers', () => {
  test('Fetch Missions', async () => {
    await store.dispatch(fetchMissions());
    expect(store.getState().missions).toBeTruthy();
  })

  test('Join Mission', async () => {
    const idToJoin = '9D1B7E0';
    await store.dispatch(fetchMissions());
    store.dispatch(joinMission(idToJoin));
    const { missions } = store.getState();
    const mission = missions.find((mission) => mission.mission_id === idToJoin)
    expect(mission).toBeTruthy();
    expect(mission.reserved).toBe(true);
  })

  test('Leave Mission', async () => {
    const idToLeave = '9D1B7E0';
    await store.dispatch(fetchMissions());
    store.dispatch(joinMission(idToLeave));
    const { missions } = store.getState();
    const mission = missions.find((mission) => mission.mission_id === idToLeave)
    
    // Mission Joined
    expect(mission).toBeTruthy();
    expect(mission.reserved).toBe(true);

    // dispatch leave mission and test reserved 
    store.dispatch(leaveMission(idToLeave));
    const newMissions = store.getState().missions;
    const newMission = newMissions.find((mission) => mission.mission_id === idToLeave)

    expect(newMission).toBeTruthy();
    expect(newMission.reserved).toBe(false);
  })
})