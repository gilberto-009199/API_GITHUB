import { Request } from "../../api/request/request.js";
export declare class BranchRequest extends Request {
    find(repos: string, branch: string, owner?: string): Promise<any>;
    findAll(repos: string, owner?: string): Promise<any>;
}
