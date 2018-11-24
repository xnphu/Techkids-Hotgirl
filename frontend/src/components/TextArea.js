import React, { Component } from 'react';
import axios from '../axios';

class TextArea extends Component {
    _onSubmitComment = (event) => {
        event.preventDefault();
        const { comment } = this.props;
        console.log("Comment la: " + comment + ", F5 de hien comment")
        axios
            .post(`/api/images/${this.props.imageId}/comments`,{
                content: comment
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <form onSubmit={this._onSubmitComment}>
                <div className="form-group">
                    <label>Add comment: </label>
                    <textarea
                        className="form-control"
                        rows="2"
                        onChange={(event) => {
                            this.props.updateComment(event.target.value);
                        }}
                    >
                    </textarea>
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-primary"
                    >Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default TextArea;