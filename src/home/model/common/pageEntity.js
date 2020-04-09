import { BaseEntity } from './baseEntity';
export class PageEntity extends BaseEntity{
   result={
     total: 0,
     rows:[],
     pageSize:10,
     page:1,
     records:0
   };
   constructor(fromJson,entity){
       super(fromJson);
       if(fromJson){
           let result=fromJson.result;
           if(result){
               this.result.page=result.page||1;
               this.result.pageSize=result.pageSize||10;
               this.result.records=result.records||0;
               this.result.total=result.total||0;
               this.result.rows=super.transformArray(result.rows,entity);
           }
       }
   }
}