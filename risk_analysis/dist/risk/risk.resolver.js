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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const risk_service_1 = require("./risk.service");
const risk_input_dto_1 = require("./dto/risk-input.dto");
let RiskResolver = class RiskResolver {
    riskService;
    constructor(riskService) {
        this.riskService = riskService;
    }
    async analyzeAccessRisk(input) {
        return this.riskService.registrarRiesgo(input);
    }
    ping() {
        return 'Risk Analysis Service is running';
    }
};
exports.RiskResolver = RiskResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [risk_input_dto_1.RiskInput]),
    __metadata("design:returntype", Promise)
], RiskResolver.prototype, "analyzeAccessRisk", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], RiskResolver.prototype, "ping", null);
exports.RiskResolver = RiskResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskResolver);
//# sourceMappingURL=risk.resolver.js.map