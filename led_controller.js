var five = require("johnny-five");
var debug = require('debug')('piano-led:LedController');

function LedController (ledPins, callback) {
  var self = this;
  this.board = new five.Board();
  debug('LED array received', ledPins);

  this.board.on("ready", function() {
    debug('ledPins in event handler', ledPins);
    debug('ledPins\'s length', ledPins.length);
    if (ledPins.length != 8)
      callback(new Error('There should be exactly eight LEDs. Number of LEDs passed: ' + ledPins.length));
    else {
      self.leds = new five.Leds(ledPins); // [2,3,4,5,6,7,8,9]
      callback();
    }
  });
}

LedController.prototype.blink = function(which) {
  var delay = 1;
  var self = this;
  this.board.wait(delay, function() {
    debug(which + " on");
    self.leds[which].on();
  })
  this.board.wait(200, function(){
    debug(which + " off")
    self.leds[which].off();
  })
};

LedController.prototype.handleTune = function(tune) {
  switch(tune) {
    case 0:
      debug('Playing tune sa');
      this.blink(0); // sa
      break;
    case 1:
    case 2:
      debug('Playing tune ri');
      this.blink(1); // ri
      break;
    case 3:
    case 4:
      debug('Playing tune ga');
      this.blink(2); // ga
      break;
    case 5:
    case 6:
      debug('Playing tune ma');
      this.blink(3); // ma
      break;
    case 7:
      debug('Playing tune pa');
      this.blink(4); // pa
      break;
    case 8:
    case 9:
      debug('Playing tune da');
      this.blink(5); // da
      break;
    case 10:
    case 11:
      debug('Playing tune ni');
      this.blink(6); // ni
      break;
    case 12:
      debug('Playing tune Sa');
      this.blink(7); // Sa
      break;
    case 13:
    case 14:
      debug('Playing tune ri (upper)');
      this.blink(1); // ri
      break;
    case 15:
    case 16:
      debug('Playing tune ga (upper)');
      this.blink(2); // ga
      break;
    case 17:
    case 18:
      debug('Playing tune ma (upper)');
      this.blink(3); // ma
      break;
    case 19:
      debug('Playing tune pa (upper)');
      this.blink(1); // pa
      break;
  }
};

module.exports = LedController;
