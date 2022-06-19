import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import JobsSearchComponent from "../sections/JobsSearchComponent";
import JobSearchForm from "../components/JobSearchForm";
import JobsSearchFilters from "../components/JobsSearchFilters";
import { mdiFilterVariant } from "@mdi/js";
import Icon from "@mdi/react";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function Jobs() {
  const [show, setShow] = useState(false);
  let query = useQuery();
  const [data, setData] = useState([]);
  const [datalist_, setDataList_] = useState([]);
  console.log(data);
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={12} md={12}>
              <div className="app__search">
                <JobSearchForm />
              </div>
              <div className="app__jobsBy">
                <a
                  className={
                    query.get("search") === "jobs-by-company" ? "active" : ""
                  }
                  href={`${window.location.origin}${window.location.pathname}?search=jobs-by-company`}
                >
                  Jobs by Company
                </a>
                <a
                  className={
                    query.get("search") === "jobs-by-location" ? "active" : ""
                  }
                  href={`${window.location.origin}${window.location.pathname}?search=jobs-by-location`}
                >
                  Jobs by Location
                </a>
                <a
                  className={
                    query.get("search") === "jobs-by-designation"
                      ? "active"
                      : ""
                  }
                  href={`${window.location.origin}${window.location.pathname}?search=jobs-by-designation`}
                >
                  Jobs by Designation
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="py-3"></div>
        <Container fluid className="app__container">
          <Row>
            {window.innerWidth > 600 ? 
            <Col sm={12} md={4} lg={3}>
              <JobsSearchFilters
                setData={setData}
                data={data}
                search={query.get("search")}
                k={query.get("k")}
                l={query.get("l")}
                e={query.get("e")}
                setDataList_={setDataList_}
                cn={query.get("cn")}
                c={query.get("c")}
              />
            </Col> : <></>}
            <Col sm={12} md={8} lg={9}>
              <div className="app__search-wraper">
                {/* <div className="app__search-rslt_top">
                  <label>Web Developer Fresher jobs in Pune, Maharashtra</label>
                  <ul className="app__search-rslt-list">
                    <li className="me-5">
                      <span>sort by : </span>
                      <a href="/jobs">relevance</a>-<b>date</b>
                    </li>
                    <li>
                      <label>Page 1 of 2 jobs</label>
                    </li>
                  </ul>
                </div> */}
                <div style={{ maxWidth: "100%", flex: "1 0 100%" }}>
                  <JobsSearchComponent setData={setData} data={data} datalist_={datalist_} setDataList_={setDataList_} />
                  {/* <div className="alert alert-danger" role="alert">
                    No...! Jobs Found
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {window.innerWidth < 600 ? <div className="bottom-row">
        <button className="bottomRowFilters" onClick={() => setShow(true)}>
          <Icon path={mdiFilterVariant} />
          filters
        </button>
      </div> : <></>}
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <JobsSearchFilters
            setData={setData}
            data={data}
            search={query.get("search")}
            k={query.get("k")}
            l={query.get("l")}
            e={query.get("e")}
            setDataList_={setDataList_}
            cn={query.get("cn")}
            c={query.get("c")}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success">Apply Filters</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
