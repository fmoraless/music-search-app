import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap"
import { useState, useEffect } from "react"
import FirstSong from "./components/home/FirstSong.jsx"
import SongsList from "./components/home/SongsList.jsx"
import Album from "./components/home/Albums.jsx"

const CLIENT_ID = "85a217cf2f08488ea7dba64799cf718e"
const CLIENT_SECRET = "a192e6af05994e168fa7c8fd7220e749"

// const REDIRECT_URI = "http://localhost:5173/callback"

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("")
  const [firstSong, setFirstSong] = useState("")
  const [songsList, setSongsList] = useState("")
  const [artistsList, setArtistsList] = useState("")
  const [albumList, setAlbumList] = useState("")

  useEffect(() => {
    // API Access TOKEN
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    }

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data))
  }, [])

  // search
  async function search() {
    if (!searchInput) {
      console.log("searchInput no está definido")
      return
    }
    console.log("search for " + searchInput)
    const songParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken.access_token,
      },
    }

    try {
      const response = await fetch(
        "https://api.spotify.com/v1/search?q=" +
          searchInput +
          "&type=track,artist,album&limit=10",
        songParameters
      )
      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error?.message || "Error al llamar a la API de Spotify"
        )
      }

      const songs = data.tracks.items

      if (songs?.length) {
        setFirstSong(songs[0])

        const otherSongs = songs.slice(5, songs.length)
        setSongsList(otherSongs)

        const artistsIds = songs.map((song) => song.artists[0].id)
        /* get only 5 artists */
        const artistsList = artistsIds.slice(1, 6)
        setArtistsList(artistsList)

        const albums = songs.map((song) => song.album)
        const albumList = albums.slice(1, 6)
        setAlbumList(albumList)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    search()
  }, [])

  return (
    <div className="main-container">
      <Container>
        <h4 className="text-danger">Spotify Songs Search</h4>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Buscar una canción"
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search()
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button onClick={search}>Buscar</Button>
        </InputGroup>
      </Container>
      <Container>
        {firstSong && (
          <Row>
            <Col md={4}>
              <FirstSong firstSong={firstSong} />
            </Col>
            <Col md={8}>
              <SongsList songs={songsList} />
            </Col>
          </Row>
        )}
      </Container>
      <Container className="mt-5">
        {albumList && (
          <Row>
            <Album albums={albumList} />
          </Row>
        )}
      </Container>
    </div>
  )
}

export default App
