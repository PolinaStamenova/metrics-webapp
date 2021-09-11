/* eslint-disable quotes, jsx-quotes, no-unused-vars, no-console */

const FETCH_DATA = "fetchdata";
const SET_CITY = "setcity";
const SET_CAT = "setcategory";

const initialState = [];

export const loadApi = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setCateg = (payload) => ({
  type: SET_CAT,
  payload,
});

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
};

const cityReducer = (state = "", action) => {
  switch (action.type) {
    case SET_CITY: {
      return action.payload;
    }
    default:
      return state;
  }
};

const categoryReducer = (state = "", action) => {
  switch (action.type) {
    case SET_CAT: {
      return action.payload;
    }
    default:
      return state;
  }
};

export { citiesReducer, cityReducer, categoryReducer };
