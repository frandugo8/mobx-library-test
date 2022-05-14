
import React from "react";
import CounterStore from "./counter/counter.store";
import NoteStore from "./note/note.store";

class rootStore {
  counterStore
  noteStore

  constructor() {
    this.counterStore = new CounterStore()
    this.noteStore = new NoteStore()
  }
}

const StoresContext = React.createContext(new rootStore())

// this will be the function available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);