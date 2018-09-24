import { ChannelNode } from './channelnode';

class RSSNode {
    constructor() {
        this.version = null;
        this.channel = new ChannelNode();
    }
}