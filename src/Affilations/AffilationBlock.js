import React from "react";
import { Col } from "react-bootstrap";
export default function AffilationBlock({adata}) {
  return (
    <>
      <Col sm={12} md={4} lg={4}>
        <div className="articleBlock">
          <div className="articleBlockInner">
            <div className="articleImage">
              {adata.Image!=='' && adata.Image!==null && adata.Image!==undefined?<a href="#">
                <img
                  src={"https://admin.legavac.com/uploads/affilation/image/"+adata.Image}
                  alt=""
                />
              </a>:
              <a href="#">
              <img
                src="/profileimage.png"
                alt=""
              />
            </a>}
            </div>
            <div className="articleName">
              <a href="#">
                {adata.Title}
              </a>
            </div>
            <p>
              <a href={"https://admin.legavac.com/uploads/affilation/pdf/"+adata.Pdf} target="_blank">
                {adata.Pdf}
              </a>
            </p>
          </div>
        </div>
      </Col>
    {/* 


      <Col sm={12} md={4} lg={4}>
        <div className="articleBlock">
          <div className="articleBlockInner">
            <div className="articleImage">
              <a href="/Article/digital-marketing-is-essential-for-small-companies">
                <img
                  src="https://dthrill.com/images/blog/blog-01-370x230.jpg"
                  alt=""
                />
              </a> 
             <a href={"https://admin.legavac.com/uploads/affilation/pdf/"+adata.Pdf}>
             {adata.Title}
              </a>
            </div>
            <div className="articleName">
            <a href={"https://admin.legavac.com/uploads/affilation/pdf/"+adata.Pdf} target="_blank">
                {adata.Pdf}
              </a>
              
            </div>
             <p>
              You're a company owner? Super! wait, wait. Have you ever been
              thinking where you're on the market?
            </p>
            <div className="text-end">
              <a
                href="/Article/digital-marketing-is-essential-for-small-companies"
                className="articleRM"
              >
                read more...
              </a>
            </div>
          </div>
        </div>
      </Col> */}
    </>
  );
}
