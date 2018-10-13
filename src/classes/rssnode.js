import ChannelNode from './channelnode';

export default class RSSNode {
  constructor() {
    this.version = null;
    this.channel = new ChannelNode();
  }
}
