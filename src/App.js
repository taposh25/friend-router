import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';


function App() {
  return (
    <Router>
     <Routes>

      <Route exact path = "/" element ={<Home/>}/>
      <Route path="/home" element ={<Home/>}/>
      <Route path="*" element = {<NoMatch />}/>
      <Route path="/friend/:friendId" element ={<FriendDetail/>}/>

          
      </Routes>
    
    </Router>
  );
}

export default App;