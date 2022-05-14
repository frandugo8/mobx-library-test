import counterStore from "./counter.store";


describe("Counter Store", () => {
  const counter = new counterStore();

  test("should increase counter when increaseCounter method is called", () => {
    expect(counter.counter).toEqual(0)
    counter.increaseCounter()
    expect(counter.counter).toEqual(1)
  });
});