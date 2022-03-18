import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import Navbartop from './components/NavBar';
import NavBottom from './components/NavBottom';
import { fetchSite } from './actions/actions';
import MyNews from './pages/MyNews';



const mapStateToProps = (state) => ({
  siteData: state.siteData,
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {
  useEffect(() => {
    props.fetchSite()
  }, [])

  return (
    <div className="App">
      <Navbartop/>

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/mynews">
          <MyNews />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dashboard"> My Dashboard </Route>
      </Switch>

      <NavBottom/>
    </div>
  );
}

export default connect(mapStateToProps, {fetchSite})(App);
