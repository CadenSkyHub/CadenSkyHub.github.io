# 原型链

`JavaScript` 的原型链是一种对象之间的连接机制，它用于实现继承和属性查找。理解原型链的核心概念有助于更好地理解 `JavaScript` 中对象的继承关系。让我通过一个简单的例子来解释原型链。

### 基础概念：

1. **构造函数（Constructor Function）：** 构造函数是用于创建对象的函数，它可以通过 `new` 关键字调用。构造函数可以有一个特殊的属性称为 `prototype`。
2. **原型对象（Prototype Object）：** 构造函数的 `prototype` 属性指向一个对象，这个对象就是该构造函数的原型对象。原型对象包含该类型实例所共享的属性和方法。
3. **实例对象（Instance Object）：** 通过构造函数创建的对象称为实例对象。实例对象可以访问原型对象上的属性和方法。
4. **原型链（Prototype Chain）：** 每个对象都有一个原型，而原型对象也有自己的原型。这样就形成了一个链条，即原型链。

### 例子：

```javascript
// 创建一个构造函数
function Animal(name) {
    this.name = name;
}

// 在构造函数的原型上添加一个方法 // [!code focus:4]
Animal.prototype.sayHello = function() { 
    console.log(`Hello, my name is ${this.name}`);
}

// 创建两个实例对象
const cat = new Animal('Whiskers');
const dog = new Animal('Buddy');

// 调用实例对象的方法
cat.sayHello(); // 输出: Hello, my name is Whiskers
dog.sayHello(); // 输出: Hello, my name is Buddy
```

在这个例子中，我们定义了一个构造函数 `Animal`，并在它的原型对象 `Animal.prototype` 上添加了一个方法 `sayHello`。然后，我们通过构造函数创建了两个实例对象 `cat` 和 `dog`。

现在，让我们来看看原型链的关系：

- `cat` 和 `dog` 这两个实例对象分别有一个原型，它们的原型是 `Animal.prototype`。
- `Animal.prototype` 的原型是 `Object.prototype`，这是 JavaScript 中所有对象的默认原型。
- `Object.prototype` 的原型为 `null`，这是原型链的顶端。

当我们调用 `cat.sayHello()` 时，JavaScript 引擎首先在 `cat` 对象上查找 `sayHello` 方法。如果找不到，它会沿着原型链向上查找，直到找到为止。在这个例子中，它会找到 `Animal.prototype` 上的 `sayHello` 方法，因此输出的是 `Hello, my name is Whiskers`。

原型链的这种机制使得对象能够共享方法，同时也是 JavaScript 中继承的基础。