const mongoose = require('mongoose');
const playerSchema = new mongoose.Schema({
	team: {
		type: String,
		default: "自由球員"		
	},
	name:{
		type: String,
		default: ''	
	},
	number:{
		type: String,
		default: '0'
    },
	hit:{
		type: String,
		default: '0'	
	},	
	hitP:{
		type: String,
		default: '0'		
	},
    beConveyed:{
		type: String,
		default: '0'		
	},
    homeRun:{
		type: String,
		default: '0'		
	},
    strikeOut:{
		type: String,
		default: '0'		
	},
    conveyed:{
		type: String,
		default: '0'		
	}	
});
const player = mongoose.model('player',playerSchema,'player'); //後面要加collection的名字
module.exports =  player;
