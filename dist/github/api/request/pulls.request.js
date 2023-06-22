"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullRequest = void 0;
const owner_enum_js_1 = require("../../api/enum/owner.enum.js");
const request_js_1 = require("../../api/request/request.js");
class PullRequest extends request_js_1.Request {
    findAll(repos, owner = null) {
        return this.client("GET /repos/{owner}/{repo}/pulls", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos
        });
    }
}
exports.PullRequest = PullRequest;
//# sourceMappingURL=pulls.request.js.map