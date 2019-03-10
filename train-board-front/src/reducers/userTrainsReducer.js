const initialState = {
  userTrains: [],
  trainPostResult: [],
  trainErrors: [],
  trainToUpdate: []
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
      const userTrains = state.userTrains.filter(
        train => train.id !== action.payload.data.data.id
      );
      return { ...state, userTrains };
    case "UPDATE_TRAIN":
      const updatedTrain = {
        id: action.payload.data.data.id
        // 9 more
      };
      return {
        ...state,
        trainToUpdate: state.trainToUpdate.map(train =>
          train.id === action.payload.data.data.id
            ? (train = updatedTrain)
            : train
        )
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
