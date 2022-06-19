import { mdiCheck } from "@mdi/js";
import Icon from "@mdi/react";
import React,{useState,useEffect} from "react";
import { Col, Row, Container } from "react-bootstrap";
import { getMembershipPlanForWeb } from "../config/api";

export default function ServicePlan() {
  const [data, setData] = useState([]);
  const [jobtid, setJobtid] = useState(0);
  useEffect(()=>{
    BindData();
  },[])
  async function BindData() {
    await getMembershipPlanForWeb()
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5 mb-5">
        <Container>
          <div className="about-title mb-5 text-center">
            <h2>Service Plans</h2>
            <div className="about-stitle">
              Welcome to{" "}
              <span
                style={{
                  fontFamily: '"Quicksand", serif',
                  fontWeight: 600,
                  fontStyle: "italic",
                  fontSize: 19,
                  color: "#eb8a00",
                }}
              >
                <span style={{ color: "#001ba1" }}>L</span>ega
                <span style={{ color: "#001ba1" }}>V</span>ac
              </span>
            </div>
          </div>
          <Row>
            {
              data?
            data.map((item,index)=>(
            <Col sm={12} md={3} key={index}>
              <div className="planBox">
                <div className="planBoxInner">
                  <div className="planIcon">
                    <img src="/images/basic-plan.jpg" alt="" />
                  </div>
                  <div className="planName">{item.PlanName}</div>
                  <div className="planRate">₹ {item.Price}/-</div>
                  <div className="planDuration">{item.Duration}</div>
                  <ul className="planInfo">
                    {
                      item.Membershipplanfeature!==''&& item.Membershipplanfeature!==null?
                      item.Membershipplanfeature.split(",").map((i, idx) => (
                        <li key={idx}>
                          <Icon path={mdiCheck} />
                          <span>{i.split(":")[0]}</span>
                        </li>
                        ))
                      :""
                    }
                    {/* <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li> */}
                  </ul>
                  <button className="planBuy">get it now</button>
                </div>
              </div>
            </Col>))
           :""
          }
            {/* <Col sm={12} md={3}>
              <div className="planBox">
                <div className="planBoxInner">
                  <div className="planIcon">
                    <img src="/images/month-plan.jpg" alt="" />
                  </div>
                  <div className="planName">basic plan</div>
                  <div className="planRate">₹ 1,239/-</div>
                  <div className="planDuration">6 Months</div>
                  <ul className="planInfo">
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                  </ul>
                  <button className="planBuy">get it now</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="planBox">
                <div className="planBoxInner">
                  <div className="planIcon">
                    <img src="/images/year-plan.jpg" alt="" />
                  </div>
                  <div className="planName">basic plan</div>
                  <div className="planRate">₹ 1,239/-</div>
                  <div className="planDuration">6 Months</div>
                  <ul className="planInfo">
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                  </ul>
                  <button className="planBuy">get it now</button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <div className="planBox">
                <div className="planBoxInner">
                  <div className="planIcon">
                    <img src="/images/basic-plan.jpg" alt="" />
                  </div>
                  <div className="planName">basic plan</div>
                  <div className="planRate">₹ 1,239/-</div>
                  <div className="planDuration">6 Months</div>
                  <ul className="planInfo">
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                    <li>
                      <Icon path={mdiCheck} />
                      <span>list items 1</span>
                    </li>
                  </ul>
                  <button className="planBuy">get it now</button>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}
