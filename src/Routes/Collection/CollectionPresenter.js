import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 8px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  margin: 20px 0;
`;

const Info = styled.span`
  font-size: 20px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const CollectionPresenter = ({ collectionInfo }) => (
  <>
    {console.log("presenter!", collectionInfo)}
    <Container>
      <Helmet>
        <title>{collectionInfo.name}</title>
      </Helmet>
      <Backdrop bgImage={`${BASE_IMAGE}${collectionInfo.backdrop_path}`} />
      <Content>
        <Cover
          bgImage={
            collectionInfo.poster_path
              ? `${BASE_IMAGE}${collectionInfo.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{collectionInfo.name && collectionInfo.name}</Title>
        </Data>
      </Content>
    </Container>
  </>
);

CollectionPresenter.propTypes = {
  collectionInfo: PropTypes.object.isRequired,
};

export default CollectionPresenter;
