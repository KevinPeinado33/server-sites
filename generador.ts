import bycript from 'bcrypt'

const generarPassword = async (passw: string) => {

    const salt = await bycript.genSalt( 10 )

    const passwGen = await bycript.hash( passw, salt )

    console.log([ passwGen ])

}

generarPassword('654321')
