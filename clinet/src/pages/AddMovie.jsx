import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AddMovie = () => {
    const [formValues, setFormValues] = useState({});
    // const history = useHistory();

    const onChangeFormField = (event) => {
        const { value, name, type } = event.target;

        setFormValues({
            ...formValues,
            [name]: type === "number" ? Number(value) : value
        });
    }

    const onClickSubmit = async () => {
        // try {
        //     await axios({
        //         url: 'http://localhost:4000/movies',
        //         method: 'POST',
        //         data: formValues
        //     });
        //     history.push('/');
        // }
        // catch (e) {
        //     alert("Add Movie Failed!")
        // }
        console.log(formValues);
    }

    return (
        <div className='mt-5'>
            <Card>
                <Card.Header>
                    <h4>Add Movie</h4>
                </Card.Header>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={onChangeFormField} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="rating">
                        <Form.Label>Movie Rating</Form.Label>
                        <Form.Control type="number" name="rating" onChange={onChangeFormField} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="poster">
                        <Form.Label>Movie Poster</Form.Label>
                        <Form.Control type="text" name="Poster" onChange={onChangeFormField} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={onClickSubmit}>
                        Submit
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddMovie;