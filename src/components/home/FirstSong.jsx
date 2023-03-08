import { Card } from "react-bootstrap"
import s from "./style.module.css"

const FirstSong = (props) => {
  const firstSong = props.firstSong

  return (
    <div className="pt-3">
      <h4>Resultado más relevante</h4>
      <Card>
        <Card.Img
          variant="top"
          src={firstSong.album.images[0].url}
          className={s.img}
          /* style={{ width: "100px" }} */
        />
        <Card.Body>
          <Card.Title>{firstSong.name}</Card.Title>
          <Card.Text>
            Canción del disco {firstSong.album.name} -{" "}
            {firstSong.album.release_date.split("-")[0]}
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
