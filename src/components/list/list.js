/**
 * Created by godnew on 2017/9/25.
 */
import React, { Component } from 'react';
import Util from '../../util/util'

class List extends Component {
  constructor(props){
    super(props)
    this.state={
      list:[],
      count:'',
    }
  }
  render() {
    this._getLocation()
    return (
      <div>
        <ul>
          {this.state.list.map((item,index)=>{
            // var phone;
            // if(item.tel){
            //   let numb=item.tel.split(';')[0];
            //   let call='tel:'+numb;
            //   phone=(
            //     <div style={styles.phone}>
            //       <a style={styles.call} href={call}>电话</a>
            //     </div>
            //   )
            // }
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
                  <a style={styles.call} href="">电话</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  _getLocation(){
    var that=this;
    window.navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var lnglat=lon+','+lat;
      var url=Util.searchURL + 'key=' + Util.amapKey + '&keywords='+ that.props.type + '&extensions=base'+'&location=' + lnglat;
      alert(url)
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