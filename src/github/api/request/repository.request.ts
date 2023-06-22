import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class RepositoryRequest extends Request{

    public findAll( owner: any  = false ):Promise<any>{
        return this.client("GET /{origin}/{owner}/repos", {
            origin: (this.ownerEnum == OwnerEnum.user)?'users':'orgs',
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org
        }).then(res=>res.data);
    }

    public findProfileCommunityByRepository( repos: string, owner: any  = false ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/community/profile", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos
        }).then(res=>res.data);
    }

}