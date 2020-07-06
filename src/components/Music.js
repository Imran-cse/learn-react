import React from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };

    this.url =
      'https://media.hungama.com/c/4/1e7/e96/32084525/32084525_128.mp3?6aIXD8MOuF3ymt2-pxfEFXdkxwM2mBmRF9TjVgdWKjpDPWfp8OLwqyQ8CAkvebRyX0D6kmXzH-Dl5mCdqbnCZr4YaIBdBmuSzB2RShbOz5VrqS8gqcoAHLIZ0g6q8r8ImixLcw';
    this.audio = new Audio(this.url);
    this.audio.controls = true;
  }

  togglePlay() {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div style={{ margin: 30 }}>
        <p>Click to play audio</p>
        <Button
          type='primary'
          icon={
            this.state.play ? <PauseCircleOutlined /> : <PlayCircleOutlined />
          }
          onClick={() => this.togglePlay()}
        >
          {this.state.play ? 'Pause' : 'Play'}
        </Button>
      </div>
    );
  }
}
