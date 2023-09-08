import { useState } from "react";

function useStorage(key, initialValue) {
  // gettin stored value
  const storedValue = localStorage.getItem(key);

  // initial state will be storedValue or initialValue
  const [value, setValue] = useState(storedValue || initialValue);

  // update storage
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, updateValue];
}

export default useStorage;
