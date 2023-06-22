import { Request } from "../../api/request/request.js";
export declare class ContributorRequest extends Request {
    findAll(repos: string, owner?: string): Promise<any>;
    findAllOutSideOrg(owner?: string): Promise<any>;
}
