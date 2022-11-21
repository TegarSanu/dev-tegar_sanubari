import React, { useState } from "react";
import { Form, Row, Col, Button, ListGroup, Card } from "react-bootstrap";

function Question1() {

  const num1 = "6";
  const num2 = "5";
  const [ops, setOps] = useState("")
  const [result, setResult] = useState("")
  const onChangeOps = (label, event) => {
    switch (label) {
      case "ops":
        setOps(event.target.value);
        break;
    }
  }
  //operasi aritmatika
  const onClickOperation = async (event) => {
    event.preventDefault()
    let result2 = 0;

    if (ops === '+') {
      result2 = parseInt(num1) + parseInt(num2);
    } if (ops === '-') {
      result2 = num1 - num2;
    } if (ops === '*') {
      result2 = num1 * num2;
    } if (ops === '/') {
      result2 = num1 / num2;
    }

    setResult(result2)
  }

  const hobies = ["bowling", "bulu tangkis", "tennis", "sepak bola"];
  let person = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    age: 36,
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };

  return (
    <div
      style={{
        borderColor: "#dadada",
        borderStyle: "solid",
        borderWidth: ".5px",
        padding: "10px",
      }}
    >
      <Card className="text-center">
        <Card.Header><b>Operasi Aritmatika</b></Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Form>
                <Form.Control value={num1} ></Form.Control>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" onChange={(event) => { onChangeOps("ops", event) }}>
                  <Form.Select>
                    <option>-</option>
                    <option>+</option>
                    <option>*</option>
                    <option>/</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Control value={num2}></Form.Control>
              </Form>
            </Col>
            <Col md={1}>
              <Button onClick={onClickOperation}>=</Button>
            </Col>
            <Col>
              <Form>
                <Form.Control value={result}></Form.Control>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br />
      <div>
        <Card className="text-center">
          <Card.Header ><b>Tampilkan Data</b></Card.Header>
          <Card border="primary" style={{ width: '40rem', possiton: 'absolute', marginTop: '20px', marginLeft: '25%', marginBottom: '20px' }}>
          <Card.Header>Data</Card.Header>
            <Card.Body>
              <ListGroup.Item>{person.id}</ListGroup.Item>
              <ListGroup.Item>{person.name}</ListGroup.Item>
              <ListGroup.Item>{person.username}</ListGroup.Item>
              <ListGroup.Item>{person.email}</ListGroup.Item>
              <ListGroup.Item>{person.age}</ListGroup.Item>
              <ListGroup.Item>{person.address.street}, {person.address.suite}, {person.address.city}, {person.address.zipcode}</ListGroup.Item>
              <ListGroup.Item>{person.phone}</ListGroup.Item>
              <ListGroup.Item>{person.website}</ListGroup.Item>
              <ListGroup.Item>{hobies[0]}, {hobies[1]}, {hobies[2]}, {hobies[3]}</ListGroup.Item>
            </Card.Body>
          </Card>
        </Card>

        <Card style={{ width: '18rem' }}>
          <ListGroup variant="flush">

          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default Question1;
