import "./App.css"
import Login from "./components/login/Login"

function App() {
  const a = "Hola"
  return (
    <div className="main-cointainer">
      <div className="main-left-child">
        <Login />
      </div>
      <div className="main-rigth-child">
        <div className="url('./assets/images')"></div>
      </div>
    </div>
  )
}

export default App
