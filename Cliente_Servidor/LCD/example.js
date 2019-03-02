var five = require("johnny-five");
var raspi = require('raspi-io').RaspiIO;

var board = new five.Board({
    io: new raspi(),
//	port: "/dev/ttyUSB0"
});

board.on("ready", function() {
  // Plug the LCD module into any of the
  // Grove Shield's I2C jacks.
  var lcd = new five.LCD({
    	controller: "JHD1313M1",
//	controller: "HD44780",
//	controller: "PCF8574T",
	address: 0x27,
//	bus: 2, 
//        rows: 2, 
//        cols: 16
  });
	lcd.clear();
	 lcd.print("l");

	 
  setTimeout(function() {
    process.exit(0);
  }, 3000);

 //  lcd.cursor(1, 0).print("?");
 	

	
});
