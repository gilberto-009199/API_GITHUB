"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryRequest = void 0;
const owner_enum_js_1 = require("../../api/enum/owner.enum.js");
const request_js_1 = require("../../api/request/request.js");
class RepositoryRequest extends request_js_1.Request {
    findAll(owner = false) {
        return this.client("GET /{origin}/{owner}/repos", {
            origin: (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? 'users' : 'orgs',
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org
        }).then(res => res.data);
    }
    findProfileCommunityByRepository(repos, owner = false) {
        return this.client("GET /repos/{owner}/{repo}/community/profile", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos
        }).then(res => res.data);
    }
}
exports.RepositoryRequest = RepositoryRequest;
//# sourceMappingURL=repository.request.js.map