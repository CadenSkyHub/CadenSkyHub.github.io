# 面向对象



> [!caution] 注意
>
> **关于父类中的（箭头函数）方法，子类调用时报错 `TypeError: (intermediate value).saySome is not a function`**
>
> 箭头函数的一个特性是它们没有自己的 `this` 绑定，而是继承自外部的词法作用域。这也意味着在子类中使用 `super` 关键字调用父类的方法时，箭头函数无法正确地绑定 `this` 到父类实例。
>
> [具体请看](#调用父类方法)



## 基本

### 创建类

```
class Person{}
const Person1 = class {}
```

### 属性方法

```javascript
class Person {
    name = "张三";	// 属性
    age = 15;		 // 属性
    saySome(some) {  // 普通函数方法
        console.log(`张三说：`, some)
    };
}

const zhangSan = new Person()	// 实例化对象
console.log(zhangSan.name);     // 张三
console.log(zhangSan.age);      // 15
zhangSan.saySome("你好")   // 张三说： 你好
```



### 静态属性方法

静态属性方法是通过 `类` 来调用的，无需实例化

```javascript
class Person {
    static name = "personName";
    static age = 15;
    static saySome(){
        console.log("person static method")
    }
}

console.log(Person.name);   // personName
console.log(Person.age);    // 15
Person.saySome()            // person static method
```



### 检查对象实例

`instanceof` 是一个运算符，**用于检查对象是否是特定类（或构造函数）的实例。**

- 检查的是对象的原型链上是否有该类实例
- 只要原型链上有该类实例，就会返回`true` 意思就是，只要有继承性，则判断父类也是 `true`

```javascript {16-19}
class Person {
    constructor(name) {
        this.name = name
    }
}

class Dog{
    constructor(name) {
        this.name = name
    }
}

const person = new Person("张三")
const dog = new Dog("黑皮")

console.log(person instanceof Person)   // true
console.log(dog instanceof Dog)     // true
console.log(person instanceof Dog)  // false
console.log(dog instanceof Person)  // false
```



## 构造函数

`constructor`

构造函数会在 `new` 的时候执行。

```javascript {2-7}
class Person {
    constructor(name, age, gender) {    // 构造属性的方法 // [!code focus:6]
        this.name = name
        this.age = age
        this.gender = gender
        console.log("我被执行了...")
    };

    saySome(some) {
        return `${this.name}在说：${some}`
    };
}

const zhangSan = new Person("张三",15,true)	// 我被执行了，构造一个对象

console.log(zhangSan.name, zhangSan.age, zhangSan.gender)   // 张三 15 true
console.log(zhangSan.saySome('Hi，我是张三'))    // 张三在说：Hi，我是张三
```





## 封装

**封装主要特性就是保证数据安全**

- 对象就是一个用来存储不同属性的容器
- 对象不仅存储数据，还要负责数据的安全
- 直接添加到对象的属性，并不安全，因为它们可以被任意修改。
    - 私有化数据
    - 提供 `setter` 和 `getter` 方法
        - 可控制属性的读取与写入权限
        - 可在 `setter` 方法中进行数据验证
        - `setter`：读取属性
        - `getter`：设置属性

```javascript {7，14}
class Person {

    /*
    * 私有属性只能在类内部使用，无法通过实例化访问
    * 私有化的属性，一定要先声明，不然会报错
    * */
    #long = 18;   // 私有属性
    constructor(name, age, gender) {
        this.name = name		// 公共属性
        this.age = age			// 公共属性
        this.gender = gender	// 公共属性
    };
    sayLong(){
        console.log(`我的那个长：${this.#long}cm`)
    }
}

const zhangSan = new Person("张三",15,true)

// console.log(zhangSan.#long)
// 报错：SyntaxError: Private field '#long' must be declared in an enclosing class
zhangSan.sayLong()  // 我的那个长：18cm
```

### 私有属性获取与修改

```javascript {2,11-18,21-23,27,29}
class Person {
    #long = 0;   // 私有属性
    constructor(name) {    // 构造属性的方法
        this.name = name
    };
    sayLong (){
        console.log(`我的那个长：${this.#long}cm`)
    }

    // setter 方法
    setLong(long){
        // 校验
        if (isNaN(Number(long)) || (Number(long) <= 0 || Number(long) > 50)){
            throw "失败！，long参数有误。应为大于0小于50的整数"
        }
        // 设置私有属性
        this.#long = long
    }

    // getter 方法
    getLong(long){
        return this.#long
    }
}

const zhangSan = new Person("张三")
zhangSan.setLong(20)
zhangSan.sayLong()  // 我是：张三，我的那个长：20cm
console.log(zhangSan.getLong()) // 20
```



### 私有属性获取与修改简写

```javascript {2,8-13,16-18,22-23}
class Person {
    #long = 0;   // 私有属性
    constructor(name) {    // 构造属性的方法
        this.name = name
    };

