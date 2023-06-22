import { Request } from "../../api/request/request.js";
export declare class CommitRequest extends Request {
    find(repos: string, commit_sha: string, owner?: string): Promise<any>;
    findAll(repos: string, owner?: string): Promise<any>;
}
