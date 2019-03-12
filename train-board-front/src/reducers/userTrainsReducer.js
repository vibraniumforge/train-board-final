const initialState = {
  userSavedTrains: [],
  trainPostResult: [],
  trainErrors: [],
  trainToUpdate: []
};

export default function userTrainsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_TRAINS":
      return { ...state, userSavedTrains: action.payload };
    case "GET_TRAIN_BY_ID":
      return { ...state, trainToUpdate: action.payload.data };
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
      const userSavedTrains = state.userSavedTrains.filter(
        train => train.id !== action.payload.data.data.id
      );
      return { ...state, userSavedTrains };
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
