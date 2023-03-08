import { ListGroup } from "react-bootstrap"

const SongsList = (props) => {
  const songs = props.songs
  console.log({ fromList: songs })
  return (
    <div>
      <h4>Canciones</h4>
      <ListGroup>
        {songs.map((song) => (
          <ListGroup.Item
            key={song.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              {song.name}
              <div className="text-muted">{song.artists[0].name}</div>
            </div>
            <div>{(song.duration_ms / 60000).toFixed(2)} min</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default SongsList
