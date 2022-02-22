import { proxy } from "valtio";

const key = "watch-list";

const setItems = (): string[] => {
  if (localStorage.getItem(key) === null) {
    return [];
  }
  return JSON.parse(localStorage.getItem(key) ?? "[]");
};

export const watchList = proxy<{
  items: string[];
  add: (item: string) => void;
  remove: (item: string) => void;
}>({
  items: setItems(),

  add: (item: string) => {
    if (localStorage.getItem(key) === null) {
      watchList.items.push(item);
      localStorage.setItem(key, JSON.stringify(watchList.items));
    }
    let items = JSON.parse(localStorage.getItem(key) || "[]");
    if (!items.includes(item)) {
      items.push(item);
      localStorage.setItem(key, JSON.stringify(items));
      watchList.items = setItems();
    }
  },
  remove: (item: string) => {
    let items = JSON.parse(localStorage.getItem(key) || "[]");
    items = items.filter((i: string) => i !== item);
    localStorage.setItem(key, JSON.stringify(items));
    watchList.items = setItems();
  },
});
