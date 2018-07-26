import {JsonProperty, MapperEntity} from "bg-middle-core/lib/json-mapper-object";
export class PageEntity {
  row = [];
  total = 0;
  success = true;
  message = '';
  page = 1;
  pageSize = 10;
  records = 0;
  constructor(json) {
    if (json) {
      let data = json.data||json.result;
      let errorInfos=json.errorInfos||json.error_infos
      this.success = json.success|| false;
      this.message=json.message;
      if(errorInfos&&errorInfos instanceof Array&&errorInfos.length>0){
        this.message = errorInfos[0].msg;
      }
      if(data){
        this.page = data.page || 1;
        this.pageSize = data.pageSize || 10;
        this.records = data.records ||data.total|| 0;
        this.total = data.total || 0;
      }
    }
  }

  transformRows(rows,mapEntity) {
    return (rows || []).map((row)=> {
      return MapperEntity(mapEntity, row);
    })
  }
  transformRowsId(rows,mapEntity,page) {
    return (rows || []).map((row,index)=> {
      row.id=index+''+page;
      return MapperEntity(mapEntity, row);
    })
  }
  transformFlatRow(rows,mapEntity){
    return (rows || []).map((row)=> {
      let obj={};
      Object.keys(row).forEach((key)=>{
        obj=Object.assign(obj,row[key])
      })
      return MapperEntity(mapEntity, obj);
    })
  }
  tranPureObject(rows,protoObject){
    if (rows && rows.constructor === Array) {
      return rows.map((item) => {
        if (item instanceof protoObject) {
          return item;
        }
      })
    }
    return [];
  }
}
