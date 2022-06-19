import React,{useState,useEffect} from "react";
import Icon from "@mdi/react";
import { mdiDeleteOutline, mdiPencilOutline, mdiWindowRestore } from "@mdi/js";
import { Col, Modal } from "react-bootstrap";
import {
  getCandidateEducation,
  getCandidateeducationDelete,
  CandidateEducation,
  getCandidateEducationbyid,
} from "../config/api";
import AddEducationModal from "../auth/AddEducationModal";

export default function EducationslDetails() {
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
    CreatedBy: sessionStorage.getItem("CandidateID"),
    errors: [],
  });
  const handleClose = () => setShow(false);
  useEffect(() => {
    setState({ ...state, CandidateID: sessionStorage.getItem("CandidateID") });
    bindData();
  }, []);
  async function bindData() {
    await getCandidateEducation(sessionStorage.getItem("CandidateID"))
      .then((response) => {
        setData(response[0]);        
      })
      .catch((error) => {
        alert(error);
      });
  }
  const handleShow = (type) => {
    ResetState();
    setEduType(type);
    setState({ ...state, Education: type });
    setShow(true);
  };
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
  async function deletedetail(id){
    if(window.confirm("Are you sure.?")){
    await getCandidateeducationDelete(id).then(response=>{
      alert("Deleted Successfully");
      bindData();
    }) .catch((error) => {
    alert(error);
  });
}
  }
 async function updatedetail(id,education){
    setCid(id);
    setEduType(education);
    await getCandidateEducationbyid(id)
      .then((response) => {
        setState({ ...state, ...response[0][0] });
        setShow(true);
      })
      .catch((error) => {
        alert(error);
      });
  }
  const rendereducationlist=
   data.map((item,index)=>
    (
     <div className="eduListItem" key={index}>
        <h4>
         {item.Degree},
          {item.Stream}
        </h4>
        <p>{item.CollegeName}</p>
        <p>{item.StartYear} - {item.EndYear}</p>
        <p>Percentage: {item.Performance}%</p>
        <div className="eduListAction">
          <button className="edit" onClick={()=>updatedetail(item.CandidateeducationID,item.Education)}> 
            <Icon path={mdiPencilOutline} />
            edit
          </button>
          <button className="del" onClick={()=>deletedetail(item.CandidateeducationID)}>
            <Icon path={mdiDeleteOutline} />
            delete
          </button>
        </div>
      </div>));
   function ResetState() {
    setState({
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
      CreatedBy: 0,
      errors: [],
    });
  }
  async function handleSubmitButtonClick(e) {
    //e.preventDefault();
    setRedirect(true);
  }
  async function handleButtonClickE(e) {
    e.preventDefault();
    if (validate()) {
      await CandidateEducation(state)
        .then((response) => {
          alert("Updated Successfully");
          //ResetState();
          //setRedirect(true);
          setShow(false);
          //bindEducationData();
          ResetState();
          bindData();
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  function validate() {
    let errors = {};
    let IsValid = true;
    if (!state.MatriStatus) {
      IsValid = false;
      errors["MatriStatus"] = "Matriculation status is Required";
    }
    if (!state.YearOfCompletion) {
      IsValid = false;
      errors["YearOfCompletion"] = "Year Of Completion is Required";
    }

    if (
      eduType === "Add graduation" ||
      eduType === "Add post graduation" ||
      eduType === "Add diploma" ||
      eduType === "Add PhD"
    ) {
      if (!state.CollegeName) {
        IsValid = false;
        errors["CollegeName"] = "College Name is Required";
      }
      if (!state.StartYear) {
        IsValid = false;
        errors["StartYear"] = "Start Year is Required";
      }
      if (!state.EndYear) {
        IsValid = false;
        errors["EndYear"] = "End Year is Required";
      }
    }
    if (eduType === "Add graduation" || eduType === "Add post graduation") {
      if (!state.Degree) {
        IsValid = false;
        errors["Degree"] = "Degree is Required";
      }
    }
    if (
      eduType === "Add secondary (X)" ||
      eduType === "Add senior secondary (XII)"
    ) {
      if (!state.Board) {
        IsValid = false;
        errors["Board"] = "Board is Required";
      }
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  }
  return (
    <>
      <div className="profileBoxDetails">
        <div className="profileBoxDetailInner">
          <div className="profileForm">
            <Col xs={12} md={12}>
              <div className="eduListItems">
              {rendereducationlist}
                {/* <div className="eduListItem">
                  <h4>
                    Bachelor of Computer Applications (BCA), Computer Science
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
                </div>
                <div className="eduListItem">
                  <h4>
                    Bachelor of Computer Applications (BCA), Computer Science
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
          </div>
        </div>
      </div>
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
            //status={params.status}
            state={state}
            setState={setState}
            handleButtonClick={handleButtonClickE}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
