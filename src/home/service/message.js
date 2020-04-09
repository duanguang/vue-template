import { get, post, setHeaders } from 'hoolinks/request';
import HttpConf from './../constants/http.conf';
import { BaseEntity } from './../model/common/baseEntity';
import { getCookie } from 'hoolinks/cookie';

// 接口文档地址： http://192.168.200.38:8070/swagger-ui.html#/留言消息管理
let fromSystem = getCookie('from_system') || 'jat'

/**
 * 保存消息
 * @param {Object} params 传入参数
 * @param {String} params - billCode 报关单号
 * @param {String} params - rootOrderNo 订单号
 * @param {String} params - content 消息内容
 * @param {String} params - type 0： 业务消息 1：申报消息
 * @param {Array} params - missingElements 需要保存的元素信息
 * @param {String} ucToken 用户token
 */
export function saveMessage (params, ucToken) {
  let header = setHeaders({ url: `${HttpConf.im}/imservice/savemessage` });
  let options = {
    ...header,
    'api-cookie': `uctoken=${ucToken};from_system=${fromSystem}`,
  }
  return post(HttpConf.gateway, params, options).then((result) => {
    return { data: result.data, code: 200, msg: '' }
  })
}




// 申报要素列表
export function getListAllCustomsElements(params, ucToken) {
  let header = setHeaders({ url: `${HttpConf.im}/imservice/listAllCustomesElements` });
  let options = {
    ...header,
    'api-cookie': `uctoken=${ucToken};from_system=${fromSystem}`,
  }
  return get(HttpConf.gateway, params, options).then((result) => {
    return { data: result.data, code: 200, msg: '' }
  })
}

