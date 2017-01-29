const Hapi = require('hapi');
const mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'milestyle'
});
connection.connect();
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000 ,
    routes: {
            cors: true
        }
});
server.route({
  method: 'GET' ,
  path : '/',
  handler : function(request , reply){
     reply('Hello world')
  }
})
server.route({
  method: 'GET' ,
  path : '/api/activities/province/{pv}',
  handler : function(request, reply){
      var pv = encodeURIComponent(request.params.pv)
      connection.query('select * from tbl_activity where province = ?' , [pv] , function(err , results , feild){
        if(err){
          throw(err)
        }
        reply(results)
      })
  }
})

server.route({
  method: 'GET' ,
  path : '/api/activities/name/like/{name}',
  handler : function(request , reply){
    var names = encodeURIComponent(request.params.name)
    connection.query('select * from tbl_activity where name like ?' , ['%'+names+'%'] , function(err , results , field){
      if(err){
        throw(err)
      }
      reply(results)
    })

  }
})

server.route({
  method: 'GET' ,
  path : '/api/activities/name/{name}',
  handler : function(request , reply){
    var names = encodeURIComponent(request.params.name)
    connection.query('select * from tbl_activity where name = ?' , [names] , function(err , results , field){
      if(err){
        throw(err)
      }
      reply(results)
    })

  }
})

server.route({
  method: 'GET' ,
  path : '/api/activities/id/{id}',
  handler : function(request , reply){
    var id = encodeURIComponent(request.params.id)
    connection.query('select * from tbl_activity where id = ?' , [id] , function(err , results , field){
      if(err){
        throw(err)
      }
      reply(results)
    })

  }
})


server.route({
    method: 'GET',
    path: '/activities/all',
    handler : function(request , reply){
      reply('All activities')
    }
})

server.start((err) => {
  if(err){
    throw(err)
  }
  console.log("Running API SERVER on port 8000")
});
