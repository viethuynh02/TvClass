class Tv {
    constructor (){
        this.channel = 1;
        this.vollume = 30;
        this.status = false;
    }

    changeStatus (){
        if (this.status = false) {
            this.status = true;
        }else {
            this.status = false;
        }
    }
    getStatus (){
        return this.status;
    }

    changeChannel (channel){
        this.channel = channel;
    }
    getChannel () {
        return this.channel;
    }

    changeVollume (vollume){
        this.vollume = vollume;
    }
    getVollume (){
        return this.vollume;
    }
}