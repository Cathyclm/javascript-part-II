import _ from 'lodash'

           
console.clear();
console.log("=================");
console.log('hello world 6');
console.log("=================");


{
  const object = {}
  const array = []

  let a = 1
  let b = a

  b = 2
  console.log(a,b);

  const person = {
    name: "Kathy",
    age: 18,
    income: 0
  }
  
  const person2 = person 

  person2.age = 30
  console.log(person,"\n", person2);
  person.income = 100
  console.log(person,"\n", person2);

  const person3 = {...person }
  // ...person 把person中的内容都放在这个object里面,只能展开一层
  console.log(person3);
  person3.age = 50
  console.log(person,"\n", person3);
}

{
  console.clear();

  const person = {
    name: "Kathy",
    age: 18,
    profile: {
      account:[
       {
        id: 1,
        income: 0,
       },
       {
        id: 2,
        income: 100,
       }
      ]
    }
  }
   const person3 = {...person}
   person3.profile.account[0].income = 1000

   console.log(person);
   // 浅拷贝，深拷贝 lodash库能真正做到深拷贝

   const person4 = _.cloneDeep(person)
   console.clear();
   console.log(person4);
   person4.profile.account[0].income = 5000
   console.clear();
   console.log(person);
   console.log(person4);
}

{
  // 复杂类型，前3个常见
  console.log(new Object()); //{}
  console.log(new Array()); //[]
  console.log(new Set()); //{}
  console.log(new Map()); //{}
  console.log(new WeakSet()); //{}
  console.log(new WeakMap()); //{}
  console.log(new Date()); //特殊类型，当前页面时间

}

{
  console.clear();
  const target = { a: 1, b: 2}
  const source = { b: 4, c: 5}

  const returnTarget = Object.assign (target,source)
  const returnTarget2 = Object.assign (target, source)
  // not a pure function,
  //  pure function 是可控的。
  // FP: function pure
  // Object.prototye 原型方法
  // Object.assign 实体方法

  
  console.log(returnTarget, returnTarget2);

  console.log(target); //target 被修改了
}

{
  // 现在主要用combineTarget a是key，1 是 value，key-value pair, 后者会覆盖前者
  const target = { a: 1, b: 2}
  const source = { b: 4, c: 5}
  const combineTarget = {...target, ...source}
  const combineTarget2 = {...source, ...target}

  console.log(combineTarget);
  
  console.log(combineTarget2);
  
  console.log(target);
}

{
 console.clear();
}

 {
  const target = {a : 1, b : 2}
  const source = {b : 4, c : 5}

  const returnTarget = Object.assign(target, source)
  const returnTarget2 = Object.assign(target, source)

  console.log(returnTarget);
  console.log(returnTarget2);
  console.log(target);
  console.log(source);
 }

{
  // 
  console.clear();
  const target = {a : 1, b : 2}
  const source = {b : 4, c : 5}
  // 原型链：：直接展开{...target},combineTarget 目前都用这种方法，这种方法target不会修改
  const combineTarget = {...target, ...source}

  console.log(combineTarget);
  console.log(target);
}

{
  console.clear();
 const user = {
  name: "Kathy",
  age: 18,
  profile: {
    address: "xx.xx.xxx",
    email: "yy.yyy.yy"
  },
  //object 里面可以放各种东西，如简单数据，复杂数据和函数。draw：function()表示函数，是"方法"表示 加减乘除 等。this.name本质是user里面的name
  
  draw: function() {
    console.log(this.name);
  }
 }
console.log(user.name);

// user.draw 加括号可以调用执行
user.draw()
 
// newUser是user衍生出来的，原型链,先看newUser自己有没有.draw(),如果没有，再往上找prototype,这就是基于对象的语言。
const newUser = Object.create(user)

console.log(user);
console.log(newUser);
newUser.draw()

console.log(Object.hasOwn(user,"name"));
console.log(Object.hasOwn(user,"age"));
console.log(Object.hasOwn(user,"draw"));
console.log(Object.hasOwn(newUser,"name"));
console.log(Object.hasOwn(newUser,"age"));
console.log(Object.hasOwn(newUser,"draw"));
console.log(Object.hasOwn(user, toString));

// 只有原型链上才有toString

console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('age'));
console.log(user.hasOwnProperty(toString));

console.log(user.isPrototypeOf(newUser));
// 检查user是不是newUser的原型

const user2 = {...user}
console.log(user2.isPrototypeOf(newUser));
// console.log(newUser.__proto__);检查newUser的原型链，但比较危险，原型链仍然可以修改
}

{
  console.clear();
  const user = {
    name: "Kathy"
  }
console.log(user);
user.age = 18 //增加年龄.age
console.log(user);
delete user.age //删除年龄 delete.age
console.log(user); 
user.age = 18
user.ege = 30 //写错了age为ege仍然可以打印，出了差错

console.log(user);


console.log(Object.isExtensible(user)); //说明此时user是可以扩展的，就是可以随便加上内容。如何阻止扩展呢？就是不能随便改动

Object.preventExtensions(user);//不能扩充

console.log(Object.isExtensible(user)); //此时再打印user可以扩展，就是false，因为上一条是加上了不能扩充的条件

delete user.ege
console.log(user);
// user.ege = 30
// console.log(user); //提示就是不能扩展，不能增加，但可以删除和更改，如何不能删呢？

user.age = 30
console.log(user);

}

