type PTMapNode<T> = {
  keyElem: string;
  value?: T;
  children: PTMapNode<T>[];
}

class PTMap<T> {
  private root: PTMapNode<T>;

  constructor(initialValue?: T) {
    this.root = {
      keyElem: '',
      value: initialValue,
      children: [],
    };
  }

  public add(key: string, val: T): boolean {
    // TODO
    return false;
  }

  public update(key: string, val: T): T | null {
    // TODO
    return null;
  }

  public remove(key: string): T | null {
    // TODO
    return null;
  }

  public get(key: string): T | null {
    // TODO
    return null;
  }

  public * getPrefix(keyPrefix: string): Iterable<T> {
    // TODO
  }
}
