import { ConfigApi } from "../../github/api/config/api.config.js";
import { ManagerApi } from "../../github/api/manager/api.manager.js";
import { ConfigSource } from "../config/source.config.js";
export declare class ManagerSource {
    api: ManagerApi;
    static build(config: ConfigSource): ManagerSource;
    withConfigApi(api: ConfigApi): ManagerSource;
    withApi(api: ManagerApi): ManagerSource;
}
