const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("IP didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP(ip, (error, geo) => {
//   if (error) {
//     console.log("Geo didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned GeoCoords:', geo);
// });

// fetchISSFlyOverTimes(geo, (error, flyOverTimes) => {
//   if (error) {
//     console.log("Flyover Times didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned Flyover Times:', flyOverTimes);
// });

const printPassTimes = function(passTimes) {

  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("ISS Times didn't work!", error);
    return;
  }
  printPassTimes(passTimes);
});