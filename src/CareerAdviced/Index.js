import React, { useEffect, useState } from "react";
//import "video-react/dist/video-react.css";
import { Row, Container } from "react-bootstrap";
import CareerAdvicedBlock from "./CareerAdvicedBlock";
import Modal from "react-bootstrap/Modal";
//import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { getCareeradviceDetail } from "../config/api";
export default function CareerAdviced() {
  const [modalShow, setModalShow] = useState(false);
  const [video, setVideo] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    bindData();
  }, []);
  async function bindData() {

    await getCareeradviceDetail()
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5 mb-5">
        <Container>
          <div className="about-title mb-5 text-center">
            <h2>Career Adviced</h2>
            <div className="about-stitle">
              Welcome to{" "}
              <span
                style={{
                  fontFamily: '"Quicksand", serif',
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: 19,
                  color: "#eb8a00",
                }}
              >
                <span style={{ color: "#001ba1" }}>L</span>ega
                <span style={{ color: "#001ba1" }}>V</span>ac
              </span>
            </div>
          </div>
          <Row>
            {data !== ""
              ? data.map((i, idx) => (
                <CareerAdvicedBlock
                  key={idx}
                  adata={i}
                  setModalShow={setModalShow}
                  setVideo={setVideo}
                />
              ))
              : ""}
          </Row>
        </Container>
      </section>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <button className="closeModal" onClick={() => setModalShow(false)}>
          <Icon path={mdiClose} />
        </button>
        {/* <Player
          autoPlay
          src={"https://admin.legavac.com/uploads/careeradvice/video/" + video}
          // {"https://admin.legavac.com/uploads/careeradvice/video/"+adata.Video}
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player> */}
      </Modal>
    </>
  );
}
