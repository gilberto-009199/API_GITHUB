import { Request } from "../../api/request/request.js";
export declare class CollaboratorRequest extends Request {
    findAll(repos: string, owner?: string): Promise<any>;
}
