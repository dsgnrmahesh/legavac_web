import React from "react";
import { Col } from "react-bootstrap";
import { mdiPlay } from "@mdi/js";
import Icon from "@mdi/react";
export default function CareerAdvicedBlock({adata, setModalShow,setVideo }) {
  return (
    <>
      <Col sm={12} md={4} lg={4}>
        <div className="articleBlock">
          <div className="articleBlockInner">
            <div
              className="articleImage hasPlay"
              onClick={() => { setModalShow(true);setVideo(adata.Video)}}
            >
              <img
                src={"https://admin.legavac.com/uploads/careeradvice/videoimage/"+adata.VideoImage}
                alt=""
              />
              <div className="playVideo">
                <Icon path={mdiPlay} />
              </div>
            </div>
            <div className="articleName">
              <span>{adata.Title}</span>
            </div>
            {/* <p>
              You're a company owner? Super! wait, wait. Have you ever been
              thinking where you're on the market?
            </p> */}
          </div>
        </div>
      </Col>
    </>
  );
}
