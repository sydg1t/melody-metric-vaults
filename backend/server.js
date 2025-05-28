const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
const path = require('path');
const port = process.env.PORT || 5000;
let trackArr, albumArr, artistArr, arraysObj, trackObj;

app.use(cors())

axios
    .get('https://api.deezer.com/chart/tracks')
    .then((result) => {
        trackArr = result.data.tracks.data.map((track) => {
            return {
              type: "track",
              name: track.title,
              id: track.id,
              artist: track.artist.name,
              position: track.position,
              imageURL: track.album.cover_medium,
            }
          });
        albumArr = result.data.albums.data.map((album) => {
            return {
              type: "album",
              name: album.title,
              id: album.id,
              artist: album.artist.name,
              position: album.position,
              imageURL: album.cover_medium
            }
          })
    
        artistArr = result.data.artists.data.map((artist) => {
            return {
              type: "artist",
              name: artist.name,
              position: artist.position,
              id: artist.id,
              fans: 0
            }
          })
          arraysObj = {
            'tracks': trackArr,
            'albums': albumArr,
            'artists': artistArr
          };
          
    }).catch((error) => {
        console.log(error);
    });
 arraysObj = {
            'tracks': trackArr,
            'albums': albumArr,
            'artists': artistArr
          };
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

        
app.get('/api', (req, res) => {
  res.send(arraysObj);
})
app.get('/api/tracks', (req, res) => {
    res.send(trackArr);
});
app.get('/api/albums', (req, res) => {
    res.send(albumArr);
});
app.get('/api/artists', (req, res) => {
    res.send(artistArr);
});
app.get('/api/track/:trackId', async (req, res) => {
  const trackId = req.params.trackId;
  try {
    const deezerResponse = await axios.get(`https://api.deezer.com/track/${trackId}`);
    res.send(deezerResponse.data);
    // const trackObj = {
    //   name : results.title,
    //   artist: results.artist.name,
    //   releaseDate: results.release_date,
    //   bpm: results.bpm,
    //   imageURL : results.album.cover_big
    // }
  } catch (error) {
    res.status(500).send('Error fetching track data');
  }
});
app.get('/api/album/:albumId', async (req, res) => {
    const albumId = req.params.albumId;
    try {
      const deezerResponse = await axios.get(`https://api.deezer.com/album/${albumId}`);
      res.send(deezerResponse.data);
    } catch (error) {
      res.status(500).send('Error fetching track data');
    }
});
app.get('/api/search', async (req, res) => { 
    const query = req.query.q;
    try {
        const deezerResponse = await axios.get(`https://api.deezer.com/search?q=${query}`);
        res.send(deezerResponse.data);
        console.log(deezerResponse.data);
    } catch (error) {
        res.status(500).send('Error fetching search results');
    }
});

// Serve static files from React
app.use(express.static(path.join(__dirname, '../build')));

// Serve React for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
