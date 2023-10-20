import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Login from "./Components/Login";
import Navbar from './Components/navbar';
import ContactForm from './Components/contactus';
import Profile from './Components/profile';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 import Registration from './Components/registration';
 import StudentHome from './Components/studenthome';
 import StudentTestPage from './Components/studenttestpage';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Routes>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/signin" Component={Registration}/> 
        <Route exact path="/Contactus" Component={ContactForm}/>
        <Route exact path="/profile" Component={Profile}/>
        <Route exact path="/studentHome" Component={StudentHome}/>
        <Route exact path="/studenttest" Component={StudentTestPage}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
