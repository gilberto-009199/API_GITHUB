import { Octokit } from "@octokit/core";
import { OwnerEnum } from "@github/api/enum/owner.enum.js";

export class Request{

    protected header: { 'X-GitHub-Api-Version': '2022-11-28' };
    protected org: string;

    constructor( protected clientOctokit: Octokit, 
                 protected owner : string,
                 protected ownerEnum: OwnerEnum){}

    public fetch(...args):Promise<any>{
        return this.client("GET /{origin}/{owner}/{resource}", {
            origin: args[0] || this.ownerEnum,
            owner: args[1] || this.owner,
            resource: args[2]
        });
    }

    public client(route: string, options : any = {}): Promise<any>{
        let data = {... options};
        data.headers = this.header;
        return this.clientOctokit.request(route, data);
    }

    public withClientOctokit(clientOctokit: Octokit): Request{
        this.clientOctokit = clientOctokit;
        return this;
    }
    
    public withOwner(owner : string): Request{
        this.owner = owner;
        return this;
    }

    public withOwnerEnum(ownerEnum: OwnerEnum): Request{
        this.ownerEnum = ownerEnum;
        return this;
    }

    public withOrg(org: string): Request{
        this.org = org;
        return this;
    }
    
}