const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("IP didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP("99.235.186.103", (error, geo) => {
//   if (error) {
//     console.log("Geo didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned GeoCoords:', geo);
// });