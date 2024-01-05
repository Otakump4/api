_path = process.cwd()

var express = require("express");
var router = express.Router();
var fs = require("fs");

// rota de interface da API 
router.get('/', (req,res) => {
 res.sendFile(__dirname + '/views/docs.html');

})

// aqui a rota de foto
router.get('/foto', async(req, res) => {
 res.json({
   'link': 'https://p4.wallpaperbetter.com/wallpaper/543/512/42/anime-anime-girls-zero-two-darling-in-the-franxx-hd-wallpaper-preview.jpg'
   })
 })

module.exports = router

