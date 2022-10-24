import passport from 'passport'
import passportGoogle from 'passport-google-oauth2'

const GoogleStrategy = passportGoogle.Strategy

const GOOGLE_CLIENT_ID = '680779637496-cgdika354ckih74q7khmrpq9so5jo9ug.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '680779637496-cgdika354ckih74q7khmrpq9so5jo9ug.apps.googleusercontent.com'

passport.use( new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/api/auth/google/callback"
  },
  (accessToken, refreshToken, profile) => {
    
    /**
     * TODO 
     * implementar logica para la administracion de usuario
     * recordar que habra una whitelist para validar si el correo
     * que acaba de iniciar sesion se encuentra en los permitidos
     */
    console.log({ profile, accessToken, refreshToken })

  }
))

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    console.log({ user, done })
})