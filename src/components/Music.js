import React, { useEffect } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';

const Music = (props) => {
  const audio = new Audio(props.source);

  props.play ? audio.play() : audio.pause();

  audio.onended = () => props.togglePlay();

  return (
    <div>
      <Button
        type='primary'
        icon={props.play ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
        onClick={() => props.togglePlay()}
      >
        {props.play ? 'Pause' : 'Play'}
      </Button>
    </div>
  );
};

export default Music;
