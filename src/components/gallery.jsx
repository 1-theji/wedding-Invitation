import React from "react";
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";

import IMG01 from "../assets/IMG01.jpg";
import IMG02 from "../assets/IMG02.jpg";
import IMG03 from "../assets/IMG03.jpg";
import IMG04 from "../assets/IMG04.jpg";
import IMG05 from "../assets/IMG05_크기수정.jpg";
import IMG06 from "../assets/IMG06.jpg";
import IMG07 from "../assets/IMG07.jpg";
import IMG08 from "../assets/IMG08.jpg";
import IMG09 from "../assets/IMG09.jpg";
import IMG10 from "../assets/IMG10.jpg";
import IMG11 from "../assets/IMG11.jpg";
import IMG12 from "../assets/IMG12_크기수정.jpg";
import IMG13 from "../assets/IMG13_크기수정.jpg";
import IMG14 from "../assets/IMG14.jpg";
import IMG15 from "../assets/IMG15.jpg";
import IMG16 from "../assets/IMG16.jpg";
import IMG17 from "../assets/IMG17_크기수정.jpg";
import IMG18 from "../assets/IMG18_크기수정.jpg";


const Wrapper = styled.div`
  position: relative;
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (index) => {
    setIsZoomed(true);
    setZoomedImage(images[index].original);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
    setZoomedImage(null);
  };

  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        onThumbnailClick={(event, index) => handleImageClick(index)}
      />

    {isZoomed && (
        <div className="overlay" onClick={handleCloseZoom}>
          <img 
            src={zoomedImage} 
            alt="zoomed"
            className="zoomed-image"
          />
          <span className="close" onClick={handleCloseZoom}>&times;</span>
        </div>
      )}
    </Wrapper>
  );
};

export default Gallery;
