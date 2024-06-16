import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header'
function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={ <Login />} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;

