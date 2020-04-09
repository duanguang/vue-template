module.exports={
  '/qa':{
    target:'http://192.168.200.38:8060',
    onProxyReq: (proxyReq, req, res) => {
      // proxyReq.setHeader('host', '192.168.1.81');
      // proxyReq.setHeader('cookie', '');
    }
  },
}

