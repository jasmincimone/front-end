import './App.css';
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import { useEffect } from 'react'
import {fetchTodo} from './actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {

  return (
    <div className="App">
      <h1>Daydream Trades</h1>
    </div>
  );
}

export default connect(mapStateToProps, {fetchTodo})(App)
