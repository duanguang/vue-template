import {MapperEntity} from "bg-middle-core/lib/json-mapper-object";

export class BaseEntity{
  success = true;
  message = '';
  hasPermission=false;
  code='';
  data;
  constructor(json){
    if(json&&typeof json==='object'&&json.constructor!==Array){
      this.success = json.success || false;
      this.message=json.message;
      if(json.errorInfos&&json.errorInfos instanceof Array&&json.errorInfos.length>0){
        this.message = json.errorInfos[0].msg;
      }
      this.hasPermission=json.hasPermission||false;
      this.code=json.code;
    }
  }
  transformRows(rows,mapEntity) {
    return (rows || []).map((row)=> {
      return this.transformRow(row,mapEntity);
    })
  }
  transformRow(row,mapEntity){
    return MapperEntity(mapEntity, row);
  }
}

export class ContainerEntity extends BaseEntity{
  constructor(fromService,entity){
    super(fromService);
    if(fromService&&typeof fromService==='object'){
      let data = fromService.data||fromService.result;
      this.data=super.transformRows(data || {},entity);
    }
  }
}
