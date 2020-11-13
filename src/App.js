
import './App.css';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import routes from './routes';

function App() {

  return (
    <div className="App">
      <Nav></Nav>
    {routes}
    </div>
  );
}

export default App;
