"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchRequest = void 0;
const owner_enum_js_1 = require("../../api/enum/owner.enum.js");
const request_js_1 = require("../../api/request/request.js");
class BranchRequest extends request_js_1.Request {
    find(repos, branch, owner = null) {
        return this.client("GET /repos/{owner}/{repo}/branches/{branch}", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos,
            branch
        });
    }
    findAll(repos, owner = null) {
        return this.client("GET /repos/{owner}/{repo}/branches", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos
        });
    }
}
exports.BranchRequest = BranchRequest;
//# sourceMappingURL=branch.request.js.map