import { ConfigApi } from "../../github/api/config/api.config.js";
import { SourceEnum } from "../enum/source.enum.js";
export declare class ConfigSource {
    source: SourceEnum;
    host: string;
    token: string;
    api: ConfigApi;
    properties: Map<string, string>;
    constructor(values?: any);
}
