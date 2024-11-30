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

  updateBenefit(drug, value) {
    if (value > 0) {
      drug.benefit = drug.benefit + value > 50 ? 50 : drug.benefit + value;
    } else {
      drug.benefit = drug.benefit + value < 0 ? 0 : drug.benefit + value;
    }
  }
  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      if (drug.name === "Magic Pill") {
        return;
      }
      drug.expiresIn -= 1;

      switch (drug.name) {
        case "Herbal Tea":
          this.updateBenefit(drug, drug.expiresIn < 0 ? 2 : 1);
          break;
        case "Fervex":
          if (drug.expiresIn < 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn < 6) {
            this.updateBenefit(drug, 3);
          } else if (drug.expiresIn < 11) {
            this.updateBenefit(drug, 2);
          } else {
            this.updateBenefit(drug, 1);
          }
          break;
        case "Dafalgan":
          this.updateBenefit(drug, drug.expiresIn < 0 ? -4 : -2);
          break;
        default:
          this.updateBenefit(drug, drug.expiresIn < 0 ? -2 : -1);
          break;
      }
    });
    return this.drugs;
  }
}
