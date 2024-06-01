"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cars_info(manufacturer, modelName, ...freeOption) {
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...freeOption),
    };
    return carInfo;
}
let c = cars_info("Toyota", "GR Yaris", { color: "Gray" }, { features: ["Navigation", "Power Windo"] });
console.log(c);
