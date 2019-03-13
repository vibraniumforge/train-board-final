const url = "http://localhost:3001/api/v1";

export const getAmtrakTrains = station => {
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };
  return dispatch => {
    fetch(`${url}/amtrak-station/${station}`, data)
      .then(res => res.json())
      // .then(res => console.log("res=", res))
      .then(res =>
        dispatch({
          type: "GET_AMTRAK_TRAINS",
          payload: res.data.results[0].data
        })
      )
      .catch(err => console.error("Error in getAmtrakTrains=", err));
  };
};

export const getAmtrakStation = station => {
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };
  return dispatch => {
    fetch(`${url}/amtrak-station-search/${station}`, data)
      .then(res => res.text())
      // .then(res => console.log("res=", res))
      .then(res => dispatch({ type: "GET_AMTRAK_STATION", payload: res }))
      .catch(err => console.log("Error in getAmtrakStation=", err));
  };
};

// fetch(
//   `https://cors-anywhere.herokuapp.com/http://dixielandsoftware.net/Amtrak/solari/data/${station}_schedule.php?data=${station}`,
//   data
// )

// fetch(`https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${station}`, data)
