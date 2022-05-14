
import { makeAutoObservable } from "mobx";

class counterStore {
  counter: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseCounter = () => {
    this.counter++
  }
}

export default counterStore