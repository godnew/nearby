/**
 * Created by godnew on 2017/9/25.
 */
import React, {Component} from 'react';
import Util from '../../util/util'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import * as bankActionsFromOtherFile from '../../actions/bank'
import * as foodActionsFromOtherFile from '../../actions/food'
import * as movieActionsFromOtherFile from '../../actions/movie'
import * as toiletActionsFromOtherFile from '../../actions/toilet'
import * as positionActionsFromOtherFile from '../../actions/position'
import {Map} from 'react-amap';
import Geolocation from '../../components/geo/geo';

const pluginProps = {
    enableHighAccuracy: true,//是否使用高精度定位，默认:true
    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
    zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
}

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            count: '',
            location: {}
        }
    }

    render() {
        return (
            <div>
                <Map amapkey="1e1b1fba21ccd4bdc59283ca2db0df93">
                    <Geolocation {...pluginProps} geoComplete={this.geoComplete.bind(this)}/>
                </Map>
                <ul>
                    {this.state.list.map((item, index) => {
                        var phone;
                        //item.tel 有个大坑全是字符串，突然会出现个空数组
                        if (item.tel && !Array.isArray(item.tel)) {
                            let numb = item.tel.split(';')[0];
                            let call = 'tel:' + numb;
                            phone = call;
                        }
                        return (
                            <li style={styles.list} key={index}>
                                <Link to={'/detail/' + item.id}>
                                    <div style={styles.item}>
                                        <span style={styles.text}>{item.name}</span>
                                        <span style={styles.text}>{item.type}</span>
                                    </div>
                                    <div style={styles.item}>
                                        <span style={styles.text}>{item.distance}米</span>
                                        <span style={styles.text}>{item.address}</span>
                                    </div>
                                </Link>
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

    componentDidMount() {

    }

    _getLocation() {
        var that = this;
        //IOS10以上系统不能使用浏览器定位
        // window.navigator.geolocation.getCurrentPosition(function (position) {
        //     var lat = position.coords.latitude;
        //     var lon = position.coords.longitude;
        //     lat = parseFloat(lat).toFixed(6);
        //     lon = parseFloat(lon).toFixed(6);
        //     var lnglat = lon + ',' + lat;
        //     var transferUrl = Util.transferURL + lnglat + "&key=" + Util.amapKey;
        //     Util.getJSON(transferUrl, (res) => {
        //         that.props.positionActions.update(res.locations);
        //         let url = Util.searchURL + 'key=' + Util.amapKey + '&keywords=' + that.props.type + '&extensions=base&location=' + res.locations;
        //         that._getData(url);
        //     });
        //
        // })

        var lat = this.state.location.lat;
        var lon = this.state.location.lng;
        lat = parseFloat(lat).toFixed(6);
        lon = parseFloat(lon).toFixed(6);
        var lnglat = lon + ',' + lat;
        var locations={
            position:lnglat
        }
        that.props.positionActions.update(lnglat);
        let url = Util.searchURL + 'key=' + Util.amapKey + '&keywords=' + that.props.type + '&extensions=base&location=' + lnglat;
        that._getData(url);
    }

    _getData(url) {
        Util.getJSON(url, (data) => {
            if (data.status && data.info === 'OK') {
                var count = data.pois.length > 10 ? 10 : data.pois.length;
                this.setState({
                    list: data.pois,
                    count: count
                });
                this._addStore(data)
            } else {
                alert('没有查询到相应的数据');
            }
        })
    }

    _addStore(data) {
        var posArr = [];
        var name = []
        var len = data.pois.length > 10 ? 10 : data.pois.length;
        for (var i = 0; i < len; i++) {
            posArr.push(data.pois[i].location);
            if (data.pois[i].name.length > 7) {
                let item = data.pois[i].name.substr(0, 5) + '...';
                name.push(item)
            } else {
                name.push(data.pois[i].name);
            }
        }
        var posStr = posArr.join(',');
        var nameStr = name.join(',');
        var data = {
            pos: posStr,
            name: nameStr
        }
        var type = this.props.type

        if (type === '餐厅') {
            this.props.foodActions.update(data)
        } else if (type === '电影院') {
            this.props.movieActions.update(data)
        } else if (type === '银行') {
            this.props.bankActions.update(data)
        } else if (type === '厕所') {
            this.props.toiletActions.update(data)
        }
    }

    geoComplete(result){
        this.setState({location: result.position})
        this._getLocation()
    }
}

// -------------------redux react 绑定--------------------

function mapDispatchToProps(dispatch) {
    return {
        bankActions: bindActionCreators(bankActionsFromOtherFile, dispatch),
        foodActions: bindActionCreators(foodActionsFromOtherFile, dispatch),
        movieActions: bindActionCreators(movieActionsFromOtherFile, dispatch),
        toiletActions: bindActionCreators(toiletActionsFromOtherFile, dispatch),
        positionActions: bindActionCreators(positionActionsFromOtherFile, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(List)

var styles = {
    list: {
        borderTop: '10px solid #eee',
        padding: '5px 10px'
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: ' 10px 0px',
        color: '#666'
    },
    text: {
        display: 'block',
        width: '50%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        textAlign: 'left'
    },
    phone: {
        lineHeight: '30px',
        border: '1px solid #eee',
        borderRadius: '2px'
    },
    call: {
        display: 'block',
        width: '100%',
        height: '100%'
    }
}