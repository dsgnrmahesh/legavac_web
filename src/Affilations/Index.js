import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import AffilationBlock from "./AffilationBlock";
import { getAffilationDetail } from "../config/api";

export default function Affilations() {
  const [modalShow, setModalShow] = useState(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    bindData();
  }, []);
  async function bindData() {
    await getAffilationDetail()
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
            <h2>Affilation's</h2>
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
                  <AffilationBlock
                    key={idx}
                    adata={i}
                    setModalShow={setModalShow}
                  />
                ))
              :""}
          </Row>
        </Container>
      </section>{" "}
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
      </Modal>
    </>
  );
}
