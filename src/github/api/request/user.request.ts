import { OwnerEnum } from "@github/api/enum/owner.enum.js";
import { Request } from "@github/api/request/request.js";

export class UserRequest extends Request{

    public findById( userId: string ):Promise<any>{
        return this.client("GET /user/{userId}", {
            userId
        }).then(res=> res.data);
    }

    public findByUserName( username: string ):Promise<any>{
        return this.client("GET /users/{username}", {
            username
        }).then(res=> res.data);
    }
}