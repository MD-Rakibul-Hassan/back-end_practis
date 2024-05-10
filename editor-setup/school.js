const EventEmitter = require('events')



class School extends EventEmitter {
    sartPriod(eventName) {
        console.log('Class started');
        setTimeout(() => {
            this.emit(eventName, {preiod:'first',text:'period ended'})
        },2000)
    }
};

module.exports = School;