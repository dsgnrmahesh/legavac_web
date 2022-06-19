import React from "react";
import { Col } from "react-bootstrap";

export default function ArticleBlock({ adata }) {
  return (
    <>
      <Col sm={12} md={4} lg={4}>
        <div className="articleBlock">
          <div className="articleBlockInner">
            <div className="articleImage">
              <a href={"/article/" + adata.ArticleID + "/" + adata.Title}>
                <img
                  src={"https://admin.legavac.com/uploads/article/image/" + adata.Image}
                  alt=""
                />
              </a>
            </div>
            <div className="articleName">
              <a href={"/article/" + adata.ArticleID + "/" + adata.Title}>
                {adata.Title}
              </a>
            </div>
            <div className="articleDescription" dangerouslySetInnerHTML={{ __html: adata.Description }}>

            </div>
            <div className="text-end">
              <a
                href={"/article/" + adata.ArticleID + "/" + adata.Title}
                className="articleRM"
              >
                read more...
              </a>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
