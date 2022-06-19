import React, { useEffect, useState, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiBriefcaseOutline,
  mdiCurrencyInr,
  mdiFile,
  mdiHeartOutline,
  mdiMapOutline,
  mdiChevronDown,
  mdiChevronUp
} from "@mdi/js";
import { Col } from "react-bootstrap";
import { IU_appliedjob } from "../config/api";
import renderHTML from "react-render-html";
export default function JobListGridItem({ sm, md, lg, data }) {
  // const renderDesc = data.desc.map((item, index) => (
  //   <li key={index}>{item}</li>
  // ));
  // const [state, setState] = useState({
  //   AppliedjobID:"0",
  //   CandidateID: "0",
  //   JobID:"0",
  //   CreatedBy:sessionStorage.getItem(CandidateID)
  // });
  const descEL = useRef(null);
  const [show, setShow] = useState(false);
  const [read, setRead] = useState({
    text: 'Read more',
    icon: mdiChevronDown
  });
  useEffect(() => {
    if (
      sessionStorage.getItem("CandidateID") !== "0" &&
      sessionStorage.getItem("CandidateID") !== null
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);
  async function AppliedJob(jobid) {
    if (
      sessionStorage.getItem("CandidateID") !== "0" &&
      sessionStorage.getItem("CandidateID") !== null
    ) {
      await IU_appliedjob({
        AppliedjobID: "0",
        CandidateID: sessionStorage.getItem("CandidateID"),
        JobID: jobid,
        CreatedBy: sessionStorage.getItem("CandidateID"),
      })
        .then((response) => {
          if (response[0].length > 0) {
            alert("Applied Successfully");
            window.location.href = "/jobs";
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      window.location.href = "/auth/sign-in";
    }
  }
  const desc_div = {
    display: 'none'
  }
  const handleRead = () => {
    if (descEL.current.style.display == "none") {
      descEL.current.style.display = 'block';
      setRead({
        text: "Less more",
        icon: mdiChevronUp
      })
    } else {
      descEL.current.style.display = 'none';
      setRead({
        text: 'Read more',
        icon: mdiChevronDown
      })
    }
  }
  return (
    <>
      <Col sm={sm} md={md} lg={lg}>
        <div className="companySearchBlock">
          <div className="companySearchBlockInner pb-2">
            <h3>{data.name}</h3>
            <div className="comapany-name">{data.company}</div>
            <div className="d-flex mb-2 align-items-center">
              <span className="me-2">
                <Icon path={mdiBriefcaseOutline} className="me-2" />
                {data.exp}
              </span>
              <span className="me-2">
                <Icon path={mdiCurrencyInr} className="me-2" />
                {data.pkg}
              </span>
              <span>
                <Icon path={mdiMapOutline} className="me-2" />
                {data.location}
              </span>
            </div>
            <div className="d-flex mb-2 align-items-center">
              <Icon path={mdiFile} className="me-2" />
              {data.qualifications}
            </div>
            {data.jobdesc !== "" ? <>
              <div className="mb-2 pb-2 align-items-center" ref={descEL} style={desc_div}>
                <div>
                  <b>Description :-</b>
                </div>
                {renderHTML(data.jobdesc)}
              </div>
              <div className="mb-2 d-flex align-items-center" style={{ color: '#3f51b5', fontWeight: 500, cursor: 'pointer' }}>
                <span onClick={handleRead}>
                  {read.text}
                </span>
                <Icon path={read.icon} />
              </div>
            </> : <></>}
            <div className="d-flex border-top pt-2 justify-content-between px-3 align-items-center">
              <span style={{ fontWeight: 500, color: "#6f6f6f" }}>
                {data.postedAt}
              </span>
              {show ? (
                data.AppliedCandidateID === 0 ||
                  data.AppliedCandidateID === "0" ||
                  data.AppliedCandidateID === "" ||
                  data.AppliedCandidateID === undefined ? (
                  <button onClick={() => AppliedJob(data.PostjobID)}>
                    <Icon path={mdiHeartOutline} />
                    Apply
                  </button>
                ) : data.AppliedCandidateID !== "" &&
                  data.AppliedCandidateID !== null ? (
                  data.AppliedCandidateID.indexOf(
                    sessionStorage.getItem("CandidateID")
                  ) !== -1 &&
                    sessionStorage.getItem("CandidateID") !== undefined ? (
                    <button>
                      <Icon path={mdiHeartOutline} />
                      Applied
                    </button>
                  ) : (
                    <button onClick={() => AppliedJob(data.PostjobID)}>
                      <Icon path={mdiHeartOutline} />
                      Apply
                    </button>
                  )
                ) : (
                  <button onClick={() => AppliedJob(data.PostjobID)}>
                    <Icon path={mdiHeartOutline} />
                    Apply
                  </button>
                )
              ) : (
                <button onClick={() => AppliedJob(data.PostjobID)}>
                  <Icon path={mdiHeartOutline} />
                  Apply
                </button>
              )}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
