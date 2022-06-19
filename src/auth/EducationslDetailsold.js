import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiChevronLeft,
  mdiDeleteOutline,
  mdiPencilOutline,
  mdiPlus,
} from "@mdi/js";
import { Container, Col, Row, Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import FormHeader from "../layout/FormHeader";
import AddEducationModal from "./AddEducationModal";
import {
  getCandidateEducation,
  getCandidateeducationDelete,
  CandidateEducation,
} from "../config/api";
import { Redirect } from "react-router-dom";
export default function EducationslDetails({ match: { params } }) {
  const [show, setShow] = useState(false);
  const [eduType, setEduType] = useState("");
  const [data, setData] = useState([]);
  const [cid, setCid] = useState(0);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [state, setState] = useState({
    CandidateeducationID: "0",
    CandidateID: "0",
    Education: "",
    Degree: "",
    MatriStatus: "",
    Institutename: "",
    CollegeName: "",
    StartYear: "",
    EndYear: "",
    YearOfCompletion: "",
    Board: "",
    PerformanceScale: "",
    Performance: "",
    Stream: "",
    CreatedBy: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = (type) => {
    setEduType(type);
    setShow(true);
  };
  const edulst = [
    {
      name: "Add secondary (X)",
      complete: false,
    },
    {
      name: "Add senior secondary (XII)",
      complete: false,
    },
    {
      name: "Add graduation",
      complete: false,
    },
    {
      name: "Add post graduation",
      complete: false,
    },
    {
      name: "Add diploma",
      complete: false,
    },
    {
      name: "Add PhD",
      complete: false,
    },
  ];
  const renderEduList = edulst.map((edu, index) =>
    !edu.complete ? (
      <li key={index} data-id={index} onClick={() => handleShow(edu.name)}>
        <Icon path={mdiPlus} />
        {edu.name}
      </li>
    ) : (
      ""
    )
  );
  let addFormOptions = {
    pagename: eduType,
    // graduation: eduType === edulst[2].name ? true : false,
    // stram: eduType === edulst[1].name ? true : false,
    // school:
    //   eduType === edulst[0].name || eduType === edulst[1].name ? true : false,
    // performance:
    //   eduType === edulst[0].name ||
    //   eduType === edulst[1].name ||
    //   eduType === edulst[2].name
    //     ? true
    //     : false,
  };
  const onModalEntered = (e) => {
    // if (eduType === edulst[2].name) addFormOptions.graduation = true;
  };
  useEffect(async () => {
    async function bindEducationData() {
      await getCandidateEducation(sessionStorage.getItem("CandidateID"))
        .then((response) => {
          setData(response[0]);
          setisLoading(false);
          //data=response[0];
          console.log(data);
        })
        .catch((error) => {
          alert(error);
        });
    }

    bindEducationData();
  }, []);
  if (redirect) {
    window.location.href = "/auth/profile";
    //return <Redirect to={ "/auth/profile"}/>;
  }
  //let data=[];

  async function deletedetail(id) {
    await getCandidateeducationDelete(id)
      .then((response) => {
        alert(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function updatedetail(id, education) {
    setCid(id);
    setEduType(education);
  }
  async function handleButtonClick(e) {
    e.preventDefault();
    setRedirect(true);
  }
  async function handleButtonClickE(e) {
    e.preventDefault();

    await CandidateEducation(state)
      .then((response) => {
        alert(response[0][0].ID);
        //ResetState();
        //setRedirect(true);
        setShow(false);
        //bindEducationData();
      })
      .catch((error) => {
        alert(error);
      });
  }
  let rendereducationlist = isLoading
    ? data.map((item, index) => (
        <div className="eduListItem" key={index}>
          <h4>
            {item.Degree},{item.Stream}
          </h4>
          <p>{item.CollegeName}</p>
          <p>
            {item.StartYear} - {item.EndYear}
          </p>
          <p>Percentage: {item.Performance}%</p>
          <div className="eduListAction">
            <button
              className="edit"
              onClick={updatedetail(item.CandidateeducationID, item.Education)}
            >
              <Icon path={mdiPencilOutline} />
              edit
            </button>
            <button
              className="del"
              onClick={() => deletedetail(item.CandidateeducationID)}
            >
              <Icon path={mdiDeleteOutline} />
              delete
            </button>
          </div>
        </div>
      ))
    : "";
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section form-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={10} lg={8}>
              <Card>
                <Card.Body className="px-4 py-4">
                  <FormHeader
                    status={params.status}
                    active="education"
                    complete={{
                      personal: true,
                      employment: true,
                      education: false,
                    }}
                  />
                  <div className="formBody">
                    <Row>
                      <Col sm={12} md={12}>
                        <Row className="justify-content-center">
                          <Col xs={12} md={12}>
                            <div className="eduListItems">
                              {rendereducationlist}
                              {/* <div className="eduListItem">
                                <h4>
                                  Bachelor of Computer Applications (BCA),
                                  Computer Science
                                </h4>
                                <p>D.N College</p>
                                <p>2020 - 2022</p>
                                <p>Percentage: 85.00%</p>
                                <div className="eduListAction">
                                  <button className="edit">
                                    <Icon path={mdiPencilOutline} />
                                    edit
                                  </button>
                                  <button className="del">
                                    <Icon path={mdiDeleteOutline} />
                                    delete
                                  </button>
                                </div>
                              </div> */}
                            </div>
                          </Col>
                          <Col xs={12} md={12}>
                            <ul className="formEduList">{renderEduList}</ul>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <div
                    className="formFooter pt-3 mt-4 border-top"
                    align="right"
                  >
                    <a
                      href={
                        params.status === "intern"
                          ? "/auth/" + params.status + "/personal-information"
                          : "/auth/" + params.status + "/employment-details"
                      }
                      className="formButton theme2 outline"
                    >
                      <Icon path={mdiChevronLeft} />
                      <span>back</span>
                    </a>
                    <button
                      className="formButton theme px-4"
                      onClick={() => handleButtonClick()}
                    >
                      <span>submit</span>
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="formModal"
        onEntered={onModalEntered}
      >
        <Modal.Body>
          <AddEducationModal
            handleClose={handleClose}
            show={show}
            addFormOptions={addFormOptions}
            title={eduType}
            id={cid}
            status={params.status}
            state={state}
            setState={setState}
            handleButtonClick={handleButtonClickE}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
