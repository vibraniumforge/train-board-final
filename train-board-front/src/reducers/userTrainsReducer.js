const initialState = {
  userSavedTrains: [],
  trainToUpdate: [],
  trainCreateResult: [],
  trainErrors: []
};

export default function userTrainsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_TRAINS":
      return { ...state, userSavedTrains: action.payload };
    case "GET_TRAIN_BY_ID":
      return { ...state, trainToUpdate: action.payload };
    case "CREATE_TRAIN":
      return { ...state, trainCreateResult: action.payload };
    case "TRAIN_ERRORS":
      return { ...state, trainErrors: action.payload };
    case "DELETE_TRAIN":
      const newUserSavedTrains = state.userSavedTrains.filter(
        train => train.id !== action.payload.id
      );
      return { ...state, userSavedTrains: newUserSavedTrains };
    case "UPDATE_TRAIN":
      const updatedTrain = {
        id: action.payload.id,
        destination: action.payload.destination,
        origin: action.payload.origin,
        remarks_boarding: action.payload.remarks_boarding,
        scheduled: action.payload.scheduled,
        scheduled24: action.payload.scheduled24,
        newtime: action.payload.newtime,
        newtime24: action.payload.newtime24,
        service: action.payload.service,
        trainno: action.payload.trainno
      };
      return {
        ...state,
        userSavedTrains: state.userSavedTrains.map(train =>
          train.id === action.payload.id ? (train = updatedTrain) : train
        )
      };
    default:
      return state;
  }
}
