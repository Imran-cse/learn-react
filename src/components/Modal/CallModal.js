import React from 'react';
import { Modal, Button, Icon, Image } from 'semantic-ui-react';
import answerImage from '../../assets/answer_call.png';
import rejectImage from '../../assets/reject_call.png';

import './Modal.css';

const CallModal = (props) => {
  const { showModal } = props;

  return (
    <Modal open={showModal} basic={true} size='small'>
      <div className='container'>
        <Image
          // src='https://react.semantic-ui.com/images/wireframe/square-image.png'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEWzcscqcQrKGcIdll1ThUjjfsGfZ2sPwuwQ&usqp=CAU'
          size='small'
          circular
        />
        <p className='name'>John Doe</p>
        <p className='age'>Age: 23</p>
        <p>Calling from Mirpur</p>
        </div>

        <div id='button-container'>
          <Image
            src={answerImage}
            size="tiny"
            circular
          />
          <div style={{width: 100}} />
          <Image
            src={rejectImage}
            size="tiny"
            circular
          />
        </div>
      
    </Modal>
  );
};

export default CallModal;
