import React, { useState, useEffect } from "react";
import { Row, Col, Card, Image, Button, Form, Input } from "antd";
import Logo from "../assets/img/FQ-logo.png";
import { Textfit } from "react-textfit";
import { ContainerOutlined, UserOutlined } from "@ant-design/icons";
import Tri from "../assets/img/tri.png";

import { HeroBg, HeroContainer } from "../components/HeroElement";

const LayoutComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(
    () => {
      const listener = window.addEventListener(
        "resize",
        updateWindowDimensions
      );
      updateWindowDimensions();
      return listener;
    },
    [height],
    [width]
  );

  useEffect(() => {
    forceUpdate({});
  }, []);

  console.log(height, width);
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <Row
            justify="center"
            style={{
              minHeight: width <= 1000 ? "398px" : "500px",
              paddingTop: 70,
            }}
          >
            <Col xs={22} sm={22} md={22} lg={12} xl={12}>
              <div className="logo-opacity">
                <Card>
                  <Textfit mode="multi" min={25} max={35}>
                    <div className="container">
                      <Row justify="center">
                        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
                          <Row>
                            <Col
                              justify="center"
                              className="text-right"
                              xs={0}
                              sm={0}
                              md={0}
                              lg={19}
                              xl={19}
                            >
                              <Image
                                style={{ objectFit: "cover" }}
                                src={Logo}
                                preview={false}
                              />
                            </Col>
                            <Col
                              justify="center"
                              className="text-center"
                              xs={24}
                              sm={24}
                              md={24}
                              lg={0}
                              xl={0}
                            >
                              <Image
                                style={{ objectFit: "cover" }}
                                src={Logo}
                              />
                            </Col>
                            <Col xs={0} sm={0} md={0} lg={5} xl={5}>
                              <div className="mt-3 vertical-center paragraph ">
                                <b>
                                  <span>
                                    The
                                    {/* The Fastest, Most Accurate Way of Close Your Books! */}
                                  </span>
                                </b>
                              </div>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={0} xl={0}>
                              <div className="text-center paragraph margin-skip">
                                <b>
                                  <span className="color-idk ">
                                    The Fastest, Most Accurate
                                  </span>
                                  <br />
                                  <span> Way to Close Your Books!</span>
                                </b>
                              </div>
                            </Col>
                            <Col xs={0} sm={0} md={0} lg={24} xl={24}>
                              <div className="text-center paragraph-2 margin-skip">
                                <b>
                                  <span className="color-idk ">
                                    Fastest, Most Accurate
                                  </span>
                                  <br />
                                  <span> Way to Close Your Books!</span>
                                </b>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Textfit>
                </Card>
              </div>
            </Col>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}></Col>
          </Row>
          <Row
            justify="center"
            style={{ minHeight: width <= 1000 ? "50px" : "250px" }}
          >
            <Col xs={22} sm={22} md={22} lg={18} xl={18}>
              <Card>
                <Row>
                  <Col
                    type="flex"
                    align="middle"
                    className={`  ` + width <= 1000 ? `bg-green` : null + ``}
                    xs={24}
                    sm={24}
                    md={8}
                    lg={7}
                    xl={7}
                    style={{
                      verticalAlign: "middle",
                    }}
                  >
                    <div
                      className={
                        `schedule-size` + width <= 1000 ? `bg-green` : null + ``
                      }
                    >
                      <Row>
                        <Col
                          className="bg-green "
                          xs={24}
                          sm={24}
                          md={23}
                          lg={23}
                          xl={23}
                          style={{
                            verticalAlign: "middle",
                            padding: 20,
                          }}
                        >
                          {" "}
                          <Textfit mode="multi" min={25} max={35}>
                            <b>
                              <span style={{ color: "white" }}>
                                SCHEDULE A DEMO
                              </span>{" "}
                              <br />
                              <span style={{ color: "white" }}>
                                Learn More About FloQast
                              </span>
                            </b>
                          </Textfit>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={1} xl={1}>
                          <div className="arrow-right"></div>
                        </Col>
                      </Row>

                      {/* <div className="">
                        <h1>SCHEDULE A DEMO</h1>
                      </div> */}
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={15}
                    lg={16}
                    xl={16}
                    style={{ marginLeft: width <= 768 ? "0px" : "25px" }}
                  >
                    <Row justify="center">
                      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Textfit mode="multi" min={25} max={35}>
                          <div className="text-center paragraph-3">
                            <b>
                              <span>
                                Learn How FloQast Can{" "}
                                <span className="color-idk ">
                                  Imporve Your Month-End
                                </span>
                              </span>
                            </b>
                          </div>
                        </Textfit>
                      </Col>
                      <Col xs={22} sm={22} md={22} lg={24} xl={24}>
                        <div className="text-center paragraph-3">
                          <Form
                            form={form}
                            name="horizontal_login"
                            layout="inline"
                            onFinish={onFinish}
                          >
                            <Col xs={24} sm={24} md={24} lg={9} xl={9}>
                              <Form.Item
                                className="mt-2"
                                name="username"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your Full Name!",
                                  },
                                ]}
                              >
                                <Input
                                  prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                  }
                                  placeholder="Full Name"
                                />
                              </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={9} xl={9}>
                              <Form.Item
                                className="mt-2"
                                name="email"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input your email!",
                                  },
                                ]}
                              >
                                <Input
                                  prefix={
                                    <ContainerOutlined className="site-form-item-icon" />
                                  }
                                  type="email"
                                  placeholder="Email"
                                />
                              </Form.Item>{" "}
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                              <Form.Item shouldUpdate>
                                {() => (
                                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Button
                                      className="mt-2 mt-2"
                                      style={{ marginBottom: 10 }}
                                      block
                                      type="primary"
                                      htmlType="submit"
                                    >
                                      SCHEDULE NOW
                                    </Button>
                                  </Col>
                                )}
                              </Form.Item>
                            </Col>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </HeroBg>
      </HeroContainer>
    </>
  );
};
export default LayoutComponent;
