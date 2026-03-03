import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Layout from './components/Layout';
function App() {

  return (
    <Router basename='/'>
      <Routes>
        <Route path="/" 
              element={<Layout>
                        <Home/>
                      </Layout>} />
      </Routes>
    </Router>
  )
}

export default App
