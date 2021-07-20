import React from "react";
import { moviesApi } from "../../api";
import CollectionPresenter from "./CollectionPresenter";

export default class extends React.Component {
  state = {
    collectionInfo: null,
  };
  async componentDidMount() {
    try {
      const {
        location: {
          state: { collectionInfo },
        },
        history: { push },
      } = this.props;
      if (collectionInfo === undefined) {
        return push("/");
      }
    } catch {
      this.setState({ error: "시리즈 정보를 찾을 수 없음" });
    }
  }

  render() {
    const {
      location: {
        state: { collectionInfo },
      },
    } = this.props;

    return <CollectionPresenter collectionInfo={collectionInfo} />;
  }
}
