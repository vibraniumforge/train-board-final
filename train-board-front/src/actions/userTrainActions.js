const url = "http://localhost:3001/api/v1/trains";

export const getUserTrains = () => {
  let data = {
    method: "GET",
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
      .catch(err => console.log("Error in getUserTrains=", err));
  };
};

export const getTrainById = id => {
  let data = {
    method: "GET",
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
      .then(res =>
        dispatch({
          type: "GET_TRAIN_BY_ID",
          payload: res.data
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
          res.json().then(res => {
            dispatch({
              type: "CREATE_TRAIN",
              payload: res.data
            });
          });
        } else {
          res.json().then(res =>
            dispatch({
              type: "TRAIN_ERRORS",
              payload: res.data
            })
          );
        }
      })
      .catch(err => console.log("Error in createTrain=", err));
  };
};

export const updateTrain = (id, train) => {
  let data = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors",
      cache: "no-cache"
    },
    body: JSON.stringify({ train })
  };
  return dispatch => {
    fetch(`${url}/${id}`, data)
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: "UPDATE_TRAIN",
          payload: res.data
        })
      )
      .catch(err => console.log("Error in updateTrain=", err));
  };
};

export const deleteTrain = id => {
  let data = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      mode: "no-cors",
      cache: "no-cache"
    }
  };
  return dispatch => {
    fetch(`${url}/${id}`, data)
      .then(res => res.json())
      .then(res =>
        dispatch({
          type: "DELETE_TRAIN",
          payload: res.data
        })
      )
      .catch(err => console.log("Error in deleteTrain=", err));
  };
};

// suggested with throw err

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

// export const createTrain = train => {
//   let data = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       mode: "no-cors",
//       cache: "no-cache"
//     },
//     body: JSON.stringify({ train })
//   };
//   return dispatch => {
//     fetch(`${url}`, data)
//       .then(res => {
//         const resp = res.json();
//         if (res.ok) {
//           return resp;
//         }
//         throw Error(resp);
//       })
//       .then(train => dispatch({ type: "CREATE_TRAIN", payload: train }))
//       .catch(err => dispatch({ type: "TRAIN_ERRORS", payload: err }))
//       .catch(err => console.log("Error in createTrain=", err));
//   };
// };

// update with axios

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

// del with axios

// export const deleteTrain = train => {
//   console.log("deleteTrain in userTrainActions fires");
//   return dispatch => {
//     axios
//       .delete(`http://localhost:3001/api/v1/trains/${train}`)
//       .then(res =>
//         dispatch({
//           type: "DELETE_TRAIN",
//           payload: res
//         })
//       )
//       .catch(err => console.log("Error in deleteTrain=", err));
//   };
// };
