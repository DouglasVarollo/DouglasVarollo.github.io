const Storage = {
  get(key, isObject) {
    const storedItem = localStorage.getItem(key);

    if (isObject) {
      return JSON.parse(storedItem);
    } else {
      return storedItem;
    }
  },

  set(key, value, isObject) {
    if (isObject) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }
};
