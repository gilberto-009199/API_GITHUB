import { ConfigApi } from "@github/api/config/api.config.js";


import { ManagerApi } from "@github/api/manager/api.manager.js";
import { SourceEnum } from "@core/enum/source.enum.js";
import { ConfigSource } from "@core/config/source.config.js";


export class ManagerSource{
    
    public api: ManagerApi;

    public static build( config: ConfigSource ):ManagerSource{
        let mns = new ManagerSource();

        if( config.source == SourceEnum.GITHUB )mns.withConfigApi(config.api);
        
        return mns;
    }

    public withConfigApi(api: ConfigApi ): ManagerSource {  return this.withApi(ManagerApi.build(api)); }
    public withApi(api: ManagerApi ): ManagerSource {
        this.api = api;
        return this;
    }
    
}