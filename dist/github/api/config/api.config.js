"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigApi = void 0;
class ConfigApi {
    constructor(values = {}) {
        if (Object.keys(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.ConfigApi = ConfigApi;
//# sourceMappingURL=api.config.js.map