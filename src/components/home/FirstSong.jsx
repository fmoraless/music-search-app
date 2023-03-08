import { Card } from "react-bootstrap"

const FirstSong = (props) => {
  const firstSong = props.firstSong
  console.log("PRIMERA CANCION comp", firstSong)

  return (
    <div>
      <h4>Resultado más relevante</h4>
      <Card>
        <Card.Img
          variant="top"
          src={firstSong.album.images[0].url}
          style={{ width: "100px" }}
        />
        <Card.Body>
          <Card.Title>{firstSong.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Footer>
            <div className="row">
              <div className="col-md-6">
                <small className="text-muted">
                  {firstSong.artists[0].name}
                </small>
              </div>
              <div className="col-md-6">
                <small className="text-muted">
                  {firstSong.type === "track"
                    ? "Canción"
                    : firstSong.type === "album"
                    ? "Álbum"
                    : ""}
                </small>
              </div>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FirstSong
