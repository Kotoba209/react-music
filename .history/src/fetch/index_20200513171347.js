import { fetchApi, fetchJsonp } from './fetch';
import { JSONP_URL, JSONP_PARAMS, JSONP_OPTIONS } from './config';

export default {
  /**
   * @method 获取最新专辑
   * @type jsonp
   * @return json
   */
  getLatestAlbum() {
    let albumlib = {
      method: 'get_album_by_tags',
      param: {
        area: 7,
        company: -1,
        genre: -1,
        type: -1,
        year: -1,
        sort: 2,
        get_tags: 1,
        sin: 0,
        num: 50,
        click_albumid: 0,
      },
      module: 'music.web_album_library',
    };
    let data = Object.assign({}, JSONP_PARAMS, {
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0,
      data: `{
        "albumlib": ${JSON.stringify(albumlib)}
      }`,
    });
    let option = {
      param: 'callback',
      prefix: 'callback',
    };
    return fetchJsonp(JSONP_URL.latestAlbum, option, data);
  },
  /**
   * @method 获取推荐歌单
   * @type jsonp
   * @return json
   */
  getPlayList() {
    let playList = {
      comm: {
        ct: 24,
      },
      recomPlaylist: {
        method: 'get_hot_recommend',
        param: {
          async: 1,
          cmd: 2,
        },
        module: 'playlist.HotRecommendServer',
      },
    };
    let data = Object.assign({}, JSONP_PARAMS, {
      g_tk: 1492455586,
      loginUin: 772528797,
      hostUin: 0,
      platform: 'yqq',
      needNewCode: 0,
      data: JSON.stringify(playList),
    });
    return fetchJsonp(JSONP_URL.playList, {}, data);
  },
};