{
  console.clear();
  const user = {
    name: "Kathy",
    age: 18
  }

  Object.seal(user) //Object.seal（） 不能删除
  console.log(Object.isExtensible(user));
  
  // delete user.age = 30，不能删除，但是内容可以更改
  user.age = 30
  console.log(user);
}

{
  console.clear();
  const user = {
    name: "Kathy",
    age: 18
  }

  Object.freeze(user)
  console.log(Object.isExtensible(user)); //不能改
// user.ege = 30
// delete user.age
// user.age = 30

const newUser = _.cloneDeep(user) //深度拷贝
console.log(newUser);//新的用户，可以做修改、增加、删除
console.log(Object.isExtensible(newUser));

}

// Array
// Array.from()
// Array.isArray()

{
  const name = "Kathy    Chen" //string
  const arrayName = Array.from(name)
  console.log(arrayName);
  console.log(arrayName.toString());
// filter是筛选
  // 传统函数 function
  function filterFunc(element){
    console.log(element);
  }



// Es6 箭头函数
  const filterFunc2 = element => {
    console.log(element);
  }
  // const newArrayName = arrayName.filter(element => {
  //   console.log(element); //打印出来单独的元素
  // } )
  const newArrayName = arrayName.filter(filterFunc)
  const newArrayName2 = arrayName.filter(filterFunc2)

  // 下面就是筛选不等于空格的string
  const newArrayName3 = arrayName.filter(element => element != ' ')
  console.log(newArrayName3);

  console.log(typeof arrayName); //typeof 在碰到复杂类型时都认为是object
  console.log(Array.isArray(name));
  console.log(Array.isArray(arrayName));

  console.log(arrayName.join()); //把数组再还原
  console.log(arrayName.join(''));
  console.log(arrayName.join(' '));
  console.log(arrayName.join('_'))
}


{
  const array1 = ['a','b','c']
  const array2 = ['d','e','f']

  const array3 = array1.concat(array2)
  console.log(array3);
  console.log(array1,array2);

// 现在用下面这种新的方法拼合
  const array4 = [...array1, ...array2]
  console.log(array4);
}

{
  const array1 = [5,12,8,130,71,55]
  const found = array1.find(element => element > 40) //只找大于40的第一个
  console.log(found);
  const index = array1.findIndex(element => element > 40)
  console.log(index); //找位置
  console.log(array1[index]);//寻找变量值是多少
  const foundLast = array1.findLast(element => element > 40)//从后往前找
  console.log(foundLast);
  const indexLast = array1.findLastIndex (element => element > 40)
  console.log(indexLast);
  console.log(array1[indexLast]);

  const filter = array1.filter(element => element > 40)
  console.log(filter);

  const newMap = array1.map(element => element*10)
  console.log(newMap);
  console.log(array1); //... 都是pure function
}

{
  console.clear();
  const list = [1,2,[3,4,5,[6,[7,8,9]]]]

  console.log(list);

  const newList = list.flat()
  console.log(newList);

  // 扁平化处理，把array里面的数都拆出来 infinity是所有的都拆出来
  const newList2 = list.flat(1)
  console.log(newList2);
  const newList3 = list.flat(2)
  console.log(newList3);
  const newList4 = list.flat(3)
  console.log(newList4);

  const newList5 = list.flat(Infinity)
  console.log(newList5);
}

{
  // key-value 迭代器 “for循环”
  const list = ['A','B','C']

  let iter = list.keys() //此处不能用const

  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);

  iter = list.values()

  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
  console.log(iter.next().value);
}

 {
  const list = ['A','B','C']
  list.push('D') //推进最后一个
  
  console.log(list);

  const getPop = list.pop() //弹出，并显示弹出的是什么。“堆栈”结构，后进先出，只有后面开口。“队列”结构，两头开口，后进后出
  console.log(list);
  console.log(getPop);

  list.shift()
  console.log(list); //队列
  list.unshift('1')
  console.log(list);
 }

 {
  const list = [374, 435, 23, 343, 7843, 85]

  const newList = [...list.sort((a, b) => a - b)] //检查a，b两个值，如果a-b大于0，则调换位置。“冒泡”排序

  const newList2 = [...list.sort((a, b) => b - a)] 

  console.log(newList);
  
  console.log(newList2);

  const list2 = [374, 435,'age', 343, 23, 'name', 7843, 85] //加入age，name则分段排序
  const newList3 = [...list2.sort((a, b) => a - b)]
  console.log(newList3);


const list3 = [374, 435, 'age', 343, 23, '18', 7843, 85]
const newList4 = [...list3.sort((a, b) => a - b)]
console.log(newList4);

// 分段排序，加上‘｜‘
const list4 = [374, 435, 23, '|', 3452, 343, 7843, '|', 85, 1534, 945]
const newList5 = [...list4.sort((a, b) => a -b)]
console.log(newList5);
// // 去掉竖线，加filter 元素不等于 ‘｜’
// const newList6 = [...list4.sort((a, b) => a -b)].filter(element => element != "|")
// console.log(newList6);

const list5 = list4.filter(element => element != '|') //把‘｜’去掉，整体排序
const newList7 = [...list5.sort((a, b) => a - b)]
console.log(newList7);
 }

// 排序，去重，扁平化，操控dom