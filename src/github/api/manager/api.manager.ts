import { Octokit } from "https://esm.sh/@octokit/core";
import { ConfigApi } from "@github/api/config/api.config.js";
import { Request } from "@github/api/request/request.js";
import { OwnerEnum } from "@github/api/enum/owner.enum.js";

type ConstructorRequest<T extends Request> = new (...args: any[]) => T;

export class ManagerApi{

    public octokit: Octokit;
    public owner: string;
    public org: string;
    public ownerEnum: OwnerEnum;

    public static build(config : ConfigApi): ManagerApi{

        let mna = new ManagerApi();

        mna.octokit = new Octokit({auth: config.token})

        mna.ownerEnum = config.ownerEnum;
        mna.owner = config.owner;
        mna.org = config.org;

        return mna;
    }

    public createRequest<T extends Request>(destinationConstructor: ConstructorRequest<T>) : T {

        let instance = new destinationConstructor();

        instance.withClientOctokit(this.octokit)
                .withOwnerEnum(this.ownerEnum)
                .withOwner(this.owner)
                .withOrg(this.org);

        return instance;
    }
}