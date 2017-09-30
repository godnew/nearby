/**
 * Created by godnew on 2017/9/29.
 */
import React, {Component} from 'react';
import {hashHistory} from 'react-router'
import Header from '../../components/header/header'
import ReactSwipe from 'react-swipe'
import Util from '../../util/util'
import './detail.css'
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      index:0
    }
  }

  render() {
    var items;
    var len = 0;
    var buf=[];
    var that=this;
    var all;
    if (this.state.detail.pois) {
      all=this.state.detail.pois[0]
      if (this.state.detail.pois[0].photos) {
        len = this.state.detail.pois[0].photos.length
        for(let i=0;i<len;i++){
          buf.push(1)
        }
        items = this.state.detail.pois[0].photos.map((item, index) => {
          return (
            <div style={styles.swipeItem} key={index}>
              <img src={item.url} alt="" style={styles.img}/>
            </div>
          )
        })
      }
    }
    console.log(all)
    const opt = {
      callback: function (index) {
        // 更新当前轮播图的index
        this.setState({index: index});
      }.bind(this)
    }
    return (
      <div>
        <Header title="详情" left={true} leftClick={this.goBack.bind(this)}/>
        <div style={styles.container}>
          <div style={styles.swipeWrap}>
            <ReactSwipe key={len} swipeOptions={opt}>
              {items}
            </ReactSwipe>
            <div style={styles.indexContainer}>
              <ul style={styles.ul}>
                {
                  buf.map((item,index)=>{
                    return (
                      <li key={index} style={styles.li} className={that.state.index === index ? "selected" : ''}></li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <ul style={styles.detail}>
            { all?
              <li>
                <div style={[{textAlign:'center',fontSize:'15px'},styles.flex1]}>{all.name}</div>
              </li>
              :null
            }
            {
              all?
                <li style={styles.detailItem}>
                  <div style={styles.flex1}>地址：</div>
                  <div style={styles.flex9}>{all.pname}{all.cityname}{all.adname}{all.business_area}{all.address}</div>
                </li>
                :null
            }
            {
              all?
                <li style={styles.detailItem}>
                  <div style={styles.flex1}>类型：</div>
                  <div style={styles.flex9}>{all.type}</div>
                </li>
                :null
            }
            {
              all?
                (all.tel.length?
                  <li style={styles.detailItem}>
                    <div style={styles.flex1}>电话：</div>
                    <div style={styles.flex9}>{all.tel}</div>
                  </li>
                    :null
                )
                :null
            }
            {
              all?
                (all.biz_ext.rating.length?
                    <li style={styles.detailItem}>
                      <div style={styles.flex1}>评分：</div>
                      <div style={styles.flex9}>{all.biz_ext.rating}分</div>
                    </li>
                    :null
                )
                :null
            }
            {
              all?
                (all.biz_ext.cost.length?
                    <li style={styles.detailItem}>
                      <div style={styles.flex1}>人均：</div>
                      <div style={styles.flex9}>{all.biz_ext.cost}元</div>
                    </li>
                    :null
                )
                :null
            }
            {
              all?
                (all.biz_ext.rating.length?
                    <li style={styles.detailItem}>
                      <div style={styles.flex1}>营业：</div>
                      <div style={styles.flex9}>{all.biz_ext.open_time}</div>
                    </li>
                    :null
                )
                :null
            }
          </ul>
        </div>
      </div>
    );
  }

  goBack() {
    hashHistory.goBack()
  }

  componentWillMount() {
    let url = Util.detailURL + 'key=' + Util.amapKey + '&id=' + this.props.params.id;
    Util.getJSON(url, (res) => {
      this.setState({
        detail: res
      })
    })
  }
}

export default Detail;

var styles = {
  container: {
    paddingTop: '40px'
  },
  swipeWrap: {
    position: 'relative'
  },
  swipe: {},
  swipeItem: {
    height: '300px'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  indexContainer: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '10px'
  },
  ul: {
    width: '100%',
    height: 'auto',
    textAlign: 'center'
  },
  li: {
    listStyle: 'none',
    display: 'inline-block',
    height: '8px',
    width: '8px',
    borderRadius: '4px',
    backgroundColor: '#ccc',
    margin: '0 3px',
  },
  detail:{
    padding:'10px',
    paddingTop:'15px'
  },
  detailItem:{
    width:'100%',
    marginTop:'10px',
    display:'flex',
    height:'auto',
    alignItems:'center'
  },
  flex1:{
    width:'15%',
    height:'auto',
    color:'#888',
    fontSize:'14px'
  },
  flex9:{
    width:'85%',
    height:'auto',
    textAlign:'left',
    color:"#666",
    fontSize:'14px'
  }
}