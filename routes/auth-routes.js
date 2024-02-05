const router= require ('express').Router();//router est une objet qui contient des methodes pour definir des routes
const passport = require ('passport');
//auth login
router.get ('/login',(req,res)=>{
    res.render('login')});

//auth logout
router.get('/logout',(req,res)=>{
    //handle with passport
    res.send('logging out');
});


//auth with google
//activate google strategy
router .get('/google',passport.authenticate('google',{
    scope:['profile'] //autorisation que l'utilisateur doit donner pour acceder a son profile
}));
module.exports=router;