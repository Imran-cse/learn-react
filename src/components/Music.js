import React from 'react';
import { Button } from 'antd';

export default class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };

    this.url = 'https://media.hungama.com/c/4/f1a/17f/48000832/48000832_128.mp3?tgKD8JrPnvk-wVtPRhqQU_FlupuVsWnqETuvW0ySNEVUZMl0GUffM7-QzijDkgbz-gjBijC4MhFc0uJLDwGGS2JfOeiDVd46z2-RgU-3gbD2pkfCEp1moSICnSGLDlKxh3iM_A';
    this.audio = new Audio(this.url);
  }

  togglePlay() {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div style={{margin: 30}}>
        <p>Click to play audio</p>
        <Button type='primary' onClick={() => this.togglePlay()}>
          {this.state.play ? 'Pause' : 'Play'}
        </Button>
      </div>
    );
  }
}
