
const express = require('express');
const passportSetup = require('./config/passport-setup');
const app = express();
const authRoutes = require ('./routes/auth-routes');
//EJS comme moteur de modèle par défaut ajouter de js dans html

app.set('view engine', 'ejs');

//regler les routes
app.use('/auth',authRoutes);//il afficher dans le browser comme auth/google ou autre










// create home route

//creat home route  loursque utulisateur accede a la page  localhost home / cette fonction sera mise pour rendre vue home 
app.get('/', (req, res) => {
    res.render('home');//home doit etre une ejs 
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});