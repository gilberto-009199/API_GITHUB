import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class BranchRequest extends Request{

    public find( repos: string, branch: string, owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/branches/{branch}", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos,
            branch
        }).then(res => res.data);
    }
    
    public findAll( repos: string , owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/branches", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos
        }).then(res => res.data);
    }
}