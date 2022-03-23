import { Form, Button } from "react-bootstrap"

import(Form)
function SearchBar({
  setsearchText,
  onClickRefresh

}) {
  return (
    <div className="d-flex justfy-content-between" >
      <Form.Control className="m-1" type="text" placeholder="Search your movie..." onChange={(event) => setsearchText(event.target.value)} />
      <Button variant="primary" type="submit" className="me-1" onClick={onClickRefresh}>
        Search
      </Button>
      <Button variant="success" onClick={onClickRefresh}>Refresh</Button>

    </div>
  )
}

export default SearchBar