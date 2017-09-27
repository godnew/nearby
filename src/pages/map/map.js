/**
 * Created by godnew on 2017/9/27.
 */
import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        地图{this.props.params.type}
      </div>
    );
  }
}

export default Map;