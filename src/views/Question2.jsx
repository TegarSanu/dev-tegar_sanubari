import Person from "../data/person.json";
import { Form, Row, Col, Button, ListGroup, Card } from "react-bootstrap";

function Question2() {

  return (
    <div
      style={{
        borderColor: "#dadada",
        borderStyle: "solid",
        borderWidth: ".5px",
        padding: "10px",
      }}
    >
      <div>
        <div>
          {
            Person && Person.slice(1, 2).map((view) => {
              return (
                <div>
                  <Card className="text-center">
                    <Card.Header><b>Tampilkan Data</b></Card.Header>
                    <Card.Body>
                      <ListGroup.Item>{view.name}</ListGroup.Item>
                      <ListGroup.Item>{view.phone}</ListGroup.Item>
                      <ListGroup.Item>{view.address.city}</ListGroup.Item>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                  </Card>

                  <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">

                    </ListGroup>
                  </Card>
                </div>
              )
            })
          }
        </div>
        <br/>
        <div>
          {
            Person && Person.slice(1, 2).map((view) => {
              return (
                <div>
                  <Card className="text-center">
                    <Card.Header><b>Tampilkan Data</b></Card.Header>
                    <Card.Body>
                      <ListGroup.Item>{view.name[6]}{view.name[7]}{view.name[8]}{view.name[9]}{view.name[10]}{view.name[11]}</ListGroup.Item>
                      <ListGroup.Item>{view.company.name}</ListGroup.Item>
                      <ListGroup.Item>{view.address.geo.lat}</ListGroup.Item>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                  </Card>

                  <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">

                    </ListGroup>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Question2;
