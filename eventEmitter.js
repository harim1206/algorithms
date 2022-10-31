// const EventEmitter = {
//   events: {},
//   subscribe: function(eventName, callback) {
//     if (!this.events[eventName]) {
//       this.events[eventName] = [callback]
//     } else {
//       this.events[eventName].push(callback)
//     }
//   },
//   emit: function(eventName, ...args) {
//     if( !this.events[eventName] ) {
//       throw new Error(`${eventName} does not exist!`)
//     } else {
//       this.events[eventName].forEach( cb => {
//         cb.apply(null,args)
//       }) //array of callbacks
//     }
//   }
// }
// please complete the implementation
class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    const events = this.events;
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }

    return {
      release: function () {
        console.log('eventName: ', eventName);
        console.log('callback: ', callback);
        console.log('events: ', events);
        events[eventName] = events[eventName].filter((cb) => cb !== callback);
      },
    };
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      throw new Error(`${eventName} does not exist!`);
    } else {
      this.events[eventName].forEach((cb) => {
        cb.apply(null, args);
      }); //array of callbacks
    }
  }
}

function callback1(arg) {
  console.log(arg);
}

function callback2(arg) {
  console.log(`hello ${arg}`);
}

// const emitter = Object.create(EventEmitter)
const emitter = new EventEmitter();
const sub1 = emitter.subscribe('event1', callback1);
const sub2 = emitter.subscribe('event2', callback2);
console.log('sub1: ', sub1);
sub1.release();
