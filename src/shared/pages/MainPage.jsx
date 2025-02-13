import { Button, Col, Container, Form, ProgressBar, Row, Table } from "react-bootstrap";
import Papa from "papaparse";
import { useState } from "react";

export const MainPage = () => {

  const [data, setData] = useState([]);
  const[progress, setProgress] = useState(0);
  const rowLimit = 20;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => { console.log(result); setData(result.data) },
      header: true, // Si el CSV tiene encabezados
      skipEmptyLines: true,
    });
  };

  const changeProgress = () =>{
    console.log(progress)
    setProgress(progress+1)
  }

  return (
    <Container>
      <br />
      <Row >
        <Col md={12} className="text-center"> <h1>EMISOR MASIVO DE NC</h1> </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={2}> </Col>
        <Col md={8} className="text-center">
          <Form.Control size="md" type="file" accept=".csv" onChange={handleFileUpload} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={12}>
          <h4>Datos ingresados: </h4>
          {data.length > 0 && (
            <div style={{
              maxHeight: data.length > rowLimit ? "300px" : "auto",
              overflowY: data.length > rowLimit ? "auto" : "hidden",
              border: "1px solid #ccc",
              marginTop: "20px",
            }}>
              <Table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th key={key} style={{ border: "1px solid #ddd", padding: "8px" }}>
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, i) => (
                        <td key={i} style={{ border: "1px solid #ddd", padding: "8px" }}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>
      </Row>
      <br />
      {data.length > 0 && <Container>

        <Row>
          <Col md={12} className="text-center">
            <Button variant="success">Emitir NC a documentos</Button>
          </Col>

        </Row>
        <br />
        <Row>
          <Col md={12}>
            <ProgressBar animated now={progress} />
          </Col>
        </Row>
      </Container>
      }



    </Container>
  )
}
