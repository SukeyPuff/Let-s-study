

# TypeScript

TypeScript是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

本文主要对其强大的类型系统做介绍。



## 基本类型（Basic Types）

* 原始类型: `string`，`number` 和 `boolean`。

* 数组

  ```
  let numArr: number[] = [1, 2]; 
  let numArr: Array<number> = [1, 2];
  ```

* 对象：定义一个对象类型，只需要简单的列出它的属性和对应的类型。对象类型可以指定一些甚至所有的属性为可选的，你只需要在属性名后添加一个 `?` 。

* null/undefined：它们是所有其它类型的子类型，它们可以赋值给其它类型。 "strictNullChecks": true, 可以更加严格的空类型检查，不让null 和 undefined 随便赋值，只能赋值给自身。

  

## 常见类型（Everyday Types）

* 元组（Tuple）：`Tuple`类型是另外一种 `Array` 类型，通过元组可以存储不同类型的元素。当明确知道数组包含多少个元素，并且数组中每一项的类型都明确知道的时候，就适合使用元组类型。
* any：`any`类型，可以绕过类型检查，因此，`any`类型的数据，可以赋值给任意类型。当你不希望一个值导致类型检查错误的时候，就可以设置为 `any` 。
* 联合类型（Union）：联合类型是由两个或多个其他类型组成的类型，union类型的值可以是这些类型中的任何一个的值。我们将这些类型中的每一个称为联合的成员。


 * 函数：函数是 JavaScript 传递数据的主要方法。TypeScript 允许你指定函数的输入值（参数）和输出值（返回值）的类型。

 * never：表示一个值不会再被观察到 (observed)。

   使用场景：

   * 当 TypeScript 确定在联合类型中已经没有可能是其中的类型的时候，`never` 类型会出现，来表示不应该存在的状态。例子：[Exclude工具类型](#Exclude<UnionType, ExcludedMembers>)

   * never 类型可以赋值给任何类型，然而，没有类型可以赋值给 `never` （除了 `never` 自身）。这就意味着你可以在 `switch` 语句中使用 `never` 来做一个穷尽检查。

     ```
     interface Circle {
       kind: "circle";
       radius: number;
     }
     
     interface Square {
       kind: "square";
       sideLength: number;
     }
     
     type Shape = Circle | Square;
     
     function getArea(shape: Shape) {
       switch (shape.kind) {
         case "circle":
           return Math.PI * shape.radius ** 2;
         case "square":
           return shape.sideLength ** 2;
         default:
           const _exhaustiveCheck: never = shape;
           return _exhaustiveCheck;
       }
     }
     ```
     如果我们在 shape 联合类型里增加一个新字段，比如：

     ```
     interface Triangle {
       kind: "triangle";
       sideLength: number;
     }
     ```


​     		会立即遇到语法错误：Type 'Triangle' is not assignable to type 'never'

 * 字面量类型：

   ```
   let gender:'男' | '女'; //从此只能赋值男女   
   let arr:[]; //永远只能取值为一个空数组   
   let user: { name:string, age:number };   
   user = { name:'hrt', age:23 } //强力约束了
   ```

   

## 类型别名（Type Aliases）

```
type ID = number | string;
```



## 接口（Interfaces）

TypeScript的核心原则之一是对值所具有的结构进行类型检查。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

接口声明是命名**对象类型**的另一种方式：

```
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

`Point`接口就好比一个名字，用来描述上面例子里的要求。 它代表了有一个 `x`属性且类型为`number`的对象和一个 `y`属性且类型为`number`的对象。 在这里我们只会去关注传给`printCoord`值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。

##### 类型别名和接口的不同

类型别名和接口非常相似，大部分时候，你可以任意选择使用。接口的几乎所有特性都可以在 `type` 中使用，两者最关键的差别在于类型别名本身无法添加新的属性，而接口是可以使用`extends`扩展的。



## 字面量类型（Literal Types）

除了一般的字符串和数字类型外，我们还可以在类型位置引用特定的字符串和数字。

```
let x: "hello" = "hello";

x = "hello"; // OK

x = "howdy"; // 报错
```

只有一个值的变量没有什么意义，通过将文字组合成联合，则可以表达一个更有用的概念。

```
function printText(s: string, alignment: "left" | "right" | "center") {

  // ...

}

printText("Hello, world", "left");
```



## 类（Class）

下面来看一个使用类的例子：

```
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

如果你使用过C#或Java，你会对这种语法非常熟悉。 我们声明一个 `Greeter`类。这个类有3个成员：一个叫做 `greeting`的属性，一个构造函数和一个 `greet`方法。你会注意到，我们在引用类成员的时候用了 `this`。 它表示我们访问的是类的成员。最后一行，我们使用 `new`构造了 `Greeter`类的一个实例。 它会调用之前定义的构造函数，创建一个 `Greeter`类型的新对象，并执行构造函数初始化它。

##### C#与TypeScript在面向对象方面的异同

|                     **面向对象三大特性**                     |                            **C#**                            |                        **TypeScript**                        |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| **封装：**把类内部成员属性、成员方法统一保护起来，只保留有限的接口与外部进行联系，尽可能屏蔽对象的内部细节，防止外部随意修改内部数据，保证数据的安全性。 | public：所有对象都可以访问；<br />protected：只限于本类内部和子类内部可访问，实例不可访问；<br />internal：只限于本项目内访问，其他不能访问。<br />protected internal：只限于本项目和子类访问，其他不能访问；<br />private：只限于本类成员访问，子类、实例都不能访问。 | public：公共可访问，不加修饰符默认此级别；<br /> protected：子类可访问；<br /> private：仅内部可访问。 |
| **继承：**可以扩展已有的类，它允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以包含父类中没有的属性和方法。 | C#只允许单继承，一个类只能继承于一个父类 。但是可以使用接口来实现多重继承。 | TS 中类之间只能实现单继承，但是在接口里是可以实现单继承和多继承的。 |
| **多态：**在父类中定义一个方法，在子类中有多个实现，在程序运行的时候，根据不同的对象执行不同的操作，实现运行时的绑定。 |                          重写、重载                          |                          重写、重载                          |



## 高级类型

TypeScript的类型系统非常强大，因为它允许用其他类型来表达类型。这种思想最简单的形式是泛型，我们实际上有各种各样的类型操作符可用。也可以用我们已有的值或类型来表示一种新的类型。通过组合各种**类型操作符**，我们可以以一种简洁、可维护的方式来表示复杂的操作和值。在本节中，我们将介绍用现有类型或值来表示新类型的方法。



#### 泛型 (Generics)

在c#和Java这样的语言中，用于创建可重用组件的工具箱中的主要工具之一是泛型，也就是说，在泛型的帮助下，我们能够创建可以在多种类型(而不是单一类型)上工作的组件。这将允许用户使用这些组件时使用他们自己的类型。

如果不使用泛型，我们在写一个函数的时候需要指明**具体**的类型，或者是使用**any**类型

```
function identity(arg: number): number {
  return arg;
}

function identity(arg: any): any {
  return arg;
}
```

虽然使用any肯定是泛型的，因为它将导致函数接受任何和所有类型作为参数的类型，但实际上，当函数返回时，我们丢失了关于该类型的信息。

此时我们需要一种方法来捕获参数的类型，这样我们也可以用它来表示返回的内容。这里，我们将使用**类型变量**，这是一种特殊类型的变量，它作用于类型而不是值。

```
function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity("myString");
```

当您开始使用泛型时，您会注意到，当您创建诸如`identity`这样的泛型函数时，编译器会强制您正确地在函数体中使用任何泛型类型的参数。



#### typeof类型操作符

TypeScript添加了一个`typeof`操作符，你可以在类型上下文中使用它来获取变量或属性的类型:

```
let s = "hello";
let n: typeof s;
```

如果仅仅用来判断基本的类型，自然是没什么太大用，和其他的类型操作符搭配使用才能发挥它的作用。

比如搭配 TypeScript 内置的 `ReturnType<T>`。你传入一个函数类型，`ReturnType<T>` 会返回该函数的返回值的类型：

```
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// type K = boolean
```

如果我们直接对一个函数名使用 `ReturnType` ，我们会看到这样一个报错：

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;

// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?
```

这是因为值（values）和类型（types）并不是一种东西。为了获取值 `f` 也就是函数 `f` 的类型，我们就需要使用 `typeof`：

```typescript
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
                    
// type P = {
//    x: number;
//    y: number;
// }
```



#### keyof 类型操作符

对一个对象类型使用 `keyof` 操作符，会返回该对象属性名组成的一个字符串或者数字字面量的联合。

```
// 返回该对象属性名组成的一个字符串的联合
type Point = { x: number; y: number };
type P = keyof Point; //  "x" | "y"

// 返回该对象属性名组成的一个数字字面量的联合
const NumericObject = {
  [1]: "一号",
  [2]: "二号",
  [3]: "三号"
};
type result = keyof typeof NumericObject // 1 | 2 | 3
```



#### **索引访问类型** (Indexed Access Types)

我们可以使用一个索引访问类型来查找另一个类型的特定属性:

```
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
```

索引类型本身就是一个类型，所以我们也可以使用联合、`keyof` 或者其他类型：

```
type I1 = Person["age" | "name"]; // string | number

type I2 = Person[keyof Person]; // string | number | boolean
     
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // string | boolean
```

使用**number**作为索引可以获取数组元素的类型。我们可以将这个和`typeof`结合起来，方便地捕获数组的元素类型:

```
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = typeof MyArray[number]; // type Person = {name: string; age: number;}

type Age = typeof MyArray[number]["age"]; // type Age = number

type Age2 = Person["age"]; // type Age2 = number
```



#### 条件类型  (Conditional Types)

条件类型可以用来描述输入类型和输出类型之间的关系。当extends左边的类型可赋值给右边的类型时，你会在第一个分支中获得类型(“true”分支)；否则你将在后面的分支中获得类型(“false”分支)。

使用条件类型实现一个接受条件 C 的工具类 If，若 C 为 true 返回类型 T ，若 C 为假则返回类型F。C 的类型为 true或 false，而 T 和 F 可以是任何类型：

```
type If<C extends boolean, T, F> = C extends true ? T : F;

type Res = If<true, 'a', 'b'>; // 'a'
```



##### 条件类型约束

通常，使用条件类型会为我们提供一些新的信息。

```
type MessageOf<T> = T["message"]; // Type '"message"' cannot be used to index type 'T'.
```

在这个例子中，TypeScript会出错，因为我们不知道T有一个名为message的属性。此时我们可以限制T，这样TypeScript就不会再报错了：

```
type MessageOf<T extends { message: unknown }> = T["message"];
 
interface Email {
  message: string;
}
 
type EmailMessageContents = MessageOf<Email>; // type EmailMessageContents = string
```



##### 条件类型内的推断

条件类型提供了一种方法，可以使用**infer**关键字在比较的类型的true分支中进行类型推断。我们可以使用infer关键字编写一些有用的辅助类型别名。

```
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num = GetReturnType<() => number>; // type Num = number
```

在这个条件语句 `Type extends (...args: never[]) => infer Return` 中，`infer Return` 表示待推断的函数参数。

整句表示为：如果 `Type` 能赋值给 `(...args: never[]) => infer Return`，则结果是 `(...args: never[]) => infer Return` 类型中的参数 `Return`，否则返回为 `never`。



##### 分发条件类型

当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成 **分发的（distributive）**，即遍历了联合类型里的每个成员。

```
type ToArray<Type> = Type extends any ? Type[] : never;
 
type StrArrOrNumArr = ToArray<string | number>; 
// type StrArrOrNumArr = string[] | number[]
```

如果不想发生这种分配情况，可以在extends关键字的每一边都用方括号括起来。

```
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
type StrArrOrNumArr = ToArrayNonDist<string | number>; // type StrArrOrNumArr = (string | number)[]
```



#### 映射类型（Mapped Types）

映射类型建立在索引签名的语法上，索引签名用于声明没有提前声明的属性类型:

```
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

而映射类型，就是使用了 `PropertyKeys` 联合类型的泛型，其中 `PropertyKeys` 多是通过 `keyof` 创建，然后循环遍历键名创建一个类型：

```
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
type FeatureOptions = OptionsFlags<FeatureFlags>; 
// type FeatureOptions = {
// 	darkMode: boolean;
//	newUserProfile: boolean;
// }
```

在上面这个例子中，`OptionsFlags` 会遍历 `Type` 所有的属性，然后设置为布尔类型。



##### 映射修饰符

在映射过程中可以应用两个额外的修饰符: **readonly**和 **?** 它们分别影响可变性和可选性。

你可以通过前缀-或+来删除或添加这些修饰符。如果不添加前缀，则假定为+。

```
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>; // type UnlockedAccount = {id: string; name: string;} 
```

Required工具类型的源码中利用删除 **?** 修饰符，实现将给定类型的所有属性变为必选的。[跳转到Required工具类型](#Required\<Type>)



##### 通过as使键重新映射

在TypeScript 4.1及以后版本中，你可以用映射类型中的 as 语句实现键名重新映射:

```
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

你可以利用条件类型返回 never 来过滤不需要的键:（[跳转到Exclude的功能与原理](#Exclude<UnionType, ExcludedMembers>)）

```
// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>; // type KindlessCircle = {radius: number;}
```



##### 深入探索

映射类型也可以跟其他的功能搭配使用，举个例子，这是一个使用条件类型的映射类型，会根据对象是否有 `pii` 属性返回 `true` 或者 `false` :

```
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>; // type ObjectsNeedingGDPRDeletion = {id: false; name: true;}
```



#### 模板字面量类型 (Template Literal Types)

它们跟 JavaScript 的模板字符串是相同的语法，但是只能用在类型操作中。当使用模板字面量类型时，它会替换模板中的变量，返回一个新的字符串字面量：

```
type World = "world";
 
type Greeting = `hello ${World}`; // type Greeting = "hello world"
```



当模板中的变量是一个联合类型时，每一个可能的字符串字面量都会被表示：

```
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```



如果一个类型是由多个联合类型的模板字面量组成的，那么结果会交叉相乘，比如下面的例子就有 2 * 2 * 3 一共 12 种结果：

```
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
// type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
```



##### 替换字符串中的子串

实现将给定字符串`S`中的子串`From`类型全部替换为`To`类型：

```
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ?
  S : S extends `${infer Head}${From}${infer Tail}` ?
  `${Head}${To}${ReplaceAll<Tail, From, To>}` : S;
  
type Replaced = ReplaceAll<'foobarbar', 'bar', 'foo'>; // 'foofoofoo'
```



##### 内置字符操作类型

* Uppercase 把每个字符转为大写形式
* Lowercase 把每个字符转为小写形式
* Capitalize 把字符串的第一个字符转为大写形式
* Uncapitalize 把字符串的第一个字符转换为小写形式



## 类型断言

有的时候，你知道一个值的类型，但 TypeScript 不知道。

举个例子，如果你使用 `document.getElementById`，TypeScript 仅仅知道它会返回一个 `HTMLElement`，但是你却知道，你要获取的是一个 `HTMLCanvasElement`。

这时，你可以使用类型断言将其指定为一个更具体的类型：

```typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

就像类型注解一样，类型断言也会被编译器移除，并且不会影响任何运行时的行为。

你也可以使用尖括号语法（注意不能在 `.tsx` 文件内使用），是等价的：

```typescript
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

> 谨记：因为类型断言会在编译的时候被移除，所以运行时并不会有类型断言的检查，即使类型断言是错误的，也不会有异常或者 `null` 产生。



学习完映射类型、条件类型、索引访问类型等高级类型后，我们可以尝试实现**类型转换**和typescript**内置工具类**。



## 类型转换

##### 元组类型转联合类型

```
type TupleToUnion<T> = T extends (infer U)[] ? U : never;

TupleToUnion<[123, '456', true]>; // 123 | '456' | true
```

##### 元组类型转对象类型

```
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type obj = TupleToObject<typeof tuple>;
//  {
//   tesla: "tesla";
//   "model 3": "model 3";
//   "model X": "model X";
//   "model Y": "model Y";
//  }
```

##### string类型转number类型

```
type ToNumber<S extends string, L extends number[] = []> = S extends `${L["length"]}` ?
  L["length"] : ToNumber<S, [...L, 0]>;
  
type Number = ToNumber<'12'>; // 12  
```

##### string类型转联合类型

```
type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? 
	F | StringToUnion<R> : never;
	
type Str = StringToUnion<"hello">; // "h" | "e" | "l" | "l" | "o"
```





## 工具类型（Utility Types）

TypeScript 中内置了很多工具类型，我们无需导入，可以直接使用。 其中的很多都是比较常用的，接下来我们根据使用范围来一一介绍。

根据使用范围，可以将工具类型划分为：

- 操作接口类型
- 联合类型
- 函数类型
- 字符串类型



### 操作接口类型

假设我们有一个 `Person` 定义, 后面的例子中会用到它：

```text
interface Person {
  name: string;
  age?: number;
  weight?: number;
}
```

#### Partial\<Type>

功能：将一个类型的所有属性设置为可选。

实现：

```
type MyPartial<T> = {
  [Key in keyof T]?: T[Key];
};
 
type PartialPerson = Partial<Person>;

// 使用工具类型后
interface PartialPerson {
  name?: string;
  age?: number;
  weight?: number;
}
```



#### Required\<Type>

功能：和`Partial`相反，将给定类型的所有属性变为必选的。

实现：

```
type Required<T> = {
    [P in keyof T]-?: T[P];
};

type RequiredPerson = Required<Person>;

// 使用工具类型后
interface RequiredPerson {
  name: string;
  age: number;
  weight: number;
}
```



#### Readonly\<Type>

功能：将给定类型的所有属性设为只读，这意味着给定类型的属性不可以被重新赋值。

实现：

```
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type ReadonlyPerson = Readonly<Person>;

// 使用工具类型后
interface ReadonlyPerson {
  readonly name: string;
  readonly age?: number;
  readonly weight?: number;
}
```



#### Pick<Type, Keys>

功能：从给定的类型中选取出指定的键值，然后组成一个新的类型。

实现：

```
// 接收两个泛型参数，第一个 T 为给定的参数类型, 第二个参数为 T 类型中需要提取的键值 key
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type NewPerson = Pick<Person, 'name' | 'age'>;

// 使用工具类型后
interface NewPerson {
  name: string;
  age?: number;
}
```



#### Omit<Type, Keys>

功能：与 `Pick` 类型相反，`Omit` 是返回去除指定的键值之后返回的新类型。

实现：

```text
// 这里面用到了 Exclude，它的作用是排除指定的属性，也就是从 T的keys 中选取排除了指定键值后组成新类型
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type NewPerson = Omit<Person, 'weight'>;

// 使用工具类型后
interface NewPerson {
  name: string;
  age?: number;
}
```

通过从type中选取所有属性，然后删除Keys(字符串字面值或字符串字面值的联合)来构造类型。

需要注意：这里的实现限定了第二个泛型参数继承自 `keyof any`。 在 TypeScript 中， `keyof any` 指代可以作为对象键的属性，如下图：

```text
type T = keyof any; // => string | number | symbol
```



### 联合类型



#### Exclude<UnionType, ExcludedMembers>

功能：从联合类型中去除指定的类型。

实现：

```
// 使用了条件类型, 如果类型 T 可被分配给类型 U ，则不返回类型 T，否则返回此类型 T ，这样我们就从联合类型中去除了指定的类型。
type Exclude<T, U> = T extends U ? never : T;

type T = Exclude<'a' | 'b' | 'c', 'a'>; // => 'b' | 'c'
```



#### Extract<Type, Union>

功能：作用与 `Exclude` 正好相反，`Extract` 主要用来从联合类型中提取指定的类型，类似于操作接口类型中的 Pick 类型。

实现：

```text
type Extract<T, U> = T extends U ? T : never;

type T = Extract<'a' | 'b' | 'c', 'a'>; // => 'a'
```



#### NonNullable\<Type>

功能：从联合类型中去除 null 或者 undefined 的类型。 

实现：

```text
type NonNullable<T> = T extends null | undefined ? never : T;

// 等同于使用 Exclude
type NonNullable<T> = Exclude<T, null | undefined>

type T = NonNullable<string | number | undefined | null>; // => string | number
```



#### Record<Keys, Type>

功能：生成接口类型，然后我们使用传入的泛型参数分别作为接口类型的属性和值。

实现：

```text
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type MenuKey = 'home' | 'about' | 'more';
interface Menu {
  label: string;
  hidden?: boolean;
}

const menus: Record<MenuKey, Menu> = {
  about: { label: '关于' },
  home: { label: '主页' },
  more: { label: '更多', hidden: true },
};
```



### 函数类型

#### ConstructorParameters\<Type>

> `ConstructorParameters` 类型的实现需要使用 `infer` 关键字推断构造参数的类型。[跳转至infer的用法](#条件类型内的推断)

功能：用来获取构造函数的构造参数。

实现：

```text
type ConstructorParameters<T extends abstract new (...args: any) => any> 
    = T extends abstract new (...args: infer P) => any ? P : never;
```



#### Parameters\<Type>

功能：用来获取函数的参数并返回由参数类型组成的元组。

实现：

```text
type Parameters<T extends (...args: any) => any> 
    = T extends (...args: infer P) => any ? P : never;
    
type T0 = Parameters<() => void>; // []
type T1 = Parameters<(x: number, y?: string) => void>; // [x: number, y?: string]
```



#### ReturnType\<Type>

功能：用来获取函数的返回类型。

实现：

```
type ReturnType<T extends (...args: any) => any> 
    = T extends (...args: any) => infer R ? R : any;

type T0 = ReturnType<() => void>; // => void
type T1 = ReturnType<() => string>; // => string
```



### 字符串类型

#### 模板字符串

TypeScript 也提供了 `Uppercase`、`Lowercase`、`Capitalize`、`Uncapitalize`这 4 种内置的操作字符串的类型，如下示例：

```text
// 转换字符串字面量到大写字母
type Uppercase<S extends string> = intrinsic;
// 转换字符串字面量到小写字母
type Lowercase<S extends string> = intrinsic;
// 转换字符串字面量的第一个字母为大写字母
type Capitalize<S extends string> = intrinsic;
// 转换字符串字面量的第一个字母为小写字母
type Uncapitalize<S extends string> = intrinsic;

type T0 = Uppercase<'Hello'>; // => 'HELLO'
type T1 = Lowercase<T0>; // => 'hello'
type T2 = Capitalize<T1>; // => 'Hello'
type T3 = Uncapitalize<T2>; // => 'hello'
```

在上述示例中，这 4 种操作字符串字面量工具类型的实现都是使用 JavaScript 运行时的字符串操作函数计算出来的，且不支持语言区域设置。以下代码是这 4 种字符串工具类型的实际实现。

```text
function applyStringMapping(symbol: Symbol, str: string) {

  switch (intrinsicTypeKinds.get(symbol.escapedName as string)) {
    case IntrinsicTypeKind.Uppercase:
      return str.toUpperCase();

    case IntrinsicTypeKind.Lowercase:
      return str.toLowerCase();

    case IntrinsicTypeKind.Capitalize:
      return str.charAt(0).toUpperCase() + str.slice(1);

    case IntrinsicTypeKind.Uncapitalize:
      return str.charAt(0).toLowerCase() + str.slice(1);

  }

  return str;
}
```

但其实我们也可以使用类型体操自己实现这些操作字符串字面量工具类型。例如：

```
// 实现Capitalize

type LetterMap = {
  'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 
  'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N',
  'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T',
  'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
}


type MyCapitalize<S extends string> = S extends `${infer A}${infer B}` ?  
	A extends keyof LetterMap ? `${LetterMap[A]}${B}` : S 
	: S
```





参考链接：1.  [The TypeScript Handbook]( https://www.typescriptlang.org/docs/handbook/intro.html)

​				   2.[TypeScript内置工具类型及其实现原理](https://zhuanlan.zhihu.com/p/414678271)
