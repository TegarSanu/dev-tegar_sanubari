import City from "../data/person.json";
import { Card, CardGroup } from "react-bootstrap";

function Question5() {
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
          <Card.Header className="text-center">
            <h3>Data Kota dan Username</h3>
          </Card.Header>
          <div className="continer-fluid" id="datakota">
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center"><b>Data Kota</b></Card.Title>
                  <Card.Text>
                    {
                      City && City.map((view) => {
                        return (
                          <div>
                            {view.address.city}, 
                          </div>
                        )
                      })
                    }
                  </Card.Text>

                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className="text-center"><b>Data Username</b></Card.Title>
                  <Card.Text>
                    {
                      City && City.slice(5, 10).map((view) => {
                        return (
                          <div>
                            {view.username},
                          </div>
                        )
                      })
                    }
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardGroup>
          </div >
          <div className="continer-fluid" id="datausername">

          </div>
        </Card>
      </div>
    </div>
  );
}

export default Question5;
