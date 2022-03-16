import {useState} from 'react'
import {connect} from 'react-redux'
import { register } from './actions/actions'

function RegisterForm(props){
    const [initialForm] = useState({
        username: "",
        password: "",
        email:"",
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
        props.register(form)
        setForm(initialForm)

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label for="username">Register: </label>
            <input type="text" name="username" onChange={handleChange}/>
            <label for="password">Password:</label>
            <input type="text" name="textContent" onChange={handleChange}/>
            <label for="email">email:</label>
            <input type="text" name="email" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default connect (null, {register})(RegisterForm)