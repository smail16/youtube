import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderNav from './components/main/HeaderNav/HeaderNav';
import Main from './components/main/Main';
import VideoPlayer from './components/VideoPlayer';
import Videos from './components/Videos';
import BodyLeft from './components/bodyleft/BodyLeft';
import BodyRight from './components/bodyright/BodyRight';
import Body from './components/body/Body';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  return <div classeName="App">
    
              <HeaderNav/>
              <Body/>
              
          </div>

}

export default App;
