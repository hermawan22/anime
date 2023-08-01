import localStorage from "@/helper/localStorage";

const storageName = "collection";

export const found = (id: number) => {
  const collection = localStorage.get(storageName);
  const parsedCollection =
  collection && JSON.parse(collection);
  let foundId = false;
  parsedCollection && parsedCollection.forEach((name: string) => {
    const key = Object.keys(name)[0];

    name[key].forEach((collection: any) => {
      if (collection && collection.id === Number(id)) {
        foundId = true;
      }
    });
  });

  return foundId

};

export const createCollectionName = (name: string, setError: Function) => {
  const collection = localStorage.get(storageName);
  const parsedCollection = collection && JSON.parse(collection);
  const obj = {
    [name]: []
  }

  if (!parsedCollection) {
    return localStorage.set(storageName, JSON.stringify([obj]));
  } else if (
    parsedCollection.filter((collection: string) => Object.keys(collection)[0] === name).length
  ) {
    return setError('Collection name already exist')
  }

  return localStorage.set(storageName, JSON.stringify([...parsedCollection, obj]));
};

export const getCollection = () => {
  const collection = localStorage.get(storageName);
  return collection && JSON.parse(collection);
}

export const addCollection = (name: string, myData: any) => {
  const collection = localStorage.get(storageName);
  const parsedCollection = collection && JSON.parse(collection);

  const newData = parsedCollection.map((collection: any) => {
    if (Object.keys(collection)[0] === name) {
      const obj = {
        [name]: [...collection[name], myData]
      }
      return obj;
    }
    return collection;
  })

  return localStorage.set(storageName, JSON.stringify(newData));
}

export const editCollection = (key: string, name: string) => {
  const collection = localStorage.get(storageName);
  const parsedCollection = collection && JSON.parse(collection);
  parsedCollection.forEach((collection: any) => {
    collection[name] = collection[key]
    delete collection[key]
  })

  return localStorage.set(storageName, JSON.stringify(parsedCollection));
}

export const removeCollection = (name: string) => {
  const collection = localStorage.get(storageName);
  const parsedCollection = collection && JSON.parse(collection);

  const newData = parsedCollection.filter((collection: any) => Object.keys(collection)[0] !== name);

  return localStorage.set(storageName, JSON.stringify(newData));
}

export const removeItemCollection = (name: string, id: number) => {
  const collection = localStorage.get(storageName);
  const parsedCollection = collection && JSON.parse(collection);

  parsedCollection.forEach((collection: any)=> {
    if (collection[name]) {
      const index = collection[name].findIndex((item: any) => item.id === id);
      const removed = collection[name].splice(index, 1)
      return removed;
    }

    return collection;
  })  

  return localStorage.set(storageName, JSON.stringify(parsedCollection));
}