import React from "react";
import { Row, Col, Card } from "antd";
import Logo from "../assets/img/FQ-logo.png";

import { HeroBg, HeroContainer } from "../components/HeroElement";

const LayoutComponent = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <Row justify="center" style={{ minHeight: "500px", paddingTop: 70 }}>
            <Col xs={22} sm={22} md={22} lg={12} xl={12}>
              <div className="logo-opacity">
                <Card>
                  <Row justify="center">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                      <Row>
                        <Col xs={24} sm={24} md={12} lg={19} xl={19}>
                          <img src={Logo} />
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={5} xl={5}>
                          <div className="mt-4 vertical-center paragraph ">
                            <h1>
                              The
                              {/* The Fastest, Most Accurate Way of Close Your Books! */}
                            </h1>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                          <div className="paragraph ">
                            <h1>Most Accurate Way of Close Your Books!</h1>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </div>
            </Col>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}></Col>
          </Row>
          <Row justify="center" style={{ minHeight: "250px" }}>
            <Col xs={22} sm={22} md={22} lg={12} xl={12}>
              <Card>dasd</Card>
            </Col>
          </Row>
        </HeroBg>
      </HeroContainer>
    </>
  );
};
export default LayoutComponent;
