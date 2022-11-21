import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useSelector } from "react-redux"

function Question7() {
  const {
    name,
    email,
    website
  } = useSelector(state => state.data);

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
        <Card>
          <Card.Header className="text-center"><h3>Redux</h3></Card.Header>
          <CardGroup>
            <Card>
              <Card.Body style={{marginLeft: '10%'}}>
                <Card border="primary" style={{ width: '30rem', display: 'flex'}}>
                  <Card.Header>Data</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Nama : {name} <br />
                      Email : {email}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body style={{marginLeft: '10%', marginRight: '20%'}}>
                <Card border="success" style={{ width: '30rem' }}>
                  <Card.Header>Data</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Website : <a href="https://teknologikartu.com/">{website}</a>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </CardGroup>
        </Card>
      </div>
    </div>
  );
}

export default Question7;
