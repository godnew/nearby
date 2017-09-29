/**
 * Created by godnew on 2017/9/25.
 */
import React, { Component } from 'react';
import Util from '../../util/util'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bankActionsFromOtherFile from '../../actions/bank'
import * as foodActionsFromOtherFile from '../../actions/food'
import * as movieActionsFromOtherFile from '../../actions/movie'
import * as toiletActionsFromOtherFile from '../../actions/toilet'
import * as positionActionsFromOtherFile from '../../actions/position'

class List extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      count:'',
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((item,index)=>{
            var phone;
            //item.tel 有个大坑全是字符串，突然会出现个空数组
            if(item.tel&&!Array.isArray(item.tel)){
              let numb=item.tel.split(';')[0];
              let call='tel:'+numb;
              phone=call;
            }
            return (
              <li style={styles.list}>
                <div style={styles.item}>
                  <span style={styles.text}>{item.name}</span>
                  <span style={styles.text}>{item.type}</span>
                </div>
                <div style={styles.item}>
                  <span style={styles.text}>{item.distance}米</span>
                  <span style={styles.text}>{item.address}</span>
                </div>
                <div style={styles.phone}>
                  <a style={styles.call} href={phone}>电话</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  componentDidMount(){
    this._getLocation()
  }
  _getLocation(){
    var that=this;
    window.navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      lat=parseFloat(lat).toFixed(6);
      lon=parseFloat(lon).toFixed(6);
      var lnglat=lon+','+lat;
      var transferUrl=Util.transferURL+lnglat+"&key="+Util.amapKey;
      Util.getJSON(transferUrl,(res)=>{
        that.props.positionActions.update(res.locations);
        let url=Util.searchURL + 'key=' + Util.amapKey + '&keywords='+ that.props.type+'&extensions=base&location=' + res.locations;
        that._getData(url);
      });

    })
  }
  _getData(url){
    Util.getJSON(url,(data)=>{
      if(data.status && data.info === 'OK'){
        var count = data.pois.length > 10? 10: data.pois.length;
        this.setState({
          list: data.pois,
          count: count
        });
        this._addStore(data)
      }else{
        alert('没有查询到相应的数据');
      }
    })
  }
  _addStore(data){
    var posArr = [];
    var name=[]
    var len = data.pois.length > 10? 10: data.pois.length;
    for(var i = 0; i < len; i++){
      posArr.push(data.pois[i].location);
      if(data.pois[i].name.length>5){
          let item=data.pois[i].name.substr(0,5)+'...';
          name.push(item)
      }else{
        name.push(data.pois[i].name);
      }
    }
    var posStr = posArr.join(',');
    var nameStr=name.join(',');
    var data={
      pos:posStr,
      name:nameStr
    }
    var type=this.props.type

    if(type==='餐厅'){
      this.props.foodActions.update(data)
    }else if(type==='电影院'){
      this.props.movieActions.update(data)
    }else if(type==='银行'){
      this.props.bankActions.update(data)
    }else if(type==='厕所'){
      this.props.toiletActions.update(data)
    }
  }
}

// -------------------redux react 绑定--------------------

function mapDispatchToProps(dispatch){
  return {
    bankActions:bindActionCreators(bankActionsFromOtherFile, dispatch),
    foodActions:bindActionCreators(foodActionsFromOtherFile, dispatch),
    movieActions:bindActionCreators(movieActionsFromOtherFile, dispatch),
    toiletActions:bindActionCreators(toiletActionsFromOtherFile, dispatch),
    positionActions:bindActionCreators(positionActionsFromOtherFile, dispatch)
  }
}

export default connect(null,mapDispatchToProps)(List)

var styles={
  list:{
    borderTop: '10px solid #eee',
    padding: '5px 10px'
  },
  item:{
    display: 'flex',
    justifyContent: 'space-between',
    padding:' 10px 0px',
    color:'#666'
  },
  text:{
    display:'block',
    width:'50%',
    overflow: 'hidden',
    textOverflow:'ellipsis',
    whiteSpace: 'nowrap',
    textAlign:'left'
  },
  phone:{
    lineHeight: '30px',
    border: '1px solid #eee',
    borderRadius: '2px'
  },
  call:{
    display:'block',
    width:'100%',
    height:'100%'
  }
}