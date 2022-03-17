import { Form, Button, Container, Nav } from "react-bootstrap";
import { device } from "./../../utils/device-size";
import styled from "styled-components";

export const MainWrapper = styled.div`
  background: #121212;
  @media ${device.desktop} {
    padding: 65px;
  }
  @media ${device.laptopL} {
    padding: 50px;
  }
  @media ${device.laptop} {
    padding: 25px;
  }
  @media ${device.tablet} {
    padding: 25px;
  }
`;

export const Wrapper = styled(Container)`
  padding: 2em;
  border-radius: 1.25rem;
  background: #242424;
  @media ${device.laptopL}, .container-lg {
    max-width: 960px;
  }
`;

export const Title = styled.h2`
  color: white;
  margin: 25px auto 25px auto;
  text-align: center;
  @media ${device.mobileM} {
    font-size: 20px;
  }
`;

export const FormCheck = styled(Form.Check)`
  color: white;
  border-radius: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    font-size: 14px;
    margin-left: 5px;
  }
  input {
    background-color: #10ff8d;
  }
  input:focus,
  input:checked {
    background-color: #10ff8d;
    color: white;
  }
`;

export const FormControl = styled(Form.Control)`
  color: white;
  background-color: transparent;
  border: 1px solid #10ff8d;
  border-radius: 2.25rem;
  :focus {
    background-color: #242424;
    color: white;
  }
`;

export const FormLabel = styled(Form.Label)`
  color: white;
`;

export const CustomButton = styled(Button)`
  border-radius: 1.25rem;
  color: black;
  border-color: #10ff8d;
  background-color: #10ff8d;
  width: 165px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  :hover,
  :focus,
  :disabled {
    border-radius: 1.25rem;
    color: black;
    border-color: #10ff8d;
    background-color: #10ff8d;
  }
`;

export const NavItem = styled(Nav.Item)`
  color: white;
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link,
  a.nav-link.active {
    background-color: #10ff8d;
    border-radius: 1.25rem;
  }
  a.nav-link {
    color: white;
  }
`;

export const CustomNav = styled(Nav)`
  background: #121212;
  border-radius: 1.25rem;
  width: fit-content;
  border: 2px solid #121212;
  margin-left: auto;
  margin-right: auto;
  @media ${device.mobileM}, .container-lg {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  ${(props) => {
    return (
      props?.center &&
      `display: flex;
  align-items: center;
  justify-content: center;`
    );
  }}
`;
