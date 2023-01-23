// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Container from 'react-bootstrap/Container';
import NftForm from './components/NftForm'
import ImageForm from './components/ImageForm';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
      <NftForm/>
      {/* <ImageForm></ImageForm> */}
      </Container>
    </div>
  );
}

export default App;
