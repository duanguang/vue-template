module.exports={
  '/WF.WebUI':{
    target:'http://192.168.1.81:8080',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('host', '192.168.1.81');
      proxyReq.setHeader('cookie', 'SCB_SESSION_ID=31dbd3bee7554fcd9c073b8bf1f318f9; SESSION_VALIDATE_KEY=MAoIfX06ywjrFnruYVYCYBOqLOidiSFoHp0JSH8cFPHPSkwZf31UbUoT05TgQQ3PDndf6QQ8ACWRfUS69PAcoe+AEPJrfv8fFsV7abRrEvE=');
    }
  },
  '/wf.webui':{
    target:'http://192.168.1.81:8080',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('host', '192.168.1.81');
      proxyReq.setHeader('cookie', 'SCB_SESSION_ID=31dbd3bee7554fcd9c073b8bf1f318f9; SESSION_VALIDATE_KEY=MAoIfX06ywjrFnruYVYCYBOqLOidiSFoHp0JSH8cFPHPSkwZf31UbUoT05TgQQ3PDndf6QQ8ACWRfUS69PAcoe+AEPJrfv8fFsV7abRrEvE=');
    }
  },
  '/Modules':{
    target:'http://192.168.1.81:8080',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('host', '192.168.1.81');
      proxyReq.setHeader('cookie', 'SCB_SESSION_ID=31dbd3bee7554fcd9c073b8bf1f318f9; SESSION_VALIDATE_KEY=MAoIfX06ywjrFnruYVYCYBOqLOidiSFoHp0JSH8cFPHPSkwZf31UbUoT05TgQQ3PDndf6QQ8ACWRfUS69PAcoe+AEPJrfv8fFsV7abRrEvE=');
    }
  },
  '/Content':{
    target:'http://192.168.1.81:8080',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('host', '192.168.1.81');
      proxyReq.setHeader('cookie', 'SCB_SESSION_ID=31dbd3bee7554fcd9c073b8bf1f318f9; SESSION_VALIDATE_KEY=MAoIfX06ywjrFnruYVYCYBOqLOidiSFoHp0JSH8cFPHPSkwZf31UbUoT05TgQQ3PDndf6QQ8ACWRfUS69PAcoe+AEPJrfv8fFsV7abRrEvE=');
    }
  },
  '/Scripts':{
    target:'http://192.168.1.81:8080',
    onProxyReq: (proxyReq, req, res) => {
      proxyReq.setHeader('host', '192.168.1.81');
      proxyReq.setHeader('cookie', 'SCB_SESSION_ID=31dbd3bee7554fcd9c073b8bf1f318f9; SESSION_VALIDATE_KEY=MAoIfX06ywjrFnruYVYCYBOqLOidiSFoHp0JSH8cFPHPSkwZf31UbUoT05TgQQ3PDndf6QQ8ACWRfUS69PAcoe+AEPJrfv8fFsV7abRrEvE=');
    }
  },
}

