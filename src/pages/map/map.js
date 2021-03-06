/**
 * Created by godnew on 2017/9/27.
 */
import React, { Component } from 'react';
import Header from '../../components/header/header'
import {hashHistory} from 'react-router'
import {connect} from 'react-redux'

class Map extends Component {
  constructor(props) {
    super(props);
    this.state={
      type:'',
      markers:'',
      pos:'',
      names:''
    }
  }
  render() {
    return (
      <div>
        <Header title={this.state.type} left={true} leftClick={this.goBack.bind(this)}/>
        <div style={styles.map}>
          <iframe ref="iframe" title="地图" style={{width:'100%',height:'100%'}} src="http://godnew.wang/nearby/map/map.html?" frameborder="0"></iframe>
        </div>
      </div>
    );
  }
  componentWillMount(){
    this.setState({
      type:this.props.params.type,
      pos:this.props.pos
    })
    if(this.props.params.type==='餐厅'){
      this.setState({
        markers:this.props.foodState.pos,
        names:this.props.foodState.name
      })
    }else if(this.props.params.type==='电影院'){
      this.setState({
        markers:this.props.movieState.pos,
        names:this.props.movieState.name
      })
    }else if(this.props.params.type==='银行'){
      this.setState({
        markers:this.props.bankState.pos,
        names:this.props.bankState.name
      })
    }else if(this.props.params.type==='厕所'){
      this.setState({
        markers:this.props.toiletState.pos,
        names:this.props.toiletState.name
      })
    }
  }
  componentDidMount(){
    this._setUrl()
  }
  _setUrl(){
    var url = 'http://godnew.wang/nearby/map/map.html?';
    url += 'pos=' + this.state.pos + '&markers=' + this.state.markers+'&names='+encodeURIComponent(this.state.names);
    this.refs.iframe.src=url;
  }
  goBack(){
    hashHistory.goBack()
  }
}

// -------------------redux react 绑定--------------------
function mapStateToProps(state){
  return {
    pos:state.position,
    bankState:state.bank,
    foodState:state.food,
    movieState:state.movie,
    toiletState:state.toilet,
  }
}
export default connect(
  mapStateToProps,
  null
)(Map)

var styles={
    map:{
      width:'100%',
      height:'100vh',
      paddingTop:'40px',
    }
}