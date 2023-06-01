import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header(){

    return (
            <Navbar bg='light' sticky='top' className='Header'>
                <Container>
                    <Navbar.Brand href='./App'>Matrix-Cars</Navbar.Brand>
                    <br></br>
                    <Navbar.Brand href='/Login'>Login</Navbar.Brand>
                    <br></br>
                    <Navbar.Brand href='/About'>About Us</Navbar.Brand>
                </Container>
            </Navbar>
    )
}
