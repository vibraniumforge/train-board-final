const url = "http://localhost:3001/api/v1";

export const getAmtrakTrains = station => {
  console.log(
    "agetAmtrakTrains in amtrakTrainActions fires, station=",
    station
  );
  let data = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      mode: "no-cors"
    }
  };
  return dispatch => {
    // fetch(
    //   `https://cors-anywhere.herokuapp.com/http://dixielandsoftware.net/Amtrak/solari/data/${station}_schedule.php?data=${station}`,
    //   data
    // )
    fetch(`${url}/amtrak-station/${station}`, data)
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res =>
        dispatch({
          type: "GET_AMTRAK_TRAINS",
          payload: res.response.results[0].data
        })
      )
      .catch(err => console.error("Error in fetch=", err));
  };
};

// fetch(`${url}/trains`, data, station)
// fetch(`https://cors-anywhere.herokuapp.com/http://dixielandsoftware.net/Amtrak/solari/data/${station.station}_schedule.php?data=${station.station}`, data)

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
    fetch(
      `https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${station}`,
      data
    )
      // fetch(`${url}/station-search/${station}`, data)
      .then(res => res.text())
      // .then(res => document.querySelectorAll("table").item(0))
      // .then(res => console.log(res))
      .then(res => dispatch({ type: "GET_AMTRAK_STATION", payload: res }))
      .catch(err => console.error("Error in fetch=", err));
  };
};

// document.querySelectorAll("table").item(0).textContent.trim()
// document.getElementsByTagName("table").item(0).textContent.trim().split("\n ")

// function myFx(x) {
//   for (let i=0; i< x.length; i++)
//   {
//   console.log (`<a href="https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${x[i].trim().slice(0,3)}" target="_blank">${x[i]}</a> <br>`)
//   }
//   }

// myFx([ "OKJ Oakland Jack London Sq, CA ", " OAC Oakland Coliseum Airport, CA ", " ROY Royal Oak, MI ", " OKL Oakville, ON" ])

// function myFx(x) {
//   x.forEach(place=>
//   console.log (`<a href="https://cors-anywhere.herokuapp.com/http://www.dixielandsoftware.net/cgi-bin/station_search.pl?data=${place.trim().slice(0,3)}" target="_blank">${place}</a> <br>`)
//  )
// }
