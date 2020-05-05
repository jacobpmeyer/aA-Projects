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

  insertRecur(word, root = this.root) {
    let letter = word[0];

    if (!(letter in root.children)) {
      root.children[letter] = new Node();
    }

    if (word.length === 1) {
      root.children[letter].isTerminal = true;
    } else {
      this.insertRecur(word.slice(1), root.children[letter]);
    }
  }

  insertIter(word) {
    let root = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in root.children)) {
        root.children[word[i]] = new Node();
      }
      root = root.children[word[i]];
      // if (i === word.length - 1) {
      //     root.isTerminal = true;
      //     return;
      // }
    }
    root.isTerminal = true;
  }

  searchRecur(word, root = this.root) {
    if (word.length === 0) {
      if (root.isTerminal) return true;
      else return false;
    }

    let letter = word[0];

    if (letter in root.children) {
      return this.searchRecur(word.slice(1), root.children[letter]);
    } else {
      return false;
    }
  }

  searchIter(word) {
    root = this.root;
    for (let i = 0; i < word.length; i++) {
      if (word[i] in root.children) {
        root = root.children[word[i]];
      } else {
        return false;
      }
    }

    return root.isTerminal;
  }

  wordsWithPrefix(prefix, root = this.root) {
    if (prefix.length === 0) {
      let wordsPrefixArr = [];

      // tex tea ten

      if (root.isTerminal) wordsPrefixArr.push("");

      for (let letter in root.children) {
        // wordsPrefixArr.push(letter);
        let words = this.wordsWithPrefix(prefix, root.children[letter]);
        let arr = [];
        for (let i = 0; i < words.length; i++) {
          arr.push(letter + words[i]);
        }
        // console.log(arr);
        wordsPrefixArr = wordsPrefixArr.concat(arr);
      }
      return wordsPrefixArr;
    } else {
      let wordsPrefixArr = [];
      let letter = prefix[0];
      // tex tea ten
      if (letter in root.children) {
        let words = this.wordsWithPrefix(
          prefix.slice(1),
          root.children[letter]
        );
        let arr = [];
        for (let i = 0; i < words.length; i++) {
          arr.push(letter + words[i]);
        }
        wordsPrefixArr = wordsPrefixArr.concat(arr);
      } else {
        return wordsPrefixArr;
      }
      return wordsPrefixArr;
    }
  }
}

module.exports = {
  Node,
  Trie,
};
