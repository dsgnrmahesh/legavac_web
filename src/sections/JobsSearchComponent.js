import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Pagination from "react-js-pagination";
import JobListGridItem from "../components/JobListGridItem";
import { getPostjobDetail } from "../config/api";

export default function JobsSearchComponent({ setDataList_, data, datalist_ }) {
  // const [activePage, setActivePage] = useState(1);
  // const handlePageChange = (pageNumber) => {
  //   console.log(`active page is ${pageNumber}`);
  //   setActivePage(pageNumber);
  // };

  const [newdata, setNewData] = useState([]);
  const [state, setState] = useState({
    activePage: 1,
  });

  const handlePageChange = (pageNumber) => {

    setState({ activePage: pageNumber });
    let upperLimit = parseInt(pageNumber) * 5;
    let lowerLimit = upperLimit - 5;
    let datalist = [];
    if (upperLimit <= data.length) {
      datalist = data.slice(lowerLimit, upperLimit);
    } else {
      datalist = data.slice(lowerLimit);
    }
    setDataList_(datalist);

    //window.scrollTo({ top: 100, left: 100, behavior: "smooth" });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Row className="app__jobLists">
        {datalist_ ? (
          datalist_.map((company, idx) => (
            <JobListGridItem data={company} sm={12} md={12} lg={12} key={idx} />
          ))
        ) : (
          <></>
        )}
      </Row>
      <Pagination
        activePage={state.activePage}
        itemsCountPerPage={5}
        totalItemsCount={data.length}
        pageRangeDisplayed={2}
        hideFirstLastPages={true}
        // prevPageText={<Icon path={mdiChevronLeft} />}
        // nextPageText={<Icon path={mdiChevronRight} />}
        activeLinkClass="page-active"
        onChange={handlePageChange.bind(this)}
      // activePage={activePage}
      // itemsCountPerPage={9}
      // totalItemsCount={90}
      // pageRangeDisplayed={5}
      // onChange={handlePageChange.bind(this)}
      />
    </>
  );
}
