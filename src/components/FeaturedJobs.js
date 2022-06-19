import React from "react";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiMapMarkerOutline } from "@mdi/js";
import { IU_appliedjob } from "../config/api";

export default function FeaturedJobs({
  data
}) {
  async function AppliedJob(jobid) {
    if (
      sessionStorage.getItem("CandidateID") !== "0" &&
      sessionStorage.getItem("CandidateID") !== null
    ) {
      await IU_appliedjob({
        AppliedjobID: "0",
        CandidateID: sessionStorage.getItem("CandidateID"),
        JobID: jobid,
        CreatedBy: sessionStorage.getItem("CandidateID"),
      })
        .then((response) => {
          if (response[0].length > 0) {
            alert("Applied Successfully");
            window.location.href = "/jobs";
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      window.location.href = "/auth/sign-in";
    }
  }
  return (
    <>
      <div className="fea_jobs border rounded pt-3 mb-3">
        <h5 className="px-3" style={{ fontWeight: 600 }}>
          <a href="/">{data.name}</a>
        </h5>
        <span className="px-3">{data.company}</span>
        <div className="border-top mt-3">
          <div className="d-flex align-items-center justify-content-between px-2" style={{ paddingTop: 2, paddingBottom: 2 }}>
            <span className="app__featuredJobs-lctn">
              <Icon path={mdiMapMarkerOutline} />
              {data.location}
            </span>
            <button className="app__featuredJobs-is ft" onClick={() => AppliedJob(data.PostjobID)}>
              <Icon path={mdiHeartOutline} />
              Apply
            </button>
          </div>
        </div>
      </div>
      <div className="app__featuredJobs-item d-none">
        <div className="app__featuredJobs-title">
          <div className="app__featuredJobs-logo">
            {/* <img src={companyLogo} alt="" /> */}
          </div>
          <h3>
            <a href="/" title="">

            </a>
          </h3>

        </div>


      </div>
    </>
  );
}
