import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE_YOUTUBE = "https://www.youtube.com/watch?v=";
const BASE_IMDB = "https://www.imdb.com/title/";
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

const HoverInfo = styled.span`
  font-size: 20px;
  margin: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 19px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  width: 50%;
`;

const Trailer = styled.div`
  margin-top: 30px;
`;

const CompanyLogoContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  width: 11vw;
  height: 7vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const CompanyLogo = styled.div`
  background-image: url(${(props) => props.logoUrl});
  width: 10vw;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const handleImdb = (imdb_id) => {
  window.open(`${BASE_IMDB}${imdb_id}`);
};

const handleHomepage = (homeUrl) => {
  window.open(`${homeUrl}`);
};

const DetailPresenter = ({ result, trailerResults, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <InfoContainer>
            <Info>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Info>
            <Divider>▫</Divider>
            <Info>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Info>
            <Divider>▫</Divider>
            <Info>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Info>
            {result.imdb_id && (
              <>
                <Divider>▫</Divider>
                <HoverInfo onClick={() => handleImdb(result.imdb_id)}>
                  <FontAwesomeIcon
                    icon={faImdb}
                    style={{ transform: "scale(2, 1.5)" }}
                  />
                </HoverInfo>
              </>
            )}
            {result.homepage && (
              <>
                <Divider>▫</Divider>
                <HoverInfo onClick={() => handleHomepage(result.homepage)}>
                  <FontAwesomeIcon icon={faHome} />
                </HoverInfo>
              </>
            )}
            {result.production_companies && (
              <>
                <CompanyLogoContainer>
                  <CompanyLogo
                    logoUrl={`${BASE_IMAGE}${result.production_companies[0].logo_path}`}
                  ></CompanyLogo>
                </CompanyLogoContainer>
              </>
            )}
          </InfoContainer>
          <Overview>{result.overview ? result.overview : ""}</Overview>
          {trailerResults && trailerResults.length > 0 && (
            <Trailer>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerResults[0].key}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Trailer>
          )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  trailerResults: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
