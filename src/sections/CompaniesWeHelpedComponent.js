import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import { getPostedJobFilterList } from "../config/api";

export default function CompaniesWeHelpedComponent() {
  const [companyname, setCompanyName] = useState([]);
  const [imgCount, setImgCount] = useState(0);
  const [jobtid, setJobtid] = useState(0);
  useEffect(() => {
    BindFilterData();
  }, [])
  async function BindFilterData() {
    await getPostedJobFilterList({ JobTitleId: jobtid })
      .then((response) => {
        setCompanyName(response[3]);
      }).catch((error) => {
        alert(error);
      });
  }
  console.log(companyname);
  //const companyname = ['/images/company/lexschool.jpeg', '/images/company/lexcare.jpeg', '/images/company/dhage-associates.jpeg', '/images/company/jusoculus.jpeg', '/images/company/ms-associates.jpeg', '/images/company/piyushchobe.jpeg'];
  return (
    <>
      <section className="app__section border-bottom">
        <Container fluid>
          <SectionTitle
            title="Companies We've Helped"
            subTitle="Some of the companies we've helped recruit excellent applicants over the years."
          />
          <div className="app__compWeHelpd">
            {companyname.map((item, index) =>item.logo&&index>10?
              <div className="app__comp-img" key={index}>
                <a href={"/jobs?cn="}>
                  <img src={item.logo} alt="" style={{ maxHeight: 80 }} />
                </a>
              </div>:<></>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
