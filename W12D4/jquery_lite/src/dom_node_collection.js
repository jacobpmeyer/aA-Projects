

class DOMNodeCollection {
    constructor(l_array) {
        this.l_array = l_array;
    }

    html(str) {
      if (str !== undefined) {
        this.forEach((node) => {
          node.innerHTML = str
        });
      } else {
        return this[0].innerHTML;
      }
    }

    
    empty() {
        this.html('');
    }

    append(arg) {
      this.forEach((node) => {
        node.innerHTML = node.innerHTML + " " + arg;
      });
    }

    attr(key, val) {
      if (!val) {
        return this[0].getAttribute(key);
      } else {
        this.forEach((node) => {
          node.setAttribute(key, val);
        })
      }
    }

    addClass (newClass) {
     this.forEach( (node) => {
       node.classList.add(newClass);
     });
    }

  removeClass(oldClass) {
    this.forEach((node) => {
      node.classList.remove(oldClass);
    });
  }

  children() {
    let childrenNodes = []
    this.forEach((node) => {
      const nodeChildren = Array.from(node.children)
      childrenNodes = childrenNodes.concat(nodeChildren)
    })
    return new DOMNodeCollection(childrenNodes)
  };

  parent() {
    let parentNodes = []
    this.forEach((node) => {
      const nodeParents = Array.from(node.parentNode)
      parentNodes.concat(nodeParents)
    });
    return new DOMNodeCollection(parentNodes)
  }

  find (selector) {
    const selected = [];
    this.forEach ( (node) => {
      const matches = Array.from(node.querySelectorAll(selector));
      selected.concat(matches);
    });
    return new DOMNodeCollection(selected);
  }

  remove () {
    this.forEach ((node) => {
      node.remove();
    })
  }

  on (eventName, callback) {
    this.forEach ((node) => {
      const newEvent = node.addEventListener (eventName, callback);
      node.attr(eventName, newEvent);
    })
  }

  off (eventName) {
    this.forEach ((node) => {
      node.removeEventListener(eventName, callback)
    })
  }
}

module.exports = DOMNodeCollection;