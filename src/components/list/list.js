/**
 * Created by godnew on 2017/9/25.
 */
import React, { Component } from 'react';
import Util from '../../util/util'
import {connect} from 'react-redux'

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
                  <span>{item.name}</span>
                  <span>{item.type}</span>
                </div>
                <div style={styles.item}>
                  <span>{item.distance}米</span>
                  <span>{item.address}</span>
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
      var lnglat=lon+','+lat;
      var url=Util.searchURL + 'key=' + Util.amapKey + '&keywords='+ that.props.type+'&types=050000' + '&extensions=base'+'&location=' + lnglat;
      that._getData(url);
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
      }else{
        alert('没有查询到相应的数据');
      }
    })
  }
}

// -------------------redux react 绑定--------------------


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

export default List;