import { Card } from "react-bootstrap"

const Album = (props) => {
  const albums = props.albums
  console.log("ALBUMES", albums)

  return (
    <div className="row justify-content-between">
      <h4>Albumes</h4>
      {albums.map((album) => {
        return (
          <Card key={album.id} style={{ width: "14rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src={album.images[0].url}
              style={{
                width: "150px",
                display: "block",
                margin: "0 auto",
                marginTop: "30px",
                borderRadius: "50%",
              }}
            />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {album.artists[0].name} - {album.release_date.split("-")[0]}
              </Card.Subtitle>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default Album
