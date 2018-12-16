import * as React from 'react';

import './LoadingNotice.css';

export default class LoadingNotice extends React.PureComponent {
  render() {
    return (
      <div className="loading-notice--container">
        <h1>Loading, please wait...</h1>
      </div>
    )
  }
}