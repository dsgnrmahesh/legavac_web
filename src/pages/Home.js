import React, { useEffect, useState } from "react";
import BrowseJobsByLocationComponent from "../sections/BrowseJobsByLocationComponent";
import CompaniesWeHelpedComponent from "../sections/CompaniesWeHelpedComponent";
import FeaturedJobsComponent from "../sections/FeaturedJobsComponent";
import MainSearchComponent from "../sections/MainSearchComponent";
import ReviewsSlidesComponent from "../sections/ReviewsSlidesComponent";
import { getCandidateEducation } from "../config/api";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    bindEducationData();
  }, []);
  async function bindEducationData() {
    //ReactSession.get("CandidateID")
    await getCandidateEducation(sessionStorage.getItem("CandidateID"))
      .then((response) => {
        setData(response[0]);
        // setisLoading(false);
        //data=response[0];
        //console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <MainSearchComponent />
      <CompaniesWeHelpedComponent />
      <BrowseJobsByLocationComponent />
      <FeaturedJobsComponent />
      <ReviewsSlidesComponent />
    </>
  );
}
