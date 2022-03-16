import {useState} from 'react'
import {connect} from 'react-redux'
import { loginUser } from './actions/actions'

function LoginForm(props){
    const [initialForm] = useState({
        username: "",
        password: ""
    })

    //universal form handler
    const [form, setForm] = useState(initialForm)

    //universal change handler
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.registerUser(form)
        setForm(initialForm)

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>
            <label for="username">Username: </label>
            <input type="text" name="username" onChange={handleChange}/>
            <label for="password">Password:</label>
            <input type="text" name="textContent" onChange={handleChange}/>
            <label for="email">Email:</label>
            <input type="text" name="email" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default connect (null, {})(LoginForm)