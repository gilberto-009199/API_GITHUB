"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitRequest = void 0;
const owner_enum_js_1 = require("../../api/enum/owner.enum.js");
const request_js_1 = require("../../api/request/request.js");
class CommitRequest extends request_js_1.Request {
    find(repos, commit_sha, owner = null) {
        return this.client("GET /repos/{owner}/{repo}/git/commits/{sha}", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos,
            sha: commit_sha
        });
    }
    findAll(repos, owner = null) {
        return this.client("GET /repos/{owner}/{repo}/commits", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos
        });
    }
}
exports.CommitRequest = CommitRequest;
//# sourceMappingURL=commits.request.js.map