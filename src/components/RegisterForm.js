import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../actions/actions';


function RegisterForm(props){
    const [initialForm] = useState({
        username: "",
        password: "",
        email:"",
    })
    const history = useHistory()

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
        history.push('/dashboard');
    }
    return(
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
        </Form>
    )
}

export default connect (null, {registerUser})(RegisterForm)