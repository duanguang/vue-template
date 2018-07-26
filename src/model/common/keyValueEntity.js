import {JsonProperty} from "bg-middle-core/lib/json-mapper-object/index";
export class KeyValueEntity{
  @JsonProperty('value')
  value=void 0;

  @JsonProperty("text")
  name=void 0
}
