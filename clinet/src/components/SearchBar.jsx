import { Form, Button } from "react-bootstrap"

import (Form)
function SearchBar() {
  return (
    <div  className="d-flex justfy-content-between" >
    <Form.Control className="m-1" type="text" placeholder="Search your movie" />
  <Button variant="primary" type="submit">
    Search
  </Button>
    </div>
  )
}

export default SearchBar