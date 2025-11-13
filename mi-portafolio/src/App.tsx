
import { Routes,Route } from 'react-router-dom';
import { Header,Footer,Home,Educacion,Skills,Projects } from './components';





import './App.css'


function App() {


  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Educacion" element={ <Educacion /> } />
          <Route path="/Skills" element={ <Skills /> } />
          <Route path="/Projects" element={ <Projects /> } />
          <Route path="*" element={<h1>404 - Not Found - Página No encontrada</h1>} />
          
        </Routes>

      <Footer />
    </>
  )
}

export default App;


