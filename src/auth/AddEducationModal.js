import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Col, Row } from "react-bootstrap";
export default function AddEducationModal({
  handleClose,
  show,
  addFormOptions,
  title,
  id,
  status,
  state,
  setState,
  handleButtonClick,
}) {
  let years = [];
  for (var i = new Date().getFullYear(); i >= 1970; i--) {
    years.push(i);
  }
  //console.log(addFormOptions);
  const renderYearsOptions = years.map((year) => (
    <option value={year} key={year}>
      {year}
    </option>
  ));

  //console.log(state);
  const handleChange = (e) => {
    if (title === "Add secondary (X)") {
      setState({ ...state, Degree: "SSC", [e.target.name]: e.target.value });
    } else if (title === "Add senior secondary (XII)") {
      setState({ ...state, Degree: "HSC", [e.target.name]: e.target.value });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  // useEffect(()=>{
  //   ReactSession.setStoreType("localStorage");

  //   setState({...state,CandidateID:ReactSession.get("CandidateID"),Education:title});
  //   if(id!==0){
  //     updatedetail(id);
  //   }
  // },[]);
  // async function updatedetail(id){
  //   await getCandidateEducationbyid(id).then(response=>{
  //     //alert(response[0][0].ID);
  //     //setState(response[0][0]);
  //     //setRedirect(true);

  //   }).catch((error) =>
  //   {
  //       alert(error);
  //   });
  // }

  //console.log(state);
  return (
    <>
      <div className="formModalHeader">
        <h4>{title} details</h4>
        <button onClick={handleClose}>
          <Icon path={mdiClose} />
        </button>
        {/* {state} */}
      </div>
      <div className="formModalBody">
        <Row>
          <Col sm={12} md={12}>
            <label className="text-start mb-1 float-none">
              Matriculation status
            </label>
            <div className="formRadioButtons">
              <input
                type="radio"
                name="MatriStatus"
                id="matriculationStatus_Pursuing"
                value="0"
                checked={state.MatriStatus === 0}
                onChange={handleChange}
              />
              <label htmlFor="matriculationStatus_Pursuing">Pursuing</label>
              <input
                type="radio"
                name="MatriStatus"
                id="matriculationStatus_Completed"
                value="1"
                checked={state.MatriStatus === 1}
                onChange={handleChange}
              />
              <label htmlFor="matriculationStatus_Completed">Completed</label>
            </div>
            {state.errors ? (
              <div className="invalid-feedback">{state.errors.MatriStatus}</div>
            ) : (
              ""
            )}
          </Col>

          {/* Graduation details */}
          {title === "Add graduation" ||
          title === "Add post graduation" ||
          title === "Add diploma" ||
          title === "Add PhD" ? (
            <>
              <Col sm={12} md={12}>
                <label className="text-start mb-1 float-none">College</label>
                <input
                  type="text"
                  placeholder="Your College Name"
                  className="frmInput"
                  autoComplete="off"
                  name="CollegeName"
                  value={state.CollegeName}
                  onChange={handleChange}
                />
                {state.errors ? (
                  <div className="invalid-feedback">
                    {state.errors.CollegeName}
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col sm={12} md={6}>
                <label className="text-start mb-1 float-none">Start year</label>
                <select
                  className="frmInput"
                  name="StartYear"
                  value={state.StartYear}
                  onChange={handleChange}
                >
                  <option>Select Year</option>
                  {renderYearsOptions}
                </select>
                {state.errors ? (
                  <div className="invalid-feedback">
                    {state.errors.StartYear}
                  </div>
                ) : (
                  ""
                )}
              </Col>
              <Col sm={12} md={6}>
                <label className="text-start mb-1 float-none">End year</label>
                <select
                  className="frmInput"
                  name="EndYear"
                  value={state.EndYear}
                  onChange={handleChange}
                >
                  <option>Select Year</option>
                  {renderYearsOptions}
                </select>
                {state.errors ? (
                  <div className="invalid-feedback">{state.errors.EndYear}</div>
                ) : (
                  ""
                )}
              </Col>
            </>
          ) : (
            ""
          )}
          {title === "Add graduation" || title === "Add post graduation" ? (
            <Col sm={12} md={6}>
              <label className="text-start mb-1 float-none">Degree</label>
              <input
                type="text"
                placeholder="e.g. B.Sc"
                className="frmInput"
                autoComplete="off"
                name="Degree"
                value={state.Degree}
                onChange={handleChange}
              />
              {state.errors ? (
                <div className="invalid-feedback">{state.errors.Degree}</div>
              ) : (
                ""
              )}
            </Col>
          ) : (
            ""
          )}
          {title === "Add graduation" ||
          title === "Add post graduation" ||
          title === "Add diploma" ||
          title === "Add PhD" ? (
            <Col sm={12} md={6}>
              <label className="text-start mb-1 float-none">
                Stream
                <span className="text-muted ps-2 fs-6">(optional)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Economics"
                className="frmInput"
                autoComplete="off"
                name="Stream"
                value={state.Stream}
                onChange={handleChange}
              />
            </Col>
          ) : (
            ""
          )}

          {/* Graduation details */}

          <Col sm={12} md={12}>
            <label className="text-start mb-1 float-none">
              Year of completion
            </label>
            <select
              className="frmInput"
              name="YearOfCompletion"
              value={state.YearOfCompletion}
              onChange={handleChange}
            >
              <option>Select Year</option>
              {renderYearsOptions}
            </select>
            {state.errors ? (
              <div className="invalid-feedback">
                {state.errors.YearOfCompletion}
              </div>
            ) : (
              ""
            )}
          </Col>
          {title === "Add secondary (X)" ||
          title === "Add senior secondary (XII)" ? (
            <Col sm={12} md={12}>
              <label className="text-start mb-1 float-none">Board</label>
              <input
                type="text"
                placeholder="e.g. CBSE"
                className="frmInput"
                autoComplete="off"
                name="Board"
                value={state.Board}
                onChange={handleChange}
              />
              {state.errors ? (
                <div className="invalid-feedback">{state.errors.Board}</div>
              ) : (
                ""
              )}
            </Col>
          ) : (
            ""
          )}
          <Col sm={12} md={6}>
            <label className="text-start mb-1 float-none">
              Performance scale
              <span className="text-muted ps-2 fs-6">(optional)</span>
            </label>
            <select
              className="frmInput"
              name="PerformanceScale"
              value={state.PerformanceScale}
              onChange={handleChange}
            >
              <option>Select Performance scale</option>
            </select>
          </Col>
          <Col sm={12} md={6}>
            <label className="text-start mb-1 float-none">
              Performance
              <span className="text-muted ps-2 fs-6">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="0.00"
              className="frmInput"
              autoComplete="off"
              name="Performance"
              value={state.Performance}
              onChange={handleChange}
            />
          </Col>
          {title === "Add senior secondary (XII)" ? (
            <>
              <Col sm={12} md={12}>
                <label className="text-start mb-1 float-none">
                  Stream<span className="text-muted ps-2 fs-6">(optional)</span>
                </label>
                <select
                  className="frmInput"
                  name="Stream"
                  value={state.Stream}
                  onChange={handleChange}
                >
                  <option value="0">Select Year</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                </select>
              </Col>

              <Col sm={12} md={12}>
                <label className="text-start mb-1 float-none">
                  School<span className="text-muted ps-2 fs-6">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. CBSE"
                  className="frmInput"
                  autoComplete="off"
                  name="CollegeName"
                  value={state.CollegeName}
                  onChange={handleChange}
                />
              </Col>
            </>
          ) : (
            ""
          )}
          <Col sm={12} md={12}>
            <div className="formFooter pt-3" align="right">
              <button
                className="formButton theme px-4"
                onClick={handleButtonClick}
              >
                <span>submit &amp; continue</span>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
