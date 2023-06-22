"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerApi = void 0;
const core_1 = require("../../../../node_modules/@octokit/core");
class ManagerApi {
    static build(config) {
        let mna = new ManagerApi();
        mna.octokit = new core_1.Octokit({ auth: config.token });
        mna.ownerEnum = config.ownerEnum;
        mna.owner = config.owner;
        mna.org = config.org;
        return mna;
    }
    createRequest(destinationConstructor) {
        let instance = new destinationConstructor();
        instance.withClientOctokit(this.octokit)
            .withOwnerEnum(this.ownerEnum)
            .withOwner(this.owner)
            .withOrg(this.org);
        return instance;
    }
}
exports.ManagerApi = ManagerApi;
//# sourceMappingURL=api.manager.js.map