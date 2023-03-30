import MultiStep from "react-multistep";
import InscriptionStep from "./steps/InscriptionStep";
import PassengerStep from "./steps/PassengerStep";
import BankCardStep from "./steps/BankCardStep";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

import "./css/PassengerLogin.css" ;
import { 
    // useCallback, 
    useState 
} from "react";
import { Col, Container, Row } from "reactstrap";
import ResumeStep from "./steps/ResumeStep";
import { 
    useDispatch, 
    ///useSelector 
} from "react-redux";

import { addPassenger as OnAddPassenger } from "../../store/actions";



const PassengerLogin = () => {

    // eslint-disable-next-line no-unused-vars
    const [userLogin, setUserLogin] = useState({});
    const dispatch = useDispatch();
    const [telephone, setTelephone] = useState();


    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: userLogin.email || "admin@themesbrand.com" || '',
            password: userLogin.password || "123456" || '',
            prenom: userLogin.prenom || '',
            nom: userLogin.nom || '',
            numero_carte: userLogin.numero_carte || '',
            cvv: userLogin.cvv || 0,
            expiry_date: userLogin.expiry_date || '',
            passwordFieldType: userLogin.passwordFieldType || "password" || 'text' 
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your Email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values) => {
            const profil = {...values, telephone} ;
            //dispatch(loginUser(values, props.history));
            dispatch(OnAddPassenger(profil))
        }
    });


    const steps = [
        {title: 'StepOne | Inscription ', component: <InscriptionStep validation={validation}/>},
        {
            title: 'StepTwo | Informations Passagers ', 
            component: <PassengerStep validation={validation} telephone={telephone} setTelephone={setTelephone} />
        },
        {
            title: 'StepThree | Informations Bancaires ', 
            component: <BankCardStep validation={validation} />
        },
        {
            title: 'StepFour | Resume',
            component: <ResumeStep validation={validation} telephone={telephone} />
        }
    ];

    return (
        <Container>
            <Row xs="1" sm="1" md="1">
                <Col md="12">
                    <h1>
                        INSCRIPTION PASSAGER
                    </h1>
                </Col>
                <Col md="12">
                    <Container>
                        <div id="multistep">
                            <MultiStep 
                                activeStep={1} 
                                showNavigation={true} 
                                steps={steps} 
                                nextButton={
                                    {style:{ background: 'rgba(51,173,255,1)', margin:'10px', border:'1px solid rgba(51,173,255,1)', borderRadius: '10px' }, 
                                    title: "s'inscrire"}}
                                prevButton={
                                    {style:{ background: 'rgba(51,173,255,1)', margin:'10px', border:'1px solid rgba(51,173,255,1)', borderRadius: '10px' }, 
                                    title: "precedent"}}
                            />
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default PassengerLogin ;