    // setter 方法，内部进行校验
    set long(long) {
        if (isNaN(Number(long)) || (Number(long) <= 0 || Number(long) > 50)) {
            throw "失败！，long参数有误。应为大于0小于50的整数"
        }
        this.#long = long
    }

    // getter 简写方法
    get long() {
        return this.#long
    }
}

const zhangSan = new Person("张三")
zhangSan.long = 43;	// 调用 setter long
console.log(zhangSan.long)  // 调用 getter long 43
```



## 多态

定义一个函数，接收一个对象作为参数，可以输出`My name is xxx`

```javascript
class Person {
    constructor(name) {
        this.name = name
    }
}

class Dog{
    constructor(name) {
        this.name = name
    }
}

const sayName = (obj) =>{
    return `My name is ${obj.name}`
}

const person = new Person("张三")
const dog = new Dog("黑皮")

console.log(sayName(person))    // My name is 张三
console.log(sayName(dog))   // My name is 黑皮
```





## 继承

- 通过 `extends` 关键字来完成继承
- 通过创建同名方法，重写父类方法

```javascript {12,15}
class Animal{
    constructor(name) {
        this.name = name
    }

    saySome(){
        console.log("在叫唤...")
    }
}

// 定义狗类，继承动物类
class Dog extends Animal{}

// 定义猫类，继承动物类
class Cat extends Animal{}


// 实例化猫狗
const dog = new Dog("旺财")
const cat = new Cat("Tom")

dog.saySome()   // 在叫唤...
cat.saySome()   // 在叫唤...
```





### 构造函数重写

> [!caution] 注意
>
> 重写构造函数的第一行代码，必须为：`super()` 来调用父类的构造函数
>
> 构造函数的参数，要传给父类 `super(父类需要的参数)`

```javascript {13-16}
class Animal{
    constructor(name) {
        this.name = name
    }

    saySome(){
        console.log("在叫唤...")
    }
}

class Dog extends Animal{
    // 重写父类的构造方法
    constructor(name, age) { // [!code focus:4]
        super(name);    // 必须要使用 super() 且将父类需要的参数传递过去
        this.age = age
    }

    sayAge(){
        console.log(`${this.name}今年${this.age}岁了！`)
    }
}


// 实例化
const dog = new Dog("旺财",15)

dog.sayAge()    // 旺财今年15岁了！
```





### 方法重写

通过创建同名方法，重写父类方法

```javascript {13-15,20-22}
class Animal{
    constructor(name) {
        this.name = name
    }

    saySome(){
        console.log("在叫唤...")
    }
}

class Dog extends Animal{
    // 重写父类方法
    saySome(){
        console.log(`${this.name}在 woff~ 的叫...`)
    }
}

class Cat extends Animal{
    // 重写父类方法
    saySome(){
        console.log(`${this.name}在 miu~ 的叫...`)
    }
}


// 实例化猫狗
const dog = new Dog("旺财")
const cat = new Cat("Tom")

dog.saySome()   // 旺财在 woff~ 的叫...
cat.saySome()   // Tom在 miu~ 的叫...
```





### 调用父类方法

`super.方法名`：调用的是父类中的方法

`this.方法名`：调用的是继承自父类的子类中的方法

::: details 重要提示

> [!warning] 警告
>
> ``` javascript {6-8,19}
> class Animal{
>     constructor(name) {
>         this.name = name
>     }
> 
>     saySome = () =>{ // [!code error]	// 箭头函数，在类中被成为类字段，无法使用 super 调用
>         console.log("在叫唤...") // [!code error]
>     } // [!code error]
> }
> 
> class Dog extends Animal{
>     // 重写父类的构造方法
>     constructor(name, age) {
>         super(name);    // 必须要使用 super() 且将父类需要的参数传递过去
>         this.age = age
>     }
> 
>     sayAge = () =>{
>         super.saySome() // [!code error] // 报错！TypeError: (intermediate value).saySome is not a function
>         console.log(`${this.name}今年${this.age}岁了！`)
>     }
> }
> 
> 
> // 实例化
> const dog = new Dog("旺财",15)
> 
> dog.sayAge()    // 旺财今年15岁了！
> ```

:::

```javascript {6-8,19}
class Animal {
    constructor(name) {
        this.name = name
    }

    saySome() { // [!code ++]
        console.log("在叫唤...") // [!code ++]
    } // [!code ++]
}

class Dog extends Animal {
    // 重写父类的构造方法
    constructor(name, age) {
        super(name);
        this.age = age
    }

    sayAge() {
        super.saySome() // [!code ++]
        console.log(`${this.name}今年${this.age}岁了！`)
    }
}


// 实例化
const dog = new Dog("旺财", 15)

dog.sayAge()    
// 在叫唤...
// 旺财今年15岁了！
```









































