"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContributorRequest = void 0;
const owner_enum_js_1 = require("../../api/enum/owner.enum.js");
const request_js_1 = require("../../api/request/request.js");
class ContributorRequest extends request_js_1.Request {
    findAll(repos, owner = null) {
        return this.client("GET /repos/{owner}/{repo}/contributors", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
            repo: repos
        });
    }
    findAllOutSideOrg(owner = null) {
        return this.client("GET /orgs/{owner}/outside_collaborators", {
            owner: owner || (this.ownerEnum == owner_enum_js_1.OwnerEnum.user) ? this.owner : this.org,
        });
    }
}
exports.ContributorRequest = ContributorRequest;
//# sourceMappingURL=contributor.request.js.map