import { ConfigApi } from "@github/api/config/api.config.js";
import { SourceEnum } from "@core/enum/source.enum.js";

export class ConfigSource{

    source: SourceEnum;
    host: string;
    token: string;
    api:ConfigApi;
    
    properties: Map<string,string>;

    constructor(values: any = {}){
        if (Object.keys(values).length === 0 && values.constructor === Object) {
            return;
          }
          Object.assign(this, values);
    }
}