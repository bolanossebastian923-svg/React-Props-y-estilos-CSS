import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Sidebar nombre="Sebastian Bolaños"></Sidebar>
      <Dashboard nombreTarjeta="Sebastian Bolaños"></Dashboard>
    </div>
  )
}
export default App