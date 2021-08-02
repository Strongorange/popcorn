import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Loader from "../../Components/Loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BASE_IMDB = "https://www.imdb.com/title/";
const BASE_IMAGE = "https://image.tmdb.org/t/p/w500";
const BASE_YOUTUBE = (url) => (
  <iframe
    width="320"
    height="180"
    src={`https://www.youtube.com/embed/${url}`}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
);

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

const TrailersContainer = styled.div`
  margin-top: 30px;
  overflow-x: scroll;
  display: flex;
  padding-bottom: 15px;
  justify-content: space-between;
`;

const Trailer = styled.div`
  margin-right: 15px;
`;

const CompanyContainer = styled.div`
  display: flex;
  width: 30%;
  gap: 20px;
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

const CompanyCountryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

const CompanyCountryText = styled.span`
  font-size: 32px;
`;

const CompanyLogo = styled.div`
  background-image: url(${(props) => props.logoUrl});
  width: 10vw;
  height: 10vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const CollectionContainer = styled.div`
  width: 180px;
  height: 250px;
  margin-left: -12px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CollectionCover = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 180px;
  height: 250px;
  margin-top: 20px;
`;

const CollectionTitle = styled.span`
  font-size: 18px;
  margin-top: 10px;
`;

const SLink = styled(Link)``;

const SeasonsContainer = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding-bottom: 20px;
`;

const SeasonContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SeasonCover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
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
            <CompanyContainer>
              {result.production_companies[0].logo_path ? (
                <>
                  <CompanyLogoContainer>
                    <CompanyLogo
                      logoUrl={`${BASE_IMAGE}${result.production_companies[0].logo_path}`}
                    ></CompanyLogo>
                  </CompanyLogoContainer>
                </>
              ) : null}
              {result.production_companies[0].origin_country ? (
                <CompanyCountryContainer>
                  <CompanyCountryText>
                    {result.production_companies[0].origin_country}
                  </CompanyCountryText>
                </CompanyCountryContainer>
              ) : null}
            </CompanyContainer>
          </InfoContainer>
          <Overview>{result.overview ? result.overview : ""}</Overview>
          {trailerResults && trailerResults.length > 0 && (
            <TrailersContainer>
              {trailerResults.map((trailer) => (
                <Trailer>{BASE_YOUTUBE(trailer.key)}</Trailer>
              ))}
            </TrailersContainer>
          )}
          {result.belongs_to_collection && result.belongs_to_collection.id && (
            <>
              <CollectionContainer>
                <SLink
                  to={{
                    pathname: `/collection/${result.id}/${result.belongs_to_collection.id}`,
                    state: {
                      collectionInfo: result.belongs_to_collection,
                    },
                  }}
                >
                  <CollectionCover
                    imgUrl={`${BASE_IMAGE}${result.belongs_to_collection.poster_path}`}
                  ></CollectionCover>
                  <CollectionTitle>
                    {result.belongs_to_collection.name}
                  </CollectionTitle>
                </SLink>
              </CollectionContainer>
            </>
          )}
          {result.seasons && (
            <>
              <Title style={{ fontSize: "32px", padding: "10px 0px" }}>
                시즌
              </Title>
              <SeasonsContainer>
                {result.seasons.map((season, index) => (
                  <>
                    <SeasonContainer>
                      <SeasonCover
                        key={season.id}
                        bgImage={`${BASE_IMAGE}${season.poster_path}`}
                      />
                    </SeasonContainer>
                  </>
                ))}
              </SeasonsContainer>
            </>
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
