import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import IMG01 from "../assets/IMG01.png";
import IMG02 from "../assets/IMG02.png";
import IMG03 from "../assets/IMG03.png";
import IMG04 from "../assets/IMG04.png";
import IMG05 from "../assets/IMG05.png";
import IMG06 from "../assets/IMG06.png";
import IMG07 from "../assets/IMG07.png";
import IMG08 from "../assets/IMG08.png";
import IMG09 from "../assets/IMG09.png";
import IMG10 from "../assets/IMG10.png";
import IMG11 from "../assets/IMG11.png";
import IMG12 from "../assets/IMG12.png";
import IMG13 from "../assets/IMG13.png";
import IMG14 from "../assets/IMG14.png";
import IMG15 from "../assets/IMG15.png";
import IMG16 from "../assets/IMG16.png";
import IMG17 from "../assets/IMG17.png";
import IMG18 from "../assets/IMG18.png";


const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images = [
  {
    original: IMG01,
    thumbnail: IMG01,
  },
  {
    original: IMG02,
    thumbnail: IMG02,
  },
  {
    original: IMG03,
    thumbnail: IMG03,
  },
  {
    original: IMG04,
    thumbnail: IMG04,
  },
  {
    original: IMG05,
    thumbnail: IMG05,
  },
  {
    original: IMG06,
    thumbnail: IMG06,
  },
  {
    original: IMG07,
    thumbnail: IMG07,
  },
  {
    original: IMG08,
    thumbnail: IMG08,
  },
  {
    original: IMG09,
    thumbnail: IMG09,
  },
  {
    original: IMG10,
    thumbnail: IMG10,
  },
  {
    original: IMG11,
    thumbnail: IMG11,
  },
  {
    original: IMG12,
    thumbnail: IMG12,
  },
  {
    original: IMG13,
    thumbnail: IMG13,
  },
  {
    original: IMG14,
    thumbnail: IMG14,
  },
  {
    original: IMG15,
    thumbnail: IMG15,
  },
  {
    original: IMG16,
    thumbnail: IMG16,
  },
  {
    original: IMG17,
    thumbnail: IMG17,
  },
  {
    original: IMG18,
    thumbnail: IMG18
  },
  
  
];

const Gallery = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
