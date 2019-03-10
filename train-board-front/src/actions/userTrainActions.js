const url = "http://localhost:3001/api/v1";

export const getUserTrains = () => {
  console.log("getUserTrains in userTrainActions fires");
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };
  return dispatch => {
    fetch(`${url}/trains`, data)
      .then(res => res.json())
      .then(res => dispatch({ type: "GET_USER_TRAINS", payload: res.data }))
      .catch(err => console.error("Error in getUserTrains=", err));
  };
};

export const createTrain = train => {
  console.log("createTrain in userTrainActions fires");
  let data = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ train })
  };
  return dispatch => {
    fetch(`${url}/trains`, data)
      .then(res => {
        if (res.ok) {
          res.json().then(train =>
            dispatch({
              type: "CREATE_TRAIN",
              payload: train
            })
          );
        } else {
          res.json().then(errors =>
            dispatch({
              type: "TRAIN_ERRORS",
              payload: errors
            })
          );
        }
      })
      .catch(err => console.log("Error in createTrain=", err));
  };
};

export const updateTrain = id => {
  console.log("updateTrain in userTrainActions fires");
  let data = {
    method: "PATCH",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  };
  return dispatch => {
    fetch(`${url}/trains/${id}/edit`, data)
      .then(res => {
        if (res.ok) {
          res.json().then(train =>
            dispatch({
              type: "UPDATE_TRAIN",
              payload: train
            })
          );
        } else {
          res.json().then(errors =>
            dispatch({
              type: "TRAIN_ERRORS",
              payload: errors
            })
          );
        }
      })
      .catch(err => console.log("Error in updateTrain=", err));
  };
};

export const deleteTrain = id => {
  console.log("deleteTrain in userTrainActions fires");
  let data = {
    method: "DELETE",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
      mode: "no-cors",
      cache: "no-cache"
    }
  };
  return dispatch => {
    fetch(`${url}/trains/${id}`, data)
      .then(res => res.json())
      .then(train =>
        dispatch({
          type: "DELETE_TRAIN",
          payload: train
        })
      )
      .catch(err => console.log("Error in deleteTrain=", err));
  };
};
