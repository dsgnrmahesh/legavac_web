import React from "react";
import { Col } from "react-bootstrap";

export default function RecruterSearchResultBlock({ sm, md, lg, data }) {
  return (
    <>
      <Col sm={sm} md={md} lg={lg}>
        <div className="search-result-block">
          <div className="search-result-block-inner">
            <div className="search-result-block-image">
              <img src="/images/user-female-placeholder.jpg" alt="" />
            </div>
            <div className="search-result-block-content">
              <a href="/" className="srbc-name">
                {data.name}
              </a>
              <label className="srbc-prof">{data.profession}</label>
              <a
                href="/"
                className="srbc-comp"
                style={{
                  backgroundImage: "url('/images/office-building-24.png')",
                }}
              >
                {data.company}
              </a>
              <span
                className="srbc-location"
                style={{
                  backgroundImage: "url('/images/location-24.png')",
                }}
              >
                {data.location}
              </span>
            </div>
            <div className="search-result-block-content-bottom">
              <p>{data.followers} followers</p>
              <button className="srbc-button">follow</button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
