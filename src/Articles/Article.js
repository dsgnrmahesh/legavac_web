import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getArticleDetailByID } from "../config/api";
import Modal from "react-bootstrap/Modal";
//import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import Icon from "@mdi/react";
import { mdiClose, mdiFilePdfBox, mdiMovieOpenPlayOutline } from "@mdi/js";
import { mdiPlay } from "@mdi/js";
import { useParams } from "react-router-dom";
import renderHTML from "react-render-html";

export default function Article() {
  const { id, name } = useParams();
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [video, setVideo] = useState("");
  useEffect(() => {
    bindData();
  }, []);
  async function bindData() {debugger;
    await getArticleDetailByID(id)
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return data.length > 0 ? (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5 mb-5">
        <Container>
          <Row className="justify-content-center">
            <Col sm={12} md={8} lg={7}>
              <div className="article-name">{data[0].Title}</div>
              <div className="article-image">
                <img
                  src={
                    "https://admin.legavac.com/uploads/article/image/" +
                    data[0].Image
                  }
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center flex-wrap">
                <a
                  href={
                    "https://admin.legavac.com/uploads/article/pdf/" +
                    data[0].Pdf
                  }
                  target="_blank" className="pdfBtn"
                >
                  <Icon path={mdiFilePdfBox} />
                  <span>
                    view pdf
                  </span>
                </a>
                <button className="btnPlay" onClick={() => {
                  setModalShow(true);
                  setVideo(data[0].Video);
                }}>
                  <Icon path={mdiMovieOpenPlayOutline} />
                  <span>
                    play video
                  </span>
                </button>
              </div>
              {data[0].VideoImage!=='' && data[0].VideoImage!==null ?
              <div
                className="articleImage hasPlay d-none"
              >
                <img
                  src={
                    "https://admin.legavac.com/uploads/article/videoimage/" +
                    data[0].VideoImage
                  }
                  alt=""
                  className="d-none"
                />
                <div className="playVideo">
                  <Icon path={mdiPlay} />
                </div>
              </div>
              :""}
              <div className="article-content">{renderHTML(data[0].Description)}</div>
            </Col>
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
          src={"https://admin.legavac.com/uploads/article/video/" + video}
        // {"https://admin.legavac.com/uploads/careeradvice/video/"+adata.Video}
        >
          <BigPlayButton position="center" />
          <LoadingSpinner />
        </Player> */}
      </Modal>
    </>
  ) : (
    ""
  );
}
