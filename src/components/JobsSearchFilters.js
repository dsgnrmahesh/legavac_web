import React, { useState, useEffect } from "react";

import {
  getPostedJobFilterList,
  getPostjobDetail,
  getPostjobDetailByWhereCondition,
} from "../config/api";
import JobsSearchFilterBlock from "./JobsSearchFilterBlock";

export default function JobsSearchFilters({ setData, data, search, k, l, e, setDataList_, cn, c }) {
  const [jobtitle, setJobTitle] = useState([]);
  const [subjobtitle, setSubJobTitle] = useState([]);
  const [city, setCity] = useState([]);
  const [companyname, setCompanyName] = useState([]);
  const [jobtid, setJobtid] = useState(0);
  const [state, setState] = useState({
    SearchText: "",
    JobTitleId: "",
    SubJobTitleId: "",
    CityId: "",
    CompanyName: "",
    Experience: "0",
  });
  useEffect(() => {
    if (search !== '' && search !== null && search !== undefined) {
      BindData({
        SearchText: "",
        JobTitleId: "",
        SubJobTitleId: "",
        CityId: "",
        CompanyName: "",
        Experience: "0",
      });
    }
    else if (k !== null && l !== null && e !== null) {
      BindData({
        SearchText: "",
        JobTitleId: k,
        SubJobTitleId: "",
        CityId: l,
        CompanyName: "",
        Experience: e,
      });
    }
    else if (cn !== null) {
      BindData({
        SearchText: "",
        JobTitleId: "",
        SubJobTitleId: "",
        CityId: "",
        CompanyName: cn,
        Experience: 0,
      });
    }
    else if (c !== null) {
      BindData({
        SearchText: "",
        JobTitleId: "",
        SubJobTitleId: "",
        CityId: c,
        CompanyName: "",
        Experience: 0,
      });
    }
    else {
      BindData({
        SearchText: "",
        JobTitleId: k,
        SubJobTitleId: "",
        CityId: l,
        CompanyName: "",
        Experience: 0,
      });
    }
    BindFilterData();

  }, []);
  async function BindFilterData() {
    await getPostedJobFilterList({ JobTitleId: jobtid })
      .then((response) => {
        setJobTitle(response[0]);
        setSubJobTitle(response[1]);
        setCity(response[2]);
        setCompanyName(response[3]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindData(obj) {
    await getPostjobDetailByWhereCondition(obj)
      .then((response) => {

        setData(response[0]);
        setDataList_(response[0].slice(0, 5))
      })
      .catch((error) => {
        alert(error);
      });
    // }
  }
  const chkjt = [];
  const chksjt = [];
  const chkc = [];
  const chkcn = [];
  function handlechange(e) {
    const checkedsjt = document.getElementsByClassName("chkjobtitle");
    const checkedssjt = document.getElementsByClassName("chksubjobtitle");
    const checkedsc = document.getElementsByClassName("chkcity");
    const checkedscn = document.getElementsByClassName("chkcompanyname");
    for (let i = 0; i < checkedsjt.length; i++) {
      if (checkedsjt[i].checked) {
        chkjt.push(checkedsjt[i].value);
      }
    }
    for (let i = 0; i < checkedssjt.length; i++) {
      if (checkedssjt[i].checked) {
        chksjt.push(checkedssjt[i].value);
      }
    }
    for (let i = 0; i < checkedsc.length; i++) {
      if (checkedsc[i].checked) {
        chkc.push(checkedsc[i].value);
      }
    }
    for (let i = 0; i < checkedscn.length; i++) {
      if (checkedscn[i].checked) {
        chkcn.push(checkedscn[i].value);
      }
    }
    setState({
      SearchText: "",
      JobTitleId: chkjt.toString(),
      SubJobTitleId: chksjt.toString(),
      CityId: chkc.toString(),
      CompanyName: chkcn.toString(),
      Experience: "0",
    });

    BindData({
      SearchText: "",
      JobTitleId: chkjt.toString(),
      SubJobTitleId: chksjt.toString(),
      CityId: chkc.toString(),
      CompanyName: chkcn.toString(),
      Experience: "0",
    });
  }
  return (
    <>
      <div className="search-filters">
        {search === 'jobs-by-company' ? (
          <JobsSearchFilterBlock
            name="CompanyName"
            classname="chkcompanyname"
            handlechange={handlechange}
            items={companyname}
            title={search.split("-").join(" ")}
            jobtid={jobtid}
            setState={setState}
            state={state}
          />
        ) : search === 'jobs-by-location' ? (
          <JobsSearchFilterBlock
            name="CityId"
            classname="chkcity"
            handlechange={handlechange}
            items={city}
            title={search.split("-").join(" ")}
            jobtid={jobtid}
            setState={setState}
            state={state}
          />
        ) : search === 'jobs-by-designation' ? (
          <JobsSearchFilterBlock
            name="SubJobTitleId"
            classname="chksubjobtitle"
            handlechange={handlechange}
            items={subjobtitle}
            title={search.split("-").join(" ")}
            jobtid={jobtid}
            setState={setState}
            state={state}
          />
        ) : (
          <>
            <JobsSearchFilterBlock
              name="JobTitleId"
              classname="chkjobtitle"
              handlechange={handlechange}
              items={jobtitle}
              title="Industry"
              jobtid={jobtid}
              setState={setState}
              state={state}
            />
            <JobsSearchFilterBlock
              name="SubJobTitleId"
              classname="chksubjobtitle"
              handlechange={handlechange}
              items={subjobtitle}
              title="Designation"
              jobtid={jobtid}
              setState={setState}
              state={state}
            />
            <JobsSearchFilterBlock
              name="CityId"
              classname="chkcity"
              handlechange={handlechange}
              items={city}
              title="Location"
              jobtid={jobtid}
              setState={setState}
              state={state}
            />
          </>
        )}
      </div>
    </>
  );
}
