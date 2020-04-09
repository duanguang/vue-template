import { get, post, setHeaders } from 'hoolinks/request';
import { MockContainerEntity } from '../model/mockEntity';
import { MockPageListEntity } from '../model/mockListEntity';

export function getMockData(){
   return new Promise((resolve)=>{
    let info=new MockContainerEntity({msg:'查询成功',ok:true,status:'',data:{id:1,companyId:2,loginId:3,user:{
      name:'mock数据',
      age:22
    }}});
    setTimeout(()=>{
      resolve(info)
    },5000)

  })
}
export function getMockListData(){
  return new Promise((resolve)=>{
    let data=[{id:1,companyId:2,loginId:3,name:'mock数据'}]
    let list = new MockPageListEntity({msg:'查询成功',ok:true,status:'',data})
    setTimeout(()=>{
      resolve(list)
    },2000)
  })
}

