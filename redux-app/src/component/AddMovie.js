import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addMovie } from '../app/MovieSlice';

function AddMovie() {
    const [Values,SetValues]=useState({title :"",description :""});
    const handelChange=(event)=>{
        SetValues({...Values,[event.target.name]:event.target.value})
    }
    const handelSubmit =()=>{
        dispatchEvent(addMovie(Values))
    }
  return (
    <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">title</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="title" onChange={handelChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description">description</Form.Label>
          <Form.Select id="disabledSelect" onChange={handelChange}>
            <option>description</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
        </Form.Group>
        <Button type="submit" onClick={()=>handelSubmit()}>Submit</Button>
      </fieldset>
    </Form>
  );
}

export default AddMovie;