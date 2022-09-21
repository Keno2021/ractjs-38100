
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItenListContainer from './components/ItenListContainer';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItenListContainer greeting={'Bienvenidos a la tienda de KD'}/>

    </>
  )

}

export default App;
