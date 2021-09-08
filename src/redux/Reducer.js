const FETCH_DATA = 'setbook';
const initialState = [];

export const loadApi = (payload) => ({
  type: FETCH_DATA,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      const fetchedData = action.payload.name;
      return fetchedData;
    }
    default:
      return state;
  }
};

export default reducer;
