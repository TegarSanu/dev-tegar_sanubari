import { useState } from "react";
import Nama from "../data/person.json";
import { Card, Form, Button, ListGroup, CardGroup } from "react-bootstrap";

function Question6() {
  const [boolean, setBoolean] = useState(false);
  const [name, setName] = useState('');
  const [label, setLabel] = useState("label");
  const [count, setCount] = useState(0);
  const [teambola, setTeambola] = useState([]);
  const [tambah, setTambah] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const buttonClick = () => {
    setLabel("Button Di Click")
    setCount(count + 1)
  }

  const changeValue = (event) => {
    setName(event.target.value);
  }

  const buttonCilukbaa = () => {
    setBoolean((currentState) => !currentState)
  }

  const tambahketeam = (nama) => {
    setTeambola((team) => {
      return [...team, nama];
    })
  }

  const balikin = (nama) => {
    setTeambola((team) => {
      const result = [...team];
      result.splice(
        team.indexOf(nama),
        1
      )
      return result;
    })
  }

  const changeName = (event) => {
    setTambah((currentState) => {
      return { ...currentState, name: event.target.value };
    })
  }

  const changePhone = (event) => {
    setTambah((currentState) => {
      return { ...currentState, phone: event.target.value };
    })
  }

  const changeEmail = (event) => {
    setTambah((currentState) => {
      return { ...currentState, email: event.target.value };
    })
  }

  const tambahin = (event) => {
    event.preventDefault();
    alert(
      JSON.stringify(tambah, null, 4)
    )
  }


  return (
    <div
      style={{
        borderColor: "#dadada",
        borderStyle: "solid",
        borderWidth: ".5px",
        padding: "10px",
      }}
    >
      <Card >
        <Card.Header className="text-center"><h3>(useState Objek)</h3></Card.Header>
        <div className="p-4">
          <Card className="text-center">
            <Card.Body>
              <Form.Label>Nama</Form.Label>
              <Form.Control
                onChange={changeName}
                value={tambah.name}
                className="text-center">
              </Form.Control><br />
              <Form.Label>Handphone</Form.Label>
              <Form.Control
                onChange={changePhone}
                value={tambah.phone}
                className="text-center">
              </Form.Control><br />
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={changeEmail}
                value={tambah.email}
                className="text-center">
              </Form.Control><br />
              <Button onClick={tambahin}>Tampilin</Button>
            </Card.Body>
          </Card>
        </div>
      </Card>
      <hr />
      <Card >
        <Card.Header className="text-center"><h3>(useState Array)</h3></Card.Header>
        <div>
          <CardGroup>
            <Card>
              <Card.Body >
                <Card.Header className="text-center"><h4>Data Nama</h4></Card.Header><br />
                {
                  Nama.map((data) => {
                    if (teambola.includes(data.name)) return null;
                    return (
                      <div>
                        <Card style={{ width: '18rem', marginLeft: '25%' }} >
                          <ListGroup className="text-center">
                            <ListGroup.Item>{data.name}</ListGroup.Item>
                          </ListGroup>
                          <Button onClick={() => tambahketeam(data.name)}>Tambahin</Button>
                        </Card>
                      </div>
                    )
                  })
                }
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted">Footer</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Header className="text-center"><h4>Pemain Bola</h4></Card.Header><br />
                {
                  teambola.map((ada) => {
                    return (
                      <div>
                        <Card style={{ 
                          width: '18rem', 
                          marginLeft: '25%',
                          display: 'flex' 
                          }} >
                          <ListGroup className="text-center">
                            <ListGroup.Item>{ada}</ListGroup.Item>
                          </ListGroup>
                          <Button onClick={() => balikin(ada)}>Balikin</Button>
                        </Card>
                      </div>
                    )
                  })
                }
              </Card.Body>
              <Card.Footer className="text-center">
                <small className="text-muted">Footer</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </Card>

      <hr />
      <div>
        <Card>
          <Card.Header className="text-center"><h3>(useState Boolean)</h3></Card.Header>
          {boolean && (
            <h4 className="text-center">Duar Merdekaa!!!</h4>
          )
          }
          <Button onClick={buttonCilukbaa}>Klik Me</Button>
        </Card>
      </div>
      <hr />
      <div>
        <Card>
          <Card.Header className="text-center"><h3>(useState String)</h3></Card.Header>
          <Card.Body><Form.Control placeholder="Masukin Nama" onChange={changeValue} className="p-2"></Form.Control></Card.Body>
          <Form.Label className="m-4"><h4>Nama Saya : {name}</h4></Form.Label>
        </Card>
      </div>
      <hr />
      <div>
        <Card>
          <Card.Header className="text-center"><h3>(useState Number)</h3></Card.Header><br />
          <Card.Title className="text-center">{label}</Card.Title>
          <Card.Title className="text-center">Count : {count}</Card.Title>
          <Button onClick={() => buttonClick()}>submit</Button>
        </Card>
      </div>
    </div>
  );
}

export default Question6;
