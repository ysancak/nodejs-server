const http = require('http');

class __RQST {
  constructor(req,res) {
    this.req = req;
    this.res = res;
  }

  handle(type, url, func){
    if (this.req.method === type && this.req.url === url) {
      func();
    }else {
      this.res.statusCode = 404;
      this.res.end();
    }
  }

  response(response){
    this.res.writeHead(response.code, {'Content-Type': 'application/json'});
    this.res.end(response.message);
  }
}

const server = http.createServer((req, res) => {

  let RQST = new __RQST(req,res);

  RQST.handle('GET', '/api/get', () => {
    RQST.response({
      code: 200,
      message: 'Success'
    });
  })

  RQST.handle('POST', '/api/post', () => {
    RQST.response({
      code: 200,
      message: 'Posted'
    });
  })

  RQST.handle('PUT', '/api/put', () => {
    RQST.response({
      code: 200,
      message: 'Success'
    });
  })

  RQST.handle('DELETE', '/api/delete', () => {
    RQST.response({
      code: 200,
      message: 'Deleted'
    });
  })

  res.end();
});

server.listen(3000, () => {
 console.log('SERVER_RUNNING');
});
