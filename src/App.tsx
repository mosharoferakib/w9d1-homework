import Container from 'react-bootstrap/Container'
import Signup from './pages/Signup'
import Header from './Components/Header';

export default function App() {
  return (
    <>
      
      <Container className='App'>
        <h1>Matrix-Cars</h1>
        <Header />
        <Signup />
      </Container>
      

    </>
  );
}