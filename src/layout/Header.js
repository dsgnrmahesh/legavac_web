import { mdiChevronDown, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ReactSession } from "react-client-session";
import { Redirect } from "react-router";

export default function Header() {
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    CandidateID: "",
    FullName: "",
    EmailID: "",
    FirstCh: "",
  });

  useEffect(() => {
    if (
      sessionStorage.getItem("CandidateID") !== null &&
      sessionStorage.getItem("FullName") !== null &&
      sessionStorage.getItem("EmailID") !== null
    ) {
      setState({
        CandidateID: sessionStorage.getItem("CandidateID"),
        FullName: sessionStorage.getItem("FullName"),
        EmailID: sessionStorage.getItem("EmailID"),
        FirstCh: sessionStorage.getItem("EmailID").charAt(0).toUpperCase(),
      });
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);
  async function Logout(e) {
    e.preventDefault();
    sessionStorage.clear();
    setRedirect(true);
    // ReactSession.("CandidateID");
    // ReactSession.set("Status");
    // ReactSession.set("FullName");
  }
  if (redirect) {
    window.location.href = "/";
    //  return <Redirect to="/"/>
  }

  return (
    <>
      <header className="app__header">
        <Container fluid className="app__container">
          <div className="app__header_inner d-flex align-items-center justify-content-between">
            <div className="app__header_logo">
              {window.innerWidth < 778 ? (
                <button
                  className="menu-humbugger"
                  onClick={() => {
                    document.body.classList.add("menu-open");
                  }}
                >
                  <span></span>
                </button>
              ) : (
                <></>
              )}
              <a href="/" style={{ textDecoration: "none" }}>
                {/* <span className="logo">
                  <span>L</span>ega<span>V</span>ac
                </span> */}
                <img src="/logo.png" alt="" />
              </a>
            </div>
            <div className="app__header_links">
              <a href="/">home</a>
              <div className="app__header_links-dropDown">
                <a href="#">jobs</a>
                <ul className="app__header_links-dropDown--menu">
                  <li>
                    <a
                      href={`/jobs?search=jobs-by-company`}
                    >
                      Jobs by Company
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/jobs?search=jobs-by-location`}
                    >
                      Jobs by Location
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/jobs?search=jobs-by-designation`}
                    >
                      Jobs by Designation
                    </a>
                  </li>
                  <li className="dropInButton">
                    <a href="/create-free-job-alerts">Create free job alert</a>
                  </li>
                </ul>
              </div>
              {/* <a href="/recruters">Recruiter</a> */}
              <a href="/company/about-us">about us</a>
              {/* <a href="/service/plans">services</a> */}
              <a href="/Articles">articles</a>
              {window.innerWidth < 778 ? (
                <>
                  <a href="/career-adviced">career adviced</a>
                  <a href="/Affilations">Affilation's</a>
                </>
              ) : (
                <div className="app__header_links-dropDown">
                  <a href="/">
                    more
                    <Icon path={mdiChevronDown} />
                  </a>
                  <ul className="app__header_links-dropDown--menu">
                    <li>
                      <a href="/career-adviced">career adviced</a>
                    </li>
                    <li>
                      <a href="/Affilations">Affilation's</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {window.innerWidth < 778 ? (
              <div
                className="menu-close"
                onClick={() => {
                  document.body.classList.remove("menu-open");
                }}
              >
                <Icon path={mdiClose} />
              </div>
            ) : (
              <></>
            )}
            <div className="app__header_btnExtras d-flex align-items-center">
              {/* <a
                href="/post-job"
                className="app__button app__button_post-job d-flex align-items-center"
              >
                <Icon path={mdiPlus} />
                <span>post jobs</span>
              </a> */}
              <ul className="app__header_btnExtra-list d-flex align-items-center">
                {/* <li>
                  <a
                    href="/employer/post-job"
                    className="d-flex align-items-center"
                  >
                    employers / post job
                  </a>
                </li> */}
                {show ? (
                  <li>
                    <a
                      href="/auth/sign-in"
                      className="d-flex align-items-center signIn"
                    >
                      sign in
                    </a>
                  </li>
                ) : (
                  <li className="authDrop">
                    <button>
                      <span>{state.FirstCh}</span>
                      <Icon path={mdiChevronDown} />
                    </button>
                    <ul className="authDropMenu">
                      <li className="userName">
                        <label>{state.FullName}</label>
                        <span>{state.EmailID}</span>
                      </li>
                      <li>
                        <a href="/auth/profile">my profile</a>
                      </li>
                      <li className="d-none">
                        <a href="/auth/applications">my applications</a>
                      </li>
                      <li>
                        <a href="/" onClick={Logout}>
                          logout
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}
