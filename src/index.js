import { get as getRequest } from 'request';
import RSSNode from './classes/rssnode';

export default class Podcast2JS {
  constructor() {
    this.jsonObject = new RSSNode();
  }

  /**
   * Parse a podcast RSS file that is located on a remote server.
   * @param {string} url - URL of podcast RSS file.
   * @param {function} callback - Callback function that will be called after it done processing
   *  RSS file.
   * @param {boolean} followRedirect - Indicate whether we want to follow HTTP redirects or not.
   * @param {number} maxRedirects - Maximum number of HTTP redirects we want to follow.
   * @param {string} encoding - Response encoding.
   * @param {number} timeout - Maximum time in milliseconds that we want to wait for server
   *  response.
   */
  parseFromUrl(url, callback, followRedirect = true, maxRedirects = 10, encoding = 'UTF8', timeout = 10000) {
    getRequest({
      uri: url,
      method: 'GET',
      followRedirect,
      maxRedirects,
      encoding,
      timeout,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this._parse(body);
      } else {
        throw Error(error);
      }
    });
  }

  _parse(xmlSource) { }
}
