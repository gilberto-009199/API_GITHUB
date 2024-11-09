import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class CommitRequest extends Request{

    public find( repos: string, commit_sha: string, owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/git/commits/{sha}", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos,
            sha: commit_sha
        }).then(res => res.data);
    }

    public findAll( repos: string , owner: string  = null ):Promise<any>{
        return this.client("GET /repos/{owner}/{repo}/commits", {
            owner: owner || (this.ownerEnum == OwnerEnum.user)?this.owner: this.org,
            repo: repos
        }).then(res => res.data);
    }
}