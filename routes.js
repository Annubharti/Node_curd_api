const knex = require("./knex");
const routes=[
  {
      method: 'GET',
    //   creating 
      path: '/{ramu}',
      handler: (request, h) => {

          return `Hello, ${request.params.ramu}!`;
      }
  }, 
  {
      method: 'GET',
      path: '/hello',
      handler: (request, h) => {

          return h.file('./public/hello.html');
      }
  },
  {
      method: 'GET',
      path:'/getting',
      handler:async(request,h)=>{
        let pr = (resolve,reject) => {
            knex("customer").select("name","username","email"),
            knex("product").select("name","category","isAvailable","price")
        

                .then((result)=>{
                    return resolve(h.response(result));
                })
                .catch((error)=>{
                    //3console.log(error);
                    return reject(h.response(error));
                });
        }
            return new Promise(pr);
        }
    },
    {
    method: 'POST',
    // retrive
    path: '/posting',
    handler: async(request,h) =>{
        let hr = (resolve,reject) => {
            return knex.insert({
                name: request.payload.name,
                username: request.payload.username,
                email: request.payload.email,
                product: request.payload.product,
                password: request.payload.password
            }).into( "customer" ).then((result)=>{
                return resolve(h.response(request.payload));
            })
            .catch((error) =>{
                return reject(h.response(error));
            });
            
        }
        return new Promise(hr);

        }
    },
    {
        method:'PUT',
        // updating
        path: '/putting/{userid}',
        handler:async(request,h) =>{
            const {userid}= request.params;

            let hr = (resolve,reject) => {

                return knex('customer').where({
                    name: request.payload.name,
                    username: request.payload.username,
                    email: request.payload.email,
                    product: request.payload.product,
                    password: request.payload.password
                }).then((result)=> {
                    return resolve(h.response(request.payload));
                })
                .catch((error) => {
                    return reject(h.response(error));
                });
                
            }
            return new Promise(hr);



        }
    },
    {
        method:'DELETE',
        // deleting
        path: '/deleting/{id}',
    
        handler:async(request,h) =>{
            const {id} = request.params;
            let hr = (resolve,reject) =>{
                return knex("customer").where({
                   id:id 
                }).delete({
                    id:id
                }).then((result) => {
                    console.log(request.params);
                    return resolve(h.response(request.params));
                    } )
                  .catch((error) => {
                        return reject(h.response(error));
                    });
                    
                }
                return new Promise(hr);
    
            }
        }
            


       
]
module.exports = routes
          