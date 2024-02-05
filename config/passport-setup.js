const passport = require ('passport ');
const GoogleStrategy = require ('passport-google-oauth20');
passport .use(new GoogleStrategy({
    // options for the google strategy
    //api
    callbackURL:'/auth/google/redirect',
    clientID:' 1072469610420-5k1f9f6q4m4j2m6h4h9t2b4d2e5.apps.googleusercontent.com',
    clientSecret:'B2p6V2l4f6L2k9A4t6M5G9b4'
    //passport callback function

},()=>{
console.log('on fire')    
})
);