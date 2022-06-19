import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import JobListGridItem from "../components/JobListGridItem";
import { getAppliedjobByCandidate } from "../config/api";
export default function MyApplications() {
  const [data, setData] = useState([]);
  useEffect(() => {
    BindData();
  }, []);
  async function BindData() {
    await getAppliedjobByCandidate(sessionStorage.getItem("CandidateID"))
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <div className="profileBoxDetails">
        <div className="profileBoxDetailInner">
          <Row>
            {data.length > 0
              ? data.map((company) => (
                  <JobListGridItem
                    data={company}
                    sm={12}
                    md={12}
                    lg={12}
                    viewButton={true}
                  />
                ))
              : ""}
          </Row>
        </div>
      </div>
    </>
  );
}
