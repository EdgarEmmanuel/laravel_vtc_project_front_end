import { useState } from "react";
import { Container, Form, FormGroup, Input, Label, Button, FormFeedback } from "reactstrap"

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";



import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'



const DriverPrincipalRegister = () => {


    const [driver, setDriver] = useState({});
    const [telephone, setTelephone] = useState("");

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: driver.email || '',
            password: driver.password || '',
            prenom: driver.prenom || '',
            nom: driver.nom || '',
            pays: driver.pays || '',
            ville: driver.ville || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
            nom: Yup.string().required("Please Enter Your Name"),
            prenom: Yup.string().required("Please Enter Your surname"),
            pays: Yup.string().required("Please Enter Your country"),
            ville: Yup.string().required("Please Enter Your city"),
        }),
        onSubmit: (values) => {
            const profil = {...values, telephone} ;
            console.log(profil);
            //dispatch(loginUser(values, props.history));
            //dispatch(OnAddPassenger(profil))
        }
    });

    return (
        <div>
            <Container>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    validation.handleSubmit();
                    return false;
                }} >
                    <FormGroup>
                        <Label for="nom">
                        Nom
                        </Label>
                        <Input
                            id="nom"
                            name="nom"
                            placeholder="Entrez le nom"
                            type="text"
                            value={validation.values.nom || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.nom && validation.errors.nom ? true : false
                            }
                        />
                    {validation.touched.nom && validation.errors.nom ? (
                                <FormFeedback type="invalid">{validation.errors.nom}</FormFeedback>
                            ) : null}
                    
                    </FormGroup>
                    <FormGroup>
                        <Label for="prenom">
                        Prenom
                        </Label>
                        <Input
                            id="prenom"
                            name="prenom"
                            placeholder="Entrez le prenom"
                            type="text"
                            value={validation.values.prenom || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.prenom && validation.errors.prenom ? true : false
                            }
                        />
                    {validation.touched.prenom && validation.errors.prenom ? (
                                <FormFeedback type="invalid">{validation.errors.prenom}</FormFeedback>
                            ) : null}
                    
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                        Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Entrez le mot de passe"
                            type="text"
                            value={validation.values.password || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.password && validation.errors.password ? true : false
                            }
                        />
                        {validation.touched.password && validation.errors.password ? (
                                <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                            ) : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="Entrez l'email"
                            type="email"
                            value={validation.values.email || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.email && validation.errors.email ? true : false
                            }
                        />
                    {validation.touched.email && validation.errors.email ? (
                                <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                            ) : null}
                    
                    </FormGroup>
                    <FormGroup>
                        <Label for="pays">
                            Pays
                        </Label>
                        <Input
                            id="pays"
                            name="pays"
                            placeholder="Entrez le pays"
                            type="text"
                            value={validation.values.pays || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.pays && validation.errors.pays ? true : false
                            }
                        />
                    {validation.touched.pays && validation.errors.pays ? (
                                <FormFeedback type="invalid">{validation.errors.pays}</FormFeedback>
                            ) : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="ville">
                            ville
                        </Label>
                        <Input
                            id="ville"
                            name="ville"
                            placeholder="Entrez la ville"
                            type="text"
                            value={validation.values.ville || ""}
                            className="form-control pe-5"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                                validation.touched.ville && validation.errors.ville ? true : false
                            }
                        />
                        {validation.touched.ville && validation.errors.ville ? (
                                <FormFeedback type="invalid">{validation.errors.ville}</FormFeedback>
                            ) : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Telephone
                        </Label>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={telephone}
                            defaultCountry="SN"
                            onChange={setTelephone}
                        />
                    </FormGroup>
                
                <Button type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
        </div>
    )
}


export default DriverPrincipalRegister