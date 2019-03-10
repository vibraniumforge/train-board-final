const initialState = {
  amtrakTrains: [],
  amtrakStationSearchResult: ""
};

export default function amtrakTrainsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_AMTRAK_TRAINS":
      return { ...state, amtrakTrains: action.payload };
    case "GET_AMTRAK_STATION":
      return { ...state, amtrakStationSearchResult: action.payload };
    default:
      return state;
  }
}
