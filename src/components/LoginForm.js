import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import { loginUser } from '../actions/actions';
import { useHistory } from 'react-router-dom';

function LoginForm(props){
    const [initialForm] = useState({
        username: "",
        password: ""
    })

    //universal form handler
    const [form, setForm] = useState(initialForm)

    const history = useHistory();

    //universal change handler
    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.loginUser(form)
        setForm(initialForm)
        history.push('/dashboard');
    }
    return(
        <div>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="formGroup" controlId="formUsername">
            <Form.Label> Username: </Form.Label>
            <Form.Control type="text" name="username" placeholder="Enter Username" onChange={handleChange}/>
            <Form.Text className="text-muted">
                username
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
    </div>
    )
}

export default connect (null, {loginUser})(LoginForm)