import { makeAutoObservable } from "mobx";

class noteStore {
    notes: Array<string> = []

    constructor() {
      makeAutoObservable(this)
    }

    addNote(note: string) {
        this.notes.push(note)
    }
}

export default noteStore