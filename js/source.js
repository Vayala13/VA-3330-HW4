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
localStorage.setItem("album_id_1", "1ZkGNUz1un0b3Z7EsJl3ci");
localStorage.setItem("album_id_2", "4DOsPwJtokv6HEifZ6t5j6");
localStorage.setItem("album_id_3", "4SZko61aMnmgvNhfhgTuD3");
localStorage.setItem("album_id_4", "3hwveWhYFxGDLy6K6xlwFh");


async function load(){

    let artistID = localStorage.getItem("artist_id");
    let accessToken = localStorage.getItem("access_token");
    let trackID1 = localStorage.getItem("track_id_1");
    let trackID2 = localStorage.getItem("track_id_2");
    let trackID3 = localStorage.getItem("track_id_3");
    let albumID1 = localStorage.getItem("album_id_1");
    let albumID2 = localStorage.getItem("album_id_2");
    let albumID3 = localStorage.getItem("album_id_3");
    let albumID4 = localStorage.getItem("album_id_4");

    // Artist: name and image
    const response = await fetch(
        `https://api.spotify.com/v1/artists/${artistID}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
    const artist = await response.json();

    document.querySelector("#artist-name").textContent = artist.name;
    document.querySelector(".artist-image img").src = artist.images[0].url;

    // Popular: 3 tracks
    const trackIDs = [trackID1, trackID2, trackID3];
    const trackElements = document.querySelectorAll(".track");

    trackIDs.forEach(async (trackID, index) => {
        const response = await fetch(
            `https://api.spotify.com/v1/tracks/${trackID}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );
        const track = await response.json();
        const trackElement = trackElements[index];

        trackElement.querySelector("img").src = track.album.images[0].url;
        trackElement.querySelector(".track-title").textContent = track.name;
        trackElement.querySelector(".track-album").textContent = track.album.name;
        trackElement.querySelector(".track-number").textContent = track.track_number;
        trackElement.querySelector(".track-duration").textContent = convertMsToMinSec(track.duration_ms);
    });

    // Discography: 4 albums
    const albumIDs = [albumID1, albumID2, albumID3, albumID4];
    const albumElements = document.querySelectorAll(".album-card");

    albumIDs.forEach(async (albumID, index) => {
        const response = await fetch(
            `https://api.spotify.com/v1/albums/${albumID}`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        );
        const album = await response.json();
        const albumElement = albumElements[index];
        const releaseYear = album.release_date.split("-")[0];

        albumElement.querySelector("img").src = album.images[0].url;
        albumElement.querySelector("h3").textContent = album.name;
        albumElement.querySelector("p").textContent = `${releaseYear} • ${album.album_type}`;
    });


}
load();


   