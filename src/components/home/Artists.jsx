import { Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import { SpotiAPI } from "../../api/spotify.js"


const ArtistCards = (props) => {
  const artists = props.artists
  console.log("artists", artists)

  const [accessToken, setAccessToken] = useState("")

  async function getAccessToken() {
    const response = await SpotiAPI.getAccessToken()
    console.log("responseEXT", response)
    setAccessToken(response)
  }


  const artistData = []

  artists.forEach(async (id) => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await response.json()
    artistData.push(data)
  })

  console.log({ ARTDATA: artistData })

  return (
    <div>
      <h4>Artistas</h4>*{" "}

      <Card style={{ width: "14rem", height: "18rem" }}>
        <Card.Img
          variant="top"
          src=""
          style={{
            width: "150px",
            display: "block",
            margin: "0 auto",
            marginTop: "30px",
            borderRadius: "50%",
          }}
        />
        <Card.Body>
          <Card.Title>Artista</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Artista</small>
        </Card.Footer>
      </Card>

    </div>
  )
}

export default ArtistCards
