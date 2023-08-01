import { isClient } from "./index";

const storage = isClient ? window.localStorage : null

const set = (key: string, value: string) => {
  if (!storage) {
    return false
  }

  return storage.setItem(key, value)
}

const get = (key: string) => {
  if (!storage) {
    return false
  }

  return storage.getItem(key)
}

const remove = (key: string) => {
  if (!storage) {
    return false
  }

  return storage.removeItem(key)
}

export default {
  set,
  get,
  remove
}
