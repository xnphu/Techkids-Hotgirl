import React, { Component } from "react";
import axios from "../axios";

import NavBar from "../components/NavBar";
import GirlImage from "../components/GirlImage";
import TextArea from "../components/TextArea";

class DetailScreen extends Component {
  state = {
    imageId: this.props.match.params.imageId
  };

  componentDidMount() {
    axios
      .get(`/api/images/${this.props.match.params.imageId}`)
      .then(data => {
        this.setState({
          image: data.data
        });
      })
      .catch(err => console.error(err));
  }

  _updateComment = (content) => {
    this.setState({
      comment: content
    })
  }

  render() {
    return (
      <div>
        <NavBar
          onSearchChanged={this._onSearchChanged}
          username={this.props.username}
          onLogin={this.props.onLogin}
        />
        <div className="main_content container">
          <div className="row">
            <div className="col-8 mr-auto ml-auto">
              {this.state.image ?
                <GirlImage
                  img={this.state.image}
                  username={this.props.username}
                  onLogin={this.props.onLogin}
                />
                : ""}
              <TextArea
                username={this.props.username}
                onLogin={this.props.onLogin}
                imageId={this.state.imageId}
                comment={this.state.comment}
                updateComment={this._updateComment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailScreen;
