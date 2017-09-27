/**
 * Created by godnew on 2017/9/25.
 */
var Util = {
  //post
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
  },

  //get
  getJSON: function(url, callback){
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        callback(JSON.parse(responseText));
      });
  },
  //高德地图key，测试key，请勿商用，后期会清理。申请key请到：http://lbs.amap.com/console/
  amapKey: '677c88b4c836726d3c9a0c3929353cbd',
  //周边搜索服务
  searchURL: 'http://restapi.amap.com/v3/place/around?',

  detailURL: 'http://restapi.amap.com/v3/place/detail?'
};

export default Util;
