import React from "react";
import { moviesApi } from "../../api";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    topRated: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        topRated,
        popular,
      });
    } catch {
      this.setState({
        error: "영화 정보를 가져오지 못 함",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, topRated, popular, error, loading } =
      this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        topRated={topRated}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
