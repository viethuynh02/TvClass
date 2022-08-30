class Remote {
    constructor(id) {
        this.id = id;
    }
    changeChannel(tv, channel) {
        tv.changeChannel(channel);
    }
    changeVolume (tv, vollume) {
        tv.changeVolume(vollume)
    }
}