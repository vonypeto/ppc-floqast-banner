import styled from "styled-components";
import Image from "../assets/img/test3.png";
export const HeroBg = styled.div`
  position: "absolute";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 30px; */
  height: 750px;
  position: relative;
  background-repeat: no-repeat;
  background-image: url(${Image});
  background-size: cover;
  object-fit: cover;
  background-position: center;
`;
