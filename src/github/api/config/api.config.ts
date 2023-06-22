import { ApiEnum } from "@github/api/enum/api.enum.js";
import { OwnerEnum } from "@github/api/enum/owner.enum.js";

export class ConfigApi{

    api!: ApiEnum;
    owner!: string;
    org: string;
    ownerEnum!: OwnerEnum;
    // Get Token - https://github.com/settings/tokens/new?scopes=repo
    token!: string;

    constructor(values: any = {}){
        if (Object.keys(values).length === 0 && values.constructor === Object) {
            return;
          }
          Object.assign(this, values);
    }
}