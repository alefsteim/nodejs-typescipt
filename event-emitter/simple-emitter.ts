
import * as EventEmitter from 'events';


export default function testEmitter() {
    const eventEmitter = new EventEmitter();

    eventEmitter.on('event', function () {
        console.log('one');
    });
    eventEmitter.on('event', function () {
        console.log('two');
    });
    eventEmitter.on('event', function () {
        console.log('three');
    });

    eventEmitter.emit('event');
}

