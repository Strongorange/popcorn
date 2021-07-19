import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      trailerResults: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let trailerResults = null;
    try {
      if (isMovie) {
        const request = await moviesApi.movieDetail(parsedId);
        result = request.data;
        trailerResults = request.data.videos.results;
      } else {
        const request = await tvApi.showDetail(parsedId);
        result = request.data;
        trailerResults = request.data.videos.results;
      }
      console.log(result);
    } catch {
      this.setState({ error: "정보를 찾을 수 없음" });
    } finally {
      this.setState({
        loading: false,
        result,
        trailerResults,
      });
    }
  }

  render() {
    const { result, trailerResults, error, loading } = this.state;
    return (
      <DetailPresenter
        result={result}
        trailerResults={trailerResults}
        error={error}
        loading={loading}
      />
    );
  }
}
