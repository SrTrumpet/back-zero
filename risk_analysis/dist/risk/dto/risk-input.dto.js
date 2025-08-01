"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskInput = void 0;
const graphql_1 = require("@nestjs/graphql");
let RiskInput = class RiskInput {
    userId;
    ip;
    navigator;
    operatingSystem;
    timeZone;
    email;
    deviceId;
};
exports.RiskInput = RiskInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], RiskInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RiskInput.prototype, "ip", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RiskInput.prototype, "navigator", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RiskInput.prototype, "operatingSystem", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RiskInput.prototype, "timeZone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RiskInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], RiskInput.prototype, "deviceId", void 0);
exports.RiskInput = RiskInput = __decorate([
    (0, graphql_1.InputType)()
], RiskInput);
//# sourceMappingURL=risk-input.dto.js.map