/* eslint-disable quotes, jsx-quotes, no-unused-vars, no-console */

const FETCH_DATA = "fetchdata";
const initialState = [];

export const loadApi = (payload) => ({
  type: FETCH_DATA,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      const fetchedData = {
        ...state,
        ...action.payload,
      };

      // const saved = Object.entries(action.payload);

      return fetchedData;
    }
    default:
      return state;
  }
};

export default reducer;
