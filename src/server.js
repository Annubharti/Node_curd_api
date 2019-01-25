import Hapi from 'hapi';
import Knex from './knex';

const server = new Hapi.Server();

server.connection( {
    port: 3000
} );

server.register( require( 'hapi-auth-jwt' ), ( err ) => {
    server.auth.strategy( 'token', 'jwt', {

        key: 'vZiYpmTzqXMp8PpYXKwqc9ShQ1UhyAfy',

        verifyOptions: {
            algorithms: [ 'HS256' ],
        }

    } );

} );


server.route( {

    path: '/custumer',
    method: 'GET',
    handler: ( request, reply ) => {

        const getOperation = Knex( 'custumer' ).where( {

            isAvailable: true

        } ).select( 'name', 'category', 'price' ).then( ( results ) => {

            // The second one is just a redundant check, but let's be sure of everything.
            if( !results || results.length === 0 ) {

                reply( {

                    error: true,
                    errMessage: 'no product found',

                } );

            }

            reply( {

                dataCount: results.length,
                data: results,

            } );

        } ).catch( ( err ) => {

            reply( 'server-side error' );

        } );

    }

} );

server.start( err => {

    if( err ) {

        // Fancy error handling here
        console.error( 'Error was handled!' );
        console.error( err );

    }

    console.log( `Server started at ${ server.info.uri }` );

} );
