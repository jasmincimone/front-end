import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';



function SearchNews(props){
    const [initialForm] = useState({
        searchNews: "",
    })

    const [form, setForm] = useState(initialForm)

    function handleSubmit(e) {
        e.preventDefault()
        props.searchNews(form)
        setForm(initialForm)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control
                        placeholder="Search the News"
                        aria-label="Search the News"
                        aria-describedby="basic-addon2"
                    />
                </Form.Group>

                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SearchNews;