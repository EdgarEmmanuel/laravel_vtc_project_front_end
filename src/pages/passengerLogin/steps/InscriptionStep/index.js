import { Container, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const InscriptionStep = ({validation}) => {
    return (
        <div id="inscription_step">
            <Container>
                <Form>
                    <FormGroup>
                        <div className="mb-3">
                            <Label htmlFor="email" className="form-label">Email</Label>
                            <Input
                                name="email"
                                className="form-control"
                                placeholder="Enter email"
                                type="email"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.email || ""}
                                invalid={
                                    validation.touched.email && validation.errors.email ? true : false
                                }
                            />
                            {validation.touched.email && validation.errors.email ? (
                                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Label className="form-label" htmlFor="password-input">Password</Label>
                                <div className="position-relative auth-pass-inputgroup mb-3">
                                <Input
                                    name="password"
                                    value={validation.values.password || ""}
                                    type={validation.values.passwordFieldType}
                                    className="form-control pe-5"
                                    placeholder="Enter Password"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    invalid={
                                        validation.touched.password && validation.errors.password ? true : false
                                    }
                                />
                                {validation.touched.password && validation.errors.password ? (
                                    <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                ) : null}
                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon">
                                    <i className="ri-eye-fill align-middle" id="passwordFieldType" onClick={ (event)=> {
                                        event.preventDefault();
                                        if(validation.values.passwordFieldType === "password") validation.setFieldValue("passwordFieldType", "text");
                                        else validation.setFieldValue("passwordFieldType", "password");
                                    }}></i>
                                </button>
                            </div>
                        </div>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default InscriptionStep ;