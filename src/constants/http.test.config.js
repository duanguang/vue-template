import {isProcessDev} from "./config";
import { CookieUtil } from 'bgood-widget/lib/utils';
const GateWay='http://192.168.1.181:7052'
export const HttpConfigTest = {
    domainGateWay:isProcessDev()?`${GateWay}`:`${GateWay}`,//网关地址
    domainExport:isProcessDev()?'' : '',//导出地址
    domainWorkFlow:isProcessDev()?'':'http://fgtest.banggood.cn',//工作流
    domainUeditor:'http://transfer.banggood.cn:8088/client/ueditor-1.4.3.3/',
    defaultOption:{
      processData: false,
      dataType: 'json',
      contentType: 'application/json',
      'api-cookie':isProcessDev()?'Authorization="Bearer AT-558-MXYvwSg_poIsdXhKEPHOO08DW8ysMSJp"':CookieUtil.getCookie()
    },
  }