import React from "react";
import Icon from "@mdi/react";
import {
  mdiBriefcaseOutline,
  mdiCurrencyInr,
  mdiFile,
  mdiHeartOutline,
  mdiMapOutline,
} from "@mdi/js";
import { Col } from "react-bootstrap";

export default function CompanySearchResultBlock({ sm, md, lg, data }) {
  const renderDesc = data.desc.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <>
      <Col sm={sm} md={md} lg={lg}>
        <div className="companySearchBlock">
          <a href="/job">
            <div className="companySearchBlockInner">
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
              <ul className="d-flex mb-2 align-items-center">{renderDesc}</ul>
              <div className="d-flex border-top pt-2 justify-content-between px-3 align-items-center">
                <span style={{ fontWeight: 500, color: "#6f6f6f" }}>
                  {data.postedAt}
                </span>
                <button>
                  <Icon path={mdiHeartOutline} />
                  save
                </button>
              </div>
            </div>
          </a>
        </div>
      </Col>
    </>
  );
}
