export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name === "Magic Pill") {
        drug.expiresIn -= 1;
        return;
      }
      switch (drug.name) {
        case "Herbal Tea":
          drug.benefit =
            drug.expiresIn < 0
              ? drug.benefit + 2 > 50
                ? 50
                : drug.benefit + 2
              : drug.benefit + 1 > 50
                ? 50
                : drug.benefit + 1;
          break;
        case "Fervex":
          if (drug.expiresIn < 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn < 6) {
            drug.benefit = drug.benefit + 3 > 50 ? 50 : drug.benefit + 3;
          } else if (drug.expiresIn < 11) {
            drug.benefit = drug.benefit + 2 > 50 ? 50 : drug.benefit + 2;
          } else {
            drug.benefit = drug.benefit + 1 > 50 ? 50 : drug.benefit + 1;
          }
          break;
        default:
          drug.benefit =
            drug.benefit - (drug.expiresIn < 0 ? 2 : 1) < 0
              ? 0
              : drug.benefit - (drug.expiresIn < 0 ? 2 : 1);
          break;
      }
    });
  }
}
