import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn for no specifi drug", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("should decrease the benefit and expiresIn for Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 20, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 19, 23)]);
  });

  it("should decrease the benefit and expiresIn for Doliprane", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 20, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Doliprane", 19, 24)]);
  });

  it("should decrease the benefit and expiresIn for Herbal Tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 20, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 19, 26)]);
  });

  it("should decrease the benefit and expiresIn for young Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 20, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 19, 26)]);
  });

  it("should decrease the benefit and expiresIn for mid Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 8, 27)]);
  });

  it("should decrease the benefit and expiresIn for old Fervex", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 4, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 3, 28)]);
  });

  it("should decrease the benefit and expiresIn for Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 20, 25)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 20, 25)]);
  });
});
