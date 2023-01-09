import './HeaderNav.css'
import { Button, Container, Figure, Form, Nav, Navbar, } from 'react-bootstrap'


function HeaderNav() {
  return (
    
    <div>
        
        <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Youtube</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <img src="yt.png" alt="Bienvenue"className='imglogo1'/>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
  
}

export default HeaderNav