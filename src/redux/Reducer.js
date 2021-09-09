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
      // const fetchedData = [...state, ...action.payload];

      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;

// const saved = Object.entries(action.payload).map(([key, value]) => ({
//   item_id: key,
//   title: value[0].title,
//   category: value[0].category,
//   author: 'Author undefiend',
//   progress: {
//     currentChapter: 'Introduction',
//     completed: '0',
//   },
// }));

// const saved = Object.entries(action.payload);
