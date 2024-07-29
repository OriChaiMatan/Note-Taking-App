import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import { Routes, Route, Navigate } from "react-router-dom"

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<h1>new</h1>} />
        <Route path="/:id" element={<h1>show</h1>} />
        <Route path="/:id/edit" element={<h1>edit</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
