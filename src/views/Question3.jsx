import { Card, CardGroup } from "react-bootstrap";
import Person from "../data/person.json";

function Question3() {
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
          <div>
            <Card>
            <CardGroup>
              <Card>
                <Card.Header className="text-center"><h4>Data Nama, Telp, Kota</h4></Card.Header>
                <Card.Body>
                  {
                    Person && Person.slice(1, 2).map((view, id) => {
                      return (
                        <div>
                          <p key={view.id[2]}>Nama : {view.name}</p>
                          <p key={view.id[2]}>Handphone : {view.phone}</p>
                          <p key={view.id[2]}>Kota : {view.address.city}</p>
                        </div>
                      )
                    })
                  }
                </Card.Body>
              </Card>
              <Card>
                <Card.Header className="text-center"><h4>Data Company, Latitude</h4></Card.Header>
                <Card.Body>
                  {
                    Person && Person.slice(3, 4).map((tampil, id) => {
                      return (
                        <div>
                          <p key={tampil.id[2]}>Nama Perusahaan : {tampil.company.name}</p>
                          <p key={tampil.id[2]}>Latitude : {tampil.address.geo.lat}</p>
                        </div>
                      )
                    })
                  }
                </Card.Body>
              </Card>
            </CardGroup>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Question3;
