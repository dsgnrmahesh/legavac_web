import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState,useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {getLoginDetail} from "../config/api";

export default function Login() {
  const [pwdType, setpwdType] = useState("password");
  const [state,setState]=useState({EmailID:"",Password:""});
  const [redirect, setRedirect] = useState(false);
  
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
 
  async function CheckCredential(e)
  {
    e.preventDefault();
    await getLoginDetail(state).then(response=>{
      if(response[0].length>0){
       sessionStorage.setItem("CandidateID", response[0][0].CandidateID);
       sessionStorage.setItem("Status", response[0][0].LookingFor);
       sessionStorage.setItem("FullName", response[0][0].FullName);
       sessionStorage.setItem("EmailID", response[0][0].EmailID);
      setRedirect(true);
      }
      else
      {
        alert("Not Exists");
      }
    }) .catch((error) => {
    alert(error); 
  });
  }
  if(redirect){
    window.location.href="/auth/profile";
    //return <Redirect to="/auth/profile"/>
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
                  <Card.Title className="mb-4">Sign In</Card.Title>
                  <form autoComplete="off" className="login-form">
                    <div className="w-100">
                      <div className="form-group">
                        <label className="control-label">Email Address</label>
                        <input
                          type="text"
                          name="username"
                          placeholder="Enter Email ID"
                          className="form-control"
                          name="EmailID"
                          value={state.EmailID}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="form-group">
                        <label className="control-label">Password</label>
                        <div className="control-pwd">
                          <input
                            type={pwdType}
                            name="password"
                            placeholder="Enter Password"
                            className="form-control"
                            name="Password"
                          value={state.Password}
                          onChange={handleChange}
                          />
                          {pwdType === "password" ? (
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
                                setpwdType("password");
                              }}
                            />
                          )}
                        </div>
                        <div className="text-end pt-2">
                          <a
                            href="/auth/forgot-password"
                            className="link-small-bold text-decoration-none"
                          >
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-100">
                      <button className="app__button" onClick={CheckCredential}>
                        <span>Sign In</span>
                      </button>
                    </div>
                    <div className="w-100 text-center pt-4">
                      <a
                        href="/auth/register-for-free"
                        className="link-small-bold text-decoration-none"
                      >
                        New to LegaVac? Register for free
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
