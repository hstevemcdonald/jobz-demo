import { ADD_JOB } from "../constants/action-types";

const initialState = {
  jobz: [],
  myjobz: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return { ...state, myjobz: [...state.myjobz, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
