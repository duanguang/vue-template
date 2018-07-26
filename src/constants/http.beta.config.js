
import {isProcessDev} from "./config";
import { CookieUtil } from 'bgood-widget/lib/utils';
const GateWay='https://proxy-gateway.banggood.cn'
export const HttpConfigBeta = {
  domainGateWay:isProcessDev()?`${GateWay}`:`${GateWay}`,//网关地址
  domainExport:isProcessDev()?'' : '',//导出接口
  domainWorkFlow:isProcessDev()?'':'https://erpv2.banggood.cn',//工作流
  domainUeditor:`${GateWay}/public/finance/ueditor-1.4.3.3/`,
  defaultOption:{
    processData: false,
    dataType: 'json',
    contentType: 'application/json',
    'api-cookie':isProcessDev()?'':CookieUtil.getCookie()
  },
}