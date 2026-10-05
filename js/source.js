// *********************************************************************
// Homework 4 APIs
// *********************************************************************

function convertMsToMinSec(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const paddedSeconds = String(seconds).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

// **************** Update code below  **************** 


// IDs and secret token should come from Spotify
localStorage.setItem("artist_id", "5K4W6rqBFWDnAN6FQUkS6x");
localStorage.setItem("access_token", "BQAuY4_DEuSDUczrdFLJWUA95J1pFrUVIQxFsP_fXsOnYJkh6-JIHPOEZ3vctllJMuqNC4xvpNDuu1gBjLPAqECvvaTI7NS1XES0FtkDUE1FUAef4r-p030-FdYdLjyGdhYLUOHzjyBP");
localStorage.setItem("track_id_1", "5TRPicyLGbAF2LGBFbHGvO");
localStorage.setItem("track_id_2", "4EWCNWgDS8707fNSZ1oaA5");
localStorage.setItem("track_id_3", "0j2T0R9dR9qdJYsB7ciXhf");


function load(){
    
    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    






    
}
load();


   