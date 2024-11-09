import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class IssueRequest extends Request{

    public findAll( repos: string , owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/issues", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos
        }).then(res=> res.data);
    }
}