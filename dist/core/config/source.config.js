"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigSource = void 0;
class ConfigSource {
    constructor(values = {}) {
        if (Object.keys(values).length === 0 && values.constructor === Object) {
            return;
        }
        Object.assign(this, values);
    }
}
exports.ConfigSource = ConfigSource;
//# sourceMappingURL=source.config.js.map