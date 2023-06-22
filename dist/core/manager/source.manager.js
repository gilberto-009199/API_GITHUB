"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerSource = void 0;
const api_manager_js_1 = require("../../github/api/manager/api.manager.js");
const source_enum_js_1 = require("../enum/source.enum.js");
class ManagerSource {
    static build(config) {
        let mns = new ManagerSource();
        if (config.source == source_enum_js_1.SourceEnum.GITHUB)
            mns.withConfigApi(config.api);
        return mns;
    }
    withConfigApi(api) { return this.withApi(api_manager_js_1.ManagerApi.build(api)); }
    withApi(api) {
        this.api = api;
        return this;
    }
}
exports.ManagerSource = ManagerSource;
//# sourceMappingURL=source.manager.js.map