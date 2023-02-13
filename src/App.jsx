import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"

const CLIENT_ID = "85a217cf2f08488ea7dba64799cf718e"
const CLIENT_SECRET = "a192e6af05994e168fa7c8fd7220e749"
const REDIRECT_URI = "http://localhost:5173/callback"

function App() {
  const [searchInput, setSearchInput] = useState("")
  const [accessToken, setAccessToken] = useState("")

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

  return (
    <div className="main-container">
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Buscar una canción"
            type="input"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                console.log("Enter key pressed")
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <Button
            onClick={() => {
              console.log("clicked button ")
            }}
          >
            Buscar
          </Button>
        </InputGroup>
      </Container>
      {/* Show results container */}
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  )
}

export default App
