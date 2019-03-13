import axios from "axios";
const url = "http://localhost:3001/api/v1/trains";

export const getUserTrains = () => {
  let data = {
    method: "GET",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors",
      cache: "no-cache"
    }
  };
  return dispatch => {
    fetch(`${url}`, data)
      .then(res => res.json())
      .then(res => dispatch({ type: "GET_USER_TRAINS", payload: res.data }))
      .catch(err => console.error("Error in getUserTrains=", err));
  };
};

export const getTrainById = id => {
  console.log("getTrainById in userTrainActions fires, id=", id);
  let data = {
    method: "GET",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors",
      cache: "no-cache"
    }
  };
  return dispatch => {
    fetch(`${url}/${id}`, data)
      .then(res => res.json())
      .then(train =>
        dispatch({
          type: "GET_TRAIN_BY_ID",
          payload: train
        })
      )
      .catch(err => console.log("Error in getTrainById=", err));
  };
};

export const createTrain = train => {
  let data = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors",
      cache: "no-cache"
    },
    body: JSON.stringify({ train })
  };
  return dispatch => {
    fetch(`${url}`, data)
      .then(res => {
        if (res.ok) {
          res.json().then(train => {
            dispatch({
              type: "CREATE_TRAIN",
              payload: train
            });
          });
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

// fetch(`${url}`, data) //axios.post(data)
//     .then (res => {
//       const resp = res.json()
//       if (res.ok) {
//         return resp
//       }

//       throw Error(resp)
//     })
//     .then(train =>dispatch({type: "CREATE_TRAIN",payload: train}))
//     .catch(err => dispatch({
//       type: "TRAIN_ERRORS",
//       payload: err
//     }));

export const updateTrain = (id, updatedTrain) => {
  console.log(
    "updateTrain in userTrainActions fires, id=",
    id,
    "updatedTrain=",
    updatedTrain
  );
  let data = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors",
      cache: "no-cache"
    },
    body: JSON.stringify({ updatedTrain })
  };
  return dispatch => {
    fetch(`${url}/${id}/edit`, data)
      .then(res => res.json())
      .then(train =>
        dispatch({
          type: "UPDATE_TRAIN",
          payload: train
        })
      )
      .catch(err => console.log("Error in updateTrain=", err));
  };
};

// export const updateTrain = (id, updatedTrain) => {
//   console.log("updateTrain in userTrainActions fires");
//   return dispatch => {
//     axios
//       .patch(`http://localhost:3001/api/v1/trains/${id}`)
//       .then(res =>
//         dispatch({
//           type: "UPDATE_TRAIN",
//           payload: res
//         })
//       )
//       .catch(err => console.log("Error in updateTrain=", err));
//   };
// };

// export const deleteTrain = id => {
//   console.log("deleteTrain in userTrainActions fires");
//   let data = {
//     method: "DELETE",
//     mode: "no-cors",
//     headers: {
//       Accept: "application/json",
//       // "Content-Type": "application/json",
//       mode: "no-cors",
//       cache: "no-cache"
//     }
//   };
//   return dispatch => {
//     fetch(`${url}/trains/${id}`, data)
//       .then(res => res.json())
//       .then(train =>
//         dispatch({
//           type: "DELETE_TRAIN",
//           payload: train
//         })
//       )
//       .catch(err => console.log("Error in deleteTrain=", err));
//   };
// };

export const deleteTrain = train => {
  console.log("deleteTrain in userTrainActions fires");
  return dispatch => {
    axios
      .delete(`http://localhost:3001/api/v1/trains/${train}`)
      .then(res =>
        dispatch({
          type: "DELETE_TRAIN",
          payload: res
        })
      )
      .catch(err => console.log("Error in deleteTrain=", err));
  };
};
