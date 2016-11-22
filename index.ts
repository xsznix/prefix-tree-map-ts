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

  /**
   * Sets the mapping at <code>key</code> to <code>val</code>.
   * @param key {string} the key to update
   * @param val {T} the value to add
   * @return the old value at <code>key</code>, or <code>null</code> if there
   * was none
   */
  public set(key: string, val: T): T | null {
    // TODO
    return null;
  }

  /**
   * Deletes the mapping at <code>key</code>.
   * @param key {string} the key to remove
   * @return the old value at <code>key</code>, or <code>undefined</code> if
   * there was none
   */
  public delete(key: string): T | undefined {
    // TODO
    return null;
  }

  /**
   * Gets the mapping at <code>key</code>.
   * @param key {string} the key to get
   * @return the value at <code>key</code>, or <code>undefined</code> if there
   * is none
   */
  public get(key: string): T | undefined {
    // TODO
    return undefined;
  }

  /**
   * Get an iterator over all mappings whose keys start with
   * <code>keyPrefix</code>. The iteration order is deterministically
   * ascending based on the lexicographical ordering of the keys.
   * @param keyPrefix {string} the key prefix to search for
   * @return an iterator over all mappings whose keys start with
   * <code>keyPrefix</code>
   */
  public * entriesWithPrefix(keyPrefix: string): Iterable<T> {
    // TODO
  }
}
