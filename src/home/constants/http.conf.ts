import HttpConfQa from './http.conf.qa';
import HttpConfUat from './http.conf.uat';
import HttpConfProd from './http.conf.prod';

let HttpConf = HttpConfQa;
let env = process.env.environment;

switch (env) {
  case 'dist':
    HttpConf = HttpConfUat;
    break;
  case 'production':
    HttpConf = HttpConfProd;
    break;
  case 'test':
    HttpConf = HttpConfQa;
    break;  
  default:
    console.log('unkonw environment type');
    HttpConf = HttpConfQa;
    break;
}

export default HttpConf;