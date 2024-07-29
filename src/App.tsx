import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"

import { NewNote } from "./cmps/NewNote"

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<NewNote/>} />
        <Route path="/:id" element={<h1>show</h1>} />
        <Route path="/:id/edit" element={<h1>edit</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
