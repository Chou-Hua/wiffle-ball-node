const express = require('express');
const playerModel = require('../models/models')
const app = express();


//test
app.get('/',async(req,res) =>{	
	try{
		res.send('Test Render is ok');		
	}catch(err){
		res.status(500).send(err);
	}
});

//getuser
app.get('/player',async(req,res) =>{
	const player = await playerModel.find();	
	console.log(player)
	try{
		res.send(player);		
	}catch(err){
		res.status(500).send(err);
	}
});

//getuser
app.get('/test',async(req,res) =>{
	try{
		res.send('asdasdasd');		
	}catch(err){
		res.status(500).send(err);
	}
});

module.exports = app