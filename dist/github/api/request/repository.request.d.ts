import { Request } from "../../api/request/request.js";
export declare class RepositoryRequest extends Request {
    findAll(owner?: any): Promise<any>;
    findProfileCommunityByRepository(repos: string, owner?: any): Promise<any>;
}
