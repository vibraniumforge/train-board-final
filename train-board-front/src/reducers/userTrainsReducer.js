const initialState = {
  userTrains: [],
  trainPostResult: [],
  trainErrors: []
};

export default function userTrainsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_TRAINS":
      return { ...state, userTrains: action.payload };
    case "CREATE_TRAIN":
      const newTrain = {
        destination: action.payload.data.destination,
        origin: action.payload.data.origin,
        remarks_boarding: action.payload.data.remarks_boarding,
        scheduled: action.payload.data.scheduled,
        scheduled24: action.payload.data.scheduled24,
        newtime: action.payload.data.newtime,
        newtime24: action.payload.data.newtime24,
        service: action.payload.data.service,
        trainno: action.payload.data.trainno
      };
      return {
        ...state,
        submittedTrain: [...state.trainPostResult, newTrain]
      };
    case "TRAIN_ERRORS":
      const errors = {
        destination: action.payload.data.destination,
        origin: action.payload.data.origin,
        remarks_boarding: action.payload.data.remarks_boarding,
        scheduled: action.payload.data.scheduled,
        scheduled24: action.payload.data.scheduled24,
        newtime: action.payload.data.newtime,
        newtime24: action.payload.data.newtime24,
        service: action.payload.data.service,
        trainno: action.payload.data.trainno
      };
      return { ...state, trainErrors: [...state.trainErrors, errors] };
    case "DELETE_TRAIN":
      return {
        userTrains: state.userTrains.filter(train => train.id !== action.id)
      };
    // case "UPDATE_TRAIN":
    //   const updatedTrain = {
    //     id: action.train.id,
    //     9 more
    //   };
    //   return {
    //     ...state,
    //     userTrains: state.trains.map(train =>
    //       train.id === action.train.id
    //         ? (train = updatedTrain)
    //         : train
    //     )
    //   };
    default:
      return state;
  }
}
