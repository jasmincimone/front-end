import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import RegisterForm from './components/RegisterForm'
import Navbartop from './components/NavBar';
import NavBottom from './components/NavBottom';
import { fetchSite } from './actions/actions';



const mapStateToProps = (state) => ({
  siteData: state.siteData,
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {
  useEffect(() => {
    props.fetchSite()
  }, [])
  console.log(props.siteData)

  return (
    <div className="App">
      <Navbartop/>
      <Switch>
      <Route path="/dashboard"> Hello </Route>
      {localStorage.getItem('token') ? "" : <RegisterForm />}
      </Switch>
      <NavBottom/>
    </div>
  );
}

export default connect(mapStateToProps, {fetchSite})(App);
