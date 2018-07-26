import {JsonProperty} from "bg-middle-core/lib/json-mapper-object";
export class ButtonEntity{
  @JsonProperty("method")
  method=void 0

  @JsonProperty("moduleType")
  moduleType=void 0

  @JsonProperty("display")
  display=void 0
}
