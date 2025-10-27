
import { Routes,Route } from 'react-router-dom';
import { Header,Footer,Home,Educacion } from './components';





import './App.css'


function App() {


  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/educacion" element={ <Educacion /> } />
          <Route path="*" element={<h1>404 - Not Found - Página No encontrada</h1>} />
          
        </Routes>

      <Footer />
    </>
  )
}

export default App;


