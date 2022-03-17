import { Form, Row, Nav, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { registerApi } from "./../services/RegisterService";
import {
  MainWrapper,
  Wrapper,
  Title,
  FormCheck,
  FormControl,
  FormLabel,
  CustomButton,
  NavItem,
  CustomNav,
  ErrorMessage,
} from "./../utils/styles/register-style";
import { toast } from "react-toastify";

const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    agree: yup.bool().oneOf([true], "Accept Terms & Conditions"),
  })
  .required();

function Register() {
  const [accountType, setAccountType] = useState("fan");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const resetForm = () => {
    reset({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  const onSubmit = (data) => {
    setLoading(true);
    registerApi(data, accountType)
      .then((response) => {
        toast.success("Register Successfully");
        resetForm();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.data.message);
        setLoading(false);
      });
  };

  return (
    <MainWrapper>
      <Wrapper>
        <Row>
          <Col>1 of 3</Col>
          <Col sm={12} md={6}>
            <CustomNav variant="pills" defaultActiveKey="#fan">
              <NavItem>
                <Nav.Link onClick={() => setAccountType("fan")} href="#fan">
                  FAN SIGNUP
                </Nav.Link>
              </NavItem>
              <NavItem active>
                <Nav.Link
                  onClick={() => setAccountType("talent")}
                  eventKey="link-1"
                >
                  TALENT SIGNUP
                </Nav.Link>
              </NavItem>
            </CustomNav>

            <Title>Create Your Fan Account</Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicFirstname">
                <FormLabel>First name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="First name"
                  {...register("firstname", { required: true })}
                />
                <ErrorMessage>{errors.firstname?.message}</ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastname">
                <FormLabel>Last name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Last name"
                  {...register("lastname", { required: true })}
                />
                <ErrorMessage>{errors.lastname?.message}</ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <FormLabel>Username</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                <ErrorMessage>{errors.username?.message}</ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <FormCheck
                  type="checkbox"
                  label={`I am agree to the term and condition`}
                  {...register("agree", { required: true })}
                  error={errors.agree?.message}
                />
                <ErrorMessage center={true}>
                  {errors.agree?.message}
                </ErrorMessage>
              </Form.Group>

              <CustomButton
                onClick={handleSubmit(onSubmit)}
                variant="primary"
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "SIGN UP"}
              </CustomButton>
            </Form>
          </Col>
          <Col>1 of 3</Col>
        </Row>
      </Wrapper>
    </MainWrapper>
  );
}

export default Register;
