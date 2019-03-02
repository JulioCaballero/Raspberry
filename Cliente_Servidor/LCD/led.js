const Raspi = require('raspi-io').RaspiIO;
const five = require('johnny-five');
const board = new five.Board({
  io: new Raspi()
});

board.on('ready', () => {
  	var lcd = new five.LCD({
//		controller: "HD44780",
		//pins: ["P1-7", "P1-11", "P1-12", "P1-13", "P1-16", "P1-15"]
		//pins: ["GPIO2", "GPIO3", "GPIO13", "GPIO6", "GPIO5", "GPIO11"],
    	//	rows: 2,
    	//	cols: 16
		controller: "JHD1313M1"
	});


//	lcd.bgColor(r, g, b).cursor(0, 0).print(f);

 //lcd.print("Hello");
 lcd.off();
 lcd.on();
 lcd.print("hello");
});
