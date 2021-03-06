import React, { Component, PropTypes } from "react";
import { Button } from "react-bootstrap";

export default class IntroNetworkDefinition extends Component {
  static propTypes = {
    history: PropTypes.object,
    next: React.PropTypes.func
  };

  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return <div className="intro-story__background background--image4">
      <div className="intro-story__h1">We Vote Together</div>
      <div className="intro-story__h2">Your friends, and the <br />
        organizations
        you <Button bsStyle="success"
                    bsSize="xsmall"
                    >
              <span>Listen</span>
            </Button> to, <br />
        are your <strong>We Vote</strong> network.</div>
        <div><br /></div>
      <div><img className="center-block intro-story__img-height--extra" src={"/img/global/intro-story/slide4-connect-friends-300x370-min.png"}/></div>
      <div className="intro-story__padding-btn">
        <button type="button" className="btn btn-success" onClick={this.props.next}>Next&nbsp;&nbsp;&gt;</button>
      </div>
    </div>;
  }
}

