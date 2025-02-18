import Notes from "./assets/comp/notes"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import CreateNote from "./assets/comp/create"
import Edit from "./assets/comp/edit"
import './App.css'

function App() {

  return (
    <BrowserRouter>
            <Routes>
            <Route path="/" element={<Notes />}></Route>
            <Route path="/create" element={<CreateNote />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            </Routes>
        
    </BrowserRouter>
  )
}

export default App
