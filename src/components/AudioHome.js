import React, { Component } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { Modal, Image, Header, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import Music from './Music';
import CallModal from './Modal/CallModal';

import soundClip from '../assets/shorty.mp3';

export default class AudioHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      showModal: false,
    };
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
  }

  updateState(obj) {
    this.setState(obj);
  }

  render() {
    const { showModal } = this.state;
    console.log(showModal);

    return (
      <div style={{ margin: 30 }}>
        <CallModal 
          showModal={showModal}
          updateState={this.updateState.bind(this)}
        />

        <p>Click to play audio</p>
        <Music
          play={this.state.play}
          togglePlay={this.togglePlay.bind(this)}
          source={soundClip}
        />

        <Button onClick={() => this.setState({ showModal: !showModal })}>
          Trigger Modal
        </Button>
      </div>
    );
  }
}
