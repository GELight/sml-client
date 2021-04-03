"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sml_1 = require("@gelight/sml");
class SmlRequest {
    static get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                headers: {
                    "Accept": "text/plain",
                    "Content-Type": "text/plain"
                },
                method: "GET"
            });
            const responseText = yield response.text();
            return sml_1.SmlDocument.parse(responseText);
        });
    }
    static post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                body: data.toString(),
                headers: {
                    "Accept": "text/plain",
                    "Content-Type": "text/plain"
                },
                method: "POST"
            });
            const responseText = yield response.text();
            return sml_1.SmlDocument.parse(responseText);
        });
    }
    static delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                headers: {
                    "Accept": "text/plain",
                    "Content-Type": "text/plain"
                },
                method: "DELETE"
            });
            const responseText = yield response.text();
            return sml_1.SmlDocument.parse(responseText);
        });
    }
    static put(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                body: data.toString(),
                headers: {
                    "Accept": "text/plain",
                    "Content-Type": "text/plain"
                },
                method: "PUT"
            });
            const responseText = yield response.text();
            return sml_1.SmlDocument.parse(responseText);
        });
    }
    static patch(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                body: data.toString(),
                headers: {
                    "Accept": "text/plain",
                    "Content-Type": "text/plain"
                },
                method: "PATCH"
            });
            const responseText = yield response.text();
            return sml_1.SmlDocument.parse(responseText);
        });
    }
}
exports.default = SmlRequest;
//# sourceMappingURL=SmlRequest.js.map