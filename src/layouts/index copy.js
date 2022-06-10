import React from "react";
import LazyHero from "react-lazy-hero";
import { Row, Col } from "antd";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const LayoutComponent = () => {
  return (
    <>
      <div>
        <Content>
          <Row>
            <LazyHero
              imageSrc="https://unsplash.it/2000/1000"
              isCentered={false}
              opacity={0.1}
              className="ant-layout-content "
            >
              <div>asda</div>
              <div className="hero-image">
                <div className="hero-text">
                  <h1>I am John Doe</h1>
                  <p>And I'm a Photographer</p>
                  <button>Hire me</button>
                </div>
              </div>{" "}
            </LazyHero>
          </Row>
        </Content>
      </div>
    </>
  );
};
export default LayoutComponent;
