import './App.css';
import Header from './component/header';
import store from './redux/store';
import {Provider} from 'react-redux'
import NewContact from './component/newcontact';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route exact path='/' element={<Header/>}/>
            <Route path='/newContact' element={<NewContact/>}/>
          </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
