"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
class Request {
    constructor(clientOctokit, owner, ownerEnum) {
        this.clientOctokit = clientOctokit;
        this.owner = owner;
        this.ownerEnum = ownerEnum;
    }
    fetch(...args) {
        return this.client("GET /{origin}/{owner}/{resource}", {
            origin: args[0] || this.ownerEnum,
            owner: args[1] || this.owner,
            resource: args[2]
        });
    }
    client(route, options = {}) {
        let data = Object.assign({}, options);
        data.headers = this.header;
        return this.clientOctokit.request(route, data);
    }
    withClientOctokit(clientOctokit) {
        this.clientOctokit = clientOctokit;
        return this;
    }
    withOwner(owner) {
        this.owner = owner;
        return this;
    }
    withOwnerEnum(ownerEnum) {
        this.ownerEnum = ownerEnum;
        return this;
    }
    withOrg(org) {
        this.org = org;
        return this;
    }
}
exports.Request = Request;
//# sourceMappingURL=request.js.map