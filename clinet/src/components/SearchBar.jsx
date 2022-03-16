import { Form, Button } from "react-bootstrap"

import(Form)
function SearchBar(props) {
  return (
    <div className="d-flex justfy-content-between" >
      <Form.Control className="m-1" type="text" placeholder="Search your movie" />
      <Button variant="primary" type="submit" className="me-1">
        Search
      </Button>
      <Button variant="success" onClick={props.onClickRefresh}>Refresh</Button>

    </div>
  )
}

export default SearchBar