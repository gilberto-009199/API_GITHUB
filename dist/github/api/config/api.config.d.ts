import { ApiEnum } from "../../api/enum/api.enum.js";
import { OwnerEnum } from "../../api/enum/owner.enum.js";
export declare class ConfigApi {
    api: ApiEnum;
    owner: string;
    org: string;
    ownerEnum: OwnerEnum;
    token: string;
    constructor(values?: any);
}
