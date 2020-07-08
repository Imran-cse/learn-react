import React, { Component } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

import Music from './Music';

import soundClip from '../assets/shorty.mp3';

export default class AudioHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };
  }

  togglePlay() {
    this.setState({ play: !this.state.play });
  }

  render() {
    return (
      <div style={{ margin: 30 }}>
        <p>Click to play audio</p>
        <Music
          play={this.state.play}
          togglePlay={this.togglePlay.bind(this)}
          source={soundClip}
        />
      </div>
    );
  }
}
