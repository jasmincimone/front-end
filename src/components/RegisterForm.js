import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../actions/actions';
import Login from '../pages/Login';


function RegisterForm(props){
    const [initialForm] = useState({
        username: "",
        password: "",
        email:"",
    })
    const history = useHistory()

    //universal form handler
    const [form, setForm] = useState(initialForm)

     //Toggle click here button
     const [toggle, setToggle] = useState(false)

     function handleToggle(e){
         setToggle(!toggle)
 }

    //universal change handler
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.registerUser(form)
        setForm(initialForm)
        history.push('/dashboard');
    }
    return(
        <>
        {toggle ? <Login /> :
         <Form onSubmit={handleSubmit}>
            <Form.Group className="formGroup" controlId="formUsername">
            <Form.Label> Username: </Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter Username" onChange={handleChange}/>
            <Form.Text className="text-muted">
                username
            </Form.Text>
            </Form.Group>

            <Form.Group className="formGroup" controlId="formEmail">
            <Form.Label> Email: </Form.Label>
            <Form.Control type="text" name="email" placeholder="Enter Email Address" onChange={handleChange}/>
            <Form.Text className="text-muted">
                We'll never share your email address with anyone.
            </Form.Text>
            </Form.Group>
            
            <Form.Group className="formGroup" controlId="formPassword">
            <Form.Label> Password: </Form.Label>
            <Form.Control type="text" minLength="8" name="password" placeholder="Enter Password" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="formGroup" controlId="formCheckbox">
                <Form.Check type="checkbox" className="formGroup" label="Accepts Terms of Services" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>}
        
        <div>
            <h6>Already Have an Account.</h6> 
            <div onClick={handleToggle}>Click Here!</div>
        </div>
        </>
    )
}

export default connect (null, {registerUser})(RegisterForm)