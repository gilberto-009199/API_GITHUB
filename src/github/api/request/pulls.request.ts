import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class PullRequest extends Request{
    
    public findAll( repos: string , owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/pulls", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos
        }).then(res=> res.data);
    }
}