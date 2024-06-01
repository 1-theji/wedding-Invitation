import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import snapImage01 from "../assets/snapImage01.png";
import snapImage02 from "../assets/snapImage02.png";
import snapImage03 from "../assets/snapImage03.png";
import snapImage04 from "../assets/snapImage04.png";
import snapImage05 from "../assets/snapImage05.png";


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
    original: snapImage01,
    thumbnail: snapImage01,
  },
  {
    original: snapImage02,
    thumbnail: snapImage02,
  },
  {
    original: snapImage03,
    thumbnail: snapImage03,
  },
  {
    original: snapImage04,
    thumbnail: snapImage04,
  },
  {
    original: snapImage05,
    thumbnail: snapImage05,
  }
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
