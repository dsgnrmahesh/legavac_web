import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import { Card, Container, Row, Col } from "react-bootstrap";
import { CandidateRegistration, getLoginDetail } from "../config/api";

export default function Register() {
  const [valid, setValid] = useState({
    EmailID: "",
    Password: "",
  });
  const [state, setState] = useState({
    EmailID: "",
    Password: "",
  });
  const [error, setError] = useState({
    EmailID: "",
    Password: "",
  });
  const [redirect, setRedirect] = useState(false);

  const [pwdType, setpwdType] = useState("Password");
  const emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  const pwdPattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  useEffect(() => {
    //bindEducationData();
  }, []);
  const handleChange = (e) => {
    if (e.target.name === "EmailID") {
      if (!emailPattern.test(e.target.value)) {
        setValid({ ...valid, EmailID: false });
        setError({ ...error, EmailID: "Please enter valid email address." });
      } else {
        setValid({ ...valid, EmailID: true });
        setError({ ...error, EmailID: "" });
      }
      setState({ ...state, EmailID: e.target.value });
    }
    if (e.target.name === "Password") {
      if (!pwdPattern.test(e.target.value)) {
        setValid({ ...valid, Password: false });
        setError({
          ...error,
          Password:
            "Password mustbe 8 charaters. atlest 1 Number, 1 Capitale Letter, 1 Symbol",
        });
      } else {
        setValid({ ...valid, Password: true });
        setError({ ...error, Password: "" });
      }
      setState({ ...state, Password: e.target.value });
    }
  };
  async function handleButtonClick(e) {
    e.preventDefault();

    if (!valid.Password) {
      setValid({ ...valid, Password: false });
      setError({
        ...error,
        Password: "Please enter Password",
      });
    } else if (!valid.EmailID) {
      setValid({ ...valid, EmailID: false });
      setError({ ...error, EmailID: "Please enter valid email address." });
    } else {
      await CandidateRegistration(state)
        .then((response) => {
          if (response[0][0].emailid === "exists") {
            setValid({ ...valid, EmailID: false });
            setError({ ...error, EmailID: "EmailID already exists" });
            //alert("EmailID already exists");
          } else {
            CheckCredential();
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
    async function CheckCredential() {
      await getLoginDetail(state)
        .then((response) => {
          if (response[0].length > 0) {

            sessionStorage.setItem("CandidateID", response[0][0].CandidateID);
            sessionStorage.setItem("Status", response[0][0].LookingFor);
            sessionStorage.setItem("FullName", response[0][0].FullName);
            sessionStorage.setItem("EmailID", response[0][0].EmailID);
            alert("Registration Successfully");
            setRedirect(true);
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  if (redirect) {
    window.location.href = "/auth/what-are-you-currently-looking-for";
    //return <Redirect to="/auth/what-are-you-currently-looking-for"/>
  }

  return (
    <>
      <div className="app__spacer"></div>
      <section
        className="app__section form-section py-5"
        style={{ background: "#f7f7f7" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={7} lg={5}>
              <Card>
                <Card.Body className="px-4 py-4">
                  <Card.Title>Create an Account</Card.Title>
                  <Card.Subtitle className="mb-4 text-muted fw-normal">
                    (It's free)
                  </Card.Subtitle>
                  <form autoComplete="off" className="login-form">
                    <div className="w-100">
                      <div
                        className={
                          valid.EmailID === true || valid.EmailID === ""
                            ? "form-group"
                            : "form-group feild-invalid"
                        }
                      >
                        <label className="control-label">Email Address</label>
                        <input
                          type="text"
                          name="EmailID"
                          placeholder="Enter Email ID"
                          className="form-control"
                          onChange={handleChange}
                          value={state.EmailID}
                        />
                        {valid.EmailID === false ? (
                          <div className="feild-feedback">{error.EmailID}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="w-100">
                      <div
                        className={
                          valid.Password === true || valid.Password === ""
                            ? "form-group"
                            : "form-group feild-invalid"
                        }
                      >
                        <label className="control-label">Password</label>
                        <div className="control-pwd">
                          <input
                            type={pwdType}
                            name="Password"
                            placeholder="Enter Password"
                            className="form-control"
                            onChange={handleChange}
                            value={state.Password}
                          />
                          {pwdType === "Password" ? (
                            <Icon
                              path={mdiEye}
                              onClick={() => {
                                setpwdType("text");
                              }}
                            />
                          ) : (
                            <Icon
                              path={mdiEyeOff}
                              onClick={() => {
                                setpwdType("Password");
                              }}
                            />
                          )}
                        </div>
                        {valid.Password === false ? (
                          <div className="feild-feedback">{error.Password}</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="w-100">
                      {/* {valid.Password === true && valid.EmailID === true ? (
                        <Link
                          to="/auth/what-are-you-currently-looking-for"
                          className="app__button"
                        >
                          <span>Create Account</span>
                        </Link>
                      ) : ( */}
                      <button
                        className="app__button"
                        onClick={handleButtonClick}
                      >
                        <span>Create Account</span>
                      </button>
                      {/* )} */}
                    </div>
                    <div className="w-100 text-center pt-4">
                      <a
                        href="/auth/sign-in"
                        className="link-small-bold text-decoration-none"
                      >
                        Already Have an Account? Sign In
                      </a>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
