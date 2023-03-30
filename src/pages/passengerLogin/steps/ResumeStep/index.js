//import { Button } from "bootstrap";
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";



const ResumeStep = ({validation, telephone}) => {
    return (
        <Container>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                }}
            >
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleEmail">
                        Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            value={validation.values.email}
                            type="email"
                            disabled
                        />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplePassword">
                        Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            type="text"
                            value={validation.values.password}
                            disabled
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="exampleAddress">
                        Nom
                    </Label>
                    <Input
                        id="exampleAddress"
                        name="address"
                        value={validation.values.nom}
                        disabled
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">
                        Prenom
                    </Label>
                    <Input
                        id="exampleAddress2"
                        name="address2"
                        value={validation.values.prenom}
                        disabled
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAddress2">
                        Telephone
                    </Label>
                    <Input
                        id="exampleAddress2"
                        name="address2"
                        value={telephone}
                        disabled
                    />
                </FormGroup>
                <Row>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleCity">
                        Numero Carte Bancaire
                        </Label>
                        <Input
                            id="exampleCity"
                            name="city"
                            disabled
                            value={validation.values.numero_carte}
                        />
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">
                            CVV Carte Bancaire
                            </Label>
                            <Input
                                id="exampleState"
                                name="state"
                                disabled
                                value={validation.values.cvv}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="exampleZip">
                                Expire Carte Bancaire
                            </Label>
                            <Input
                                id="exampleZip"
                                name="zip"
                                disabled
                                value={validation.values.expiry_date}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Button type="submit">
                    Sign in
                </Button>
            </Form>
        </Container>
    )
}

export default ResumeStep;