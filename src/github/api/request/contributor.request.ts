import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class ContributorRequest extends Request{

    public findAll( repos: string , owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/contributors", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos
        }).then(res => res.data);
    }

    public findAllOutSideOrg( owner: string  = null ):Promise<any>{
        return this.client("GET /orgs/{owner}/outside_collaborators", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
        }).then(res => res.data);
    }

}