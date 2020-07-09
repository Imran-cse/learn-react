import React from 'react';

import { User } from './User';
import { Main } from './Main';
import { connect } from 'react-redux';

class TutorialApp extends React.Component {
  constructor(props) {
    super(props);
  }

  changeUsername(newName) {}

  render() {
    return (
      <div className='container'>
        <Main changeUsername={() => this.props.setName('Anna')} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialApp);
