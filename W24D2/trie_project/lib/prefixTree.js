/**
 * Initialize your data structure here.
 */
class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insert(word.slice(1), root.children[letter]);
    }
  }

  search(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) return true;
      else return false;
    }

    let letter = word[0];

    if (letter in root.children) {
      return this.search(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  startsWith(prefix, root = this.root) {
    if (prefix.length === 0) {
      return true;
    }

    let letter = prefix[0];

    if (letter in root.children) {
      return this.startsWith(prefix.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }
}

// let trie = new Trie();

// console.log(trie.insert("apple"));
// console.log(trie.search("apple"));   // returns true
// console.log(trie.search("app"));     // returns false
// console.log(trie.startsWith("app")); // returns true
// console.log(trie.insert("app"));
// console.log(trie.search("app"));     // returns true
