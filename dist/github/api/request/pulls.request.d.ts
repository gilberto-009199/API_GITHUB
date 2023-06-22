import { Request } from "../../api/request/request.js";
export declare class PullRequest extends Request {
    findAll(repos: string, owner?: string): Promise<any>;
}
