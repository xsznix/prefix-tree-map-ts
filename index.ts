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
   * Adds <code>val</code> to the map at <code>key</code> if the mapping
   * does not already exist.
   * @param key {string} the key to add at
   * @param val {T} the value to add
   * @return <code>true</code> if the add succeeded; <code>false</code> if there
   * is already a mapping at <code>key</code>
   */
  public add(key: string, val: T): boolean {
    // TODO
    return false;
  }

  /**
   * Updates the mapping at <code>key</code> to <code>val</code> or add it if
   * the mapping does not exist.
   * @param key {string} the key to update
   * @param val {T} the value to add
   * @return the old value at <code>key</code>, or <code>null</code> if there
   * was none
   */
  public update(key: string, val: T): T | null {
    // TODO
    return null;
  }

  /**
   * Removes the mapping at <code>key</code>.
   * @param key {string} the key to remove
   * @return the old value at <code>key</code>, or <code>null</code> if there
   * was none
   */
  public remove(key: string): T | null {
    // TODO
    return null;
  }

  /**
   * Gets the mapping at <code>key</code>.
   * @param key {string} the key to get
   * @return the value at <code>key</code>, or <code>null</code> if there was
   * none
   */
  public get(key: string): T | null {
    // TODO
    return null;
  }

  /**
   * Get an iterator over all mappings whose keys start with
   * <code>keyPrefix</code>. The iteration order is deterministically
   * ascending based on the lexicographical ordering of the keys.
   * @param keyPrefix {string} the key prefix to search for
   * @return an iterator over all mappings whose keys start with
   * <code>keyPrefix</code>
   */
  public * getPrefix(keyPrefix: string): Iterable<T> {
    // TODO
  }
}
