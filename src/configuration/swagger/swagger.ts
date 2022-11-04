export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Apis for SITES UPeU',
            version: '1.0.0'
        }
    },
    apis: [ 
        'src/modules/user/infraestructure/router/documentation/auth.documentation.ts',
        'src/modules/user/infraestructure/router/documentation/user.documentation.ts',
        'src/modules/academic/infraestructure/router/documentation/academic.documentation.ts',
    ]
}