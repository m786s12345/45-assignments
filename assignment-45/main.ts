function cars_info(
    manufacturer: string,
    modelName: string,
    ...freeOption: { [key: string]: any }[]
  ): Object {
    const carInfo = {
      manufacturer,
      modelName,
      ...Object.assign({}, ...freeOption),
    };
    return carInfo;
  }
  let c = cars_info(
    "Toyota",
    "GR Yaris",
    { color: "Gray" },
    { features: ["Navigation", "Power Windo"] }
  );
  console.log(c);