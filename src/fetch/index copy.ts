// let u: undefined = undefined
// console.log(u)
// let u1: null = null
// const app: () => [] = () => { return [] }
// class Person {

import { Header } from "element-ui"

// }
// const p1: Person = new Person()
// const p2: {
//     name: string,
//     age: number
// } = {
//     name: '哈哈',
//     age: 123
// }
// const num = 2 //类型推断
// const num2 = 3//类型推断
// const num3 = num + num2//类型推断

// function getTotal(one: number, two: number): void {
//     console.log('111')
//     //viod 无返回值
// }
// function getQ(): never {
//     while (true) {

//     }
//     //执行不完定义never
//     console.log('1111')
// }
// const numberArr: number[] = [1, 2, 3]
// const stringArr: string[] = ['1', '2', '3']
// const arr: (number | string)[] = [1, 2, 3]
// type lady = {
//     name: string,
//     age: number
// }
// //或者
// class madam {
//     name: string
//     age: number
// }
// const xiaojiejie: madam[] = [{ name: '刘颖', age: 18 }, { name: '刘亦菲', age: 20 }]

// // interface girl {
// //     name: string
// //     age: number
// //     boom: number
// //     line?: number,

// // }
// // const girl2 = {
// //     name: '打碎',
// //     age: 19,
// //     boom: 12,
// //     line: 1
// // }
// // const getGirl = (girl2: girl): void => {
// //     console.log(girl2.name, girl2.age, girl2.line)
// // }
// // getGirl(girl2)
// //元组差不多是数组的加强版
// // const xiaojiejie2: (string | number)[] = [1, '2', 3]  数组
// // const xiaojiejie2: [number,string,number] = [1, '2', 3] 元组
// // const xiaojiejie3: [string, string, number][] = [['1', '1', 3]]


// interface girl {
//     name: string
//     age: number
//     boom: number
//     line?: number,
//     [propName: string]: any,
//     say(): string

// }
// const girl2 = {
//     name: '打碎',
//     age: 19,
//     boom: 12,
//     line: 1,
//     sex: '女',
//     say() {
//         return '哈哈哈'
//     }
// }
// const getGirl = (girl2: girl): void => {
//     console.log(girl2.name, girl2.age, girl2.line, girl2.sex, girl2.say())
// }
// getGirl(girl2)

// class Parent {
//     constructor() {
//         this.need = '需要吃饭'
//     }
//     work = '会工作'
//     need = ''
// }

// class Dajiejie extends Parent implements girl {
//     constructor() {
//         super()
//         console.log(this.work, this.need)
//     }
//     name: 'haha'
//     age: 18
//     line: 1
//     boom: 1
//     say() {
//         return '1'
//     }

// }

// new Dajiejie()


// interface Stutend {
//     name: string
//     age: number
//     boom: number
//     line?: number,
//     [propName: string]: any,
//     say(): string
// }
// interface SmallStend extends Stutend {
//     teach: string
// }
// const student1: SmallStend = {
//     teach: '1',
//     name: '哈哈',
//     age: 10,
//     boom: 1,
//     say() {
//         return '哈哈'
//     }

// }
// //如何访问类,
// //pubilc 默认会加, p
// //protected 继承可以使用 私有的,外面不能访问
// // private 继承不可使用,外面不可访问
// class Tai {
//     public name: string
//     public age: number
//     public say() {
//         console.log('222')
//     }
//     protected
//     private product: object
// }
// const tao = new Tai()


// class TheShy {
//     constructor(public name: string) {

//     }
// }
// class Uzi extends TheShy {
//     constructor(public age: number) {
//         super('这是什么')
//     }
// }
// const the1 = new Uzi(1)
// console.log(the1.name, the1.age)


// set get 
// class Xiaojiejie {
//     constructor(protected _age: number) {

//     }
//     get age() {
//         return this._age - 10
//     }
//     set age(a: number) {
//         this._age = a + 3
//     }
// }
// const n = new Xiaojiejie(20)
// n.age = 30
// console.log(n.age)
// 静态类
// class Girl {
//     static say() {
//         return '123'
//     }
// }
// console.log(Girl.say())
// 抽象类
// AbstractRange
// tscongfig.json   

//联合类型和类型保护
interface Person {
    name: boolean,
    say: () => {}
}
interface Stuend {
    name: boolean,
    skill: () => {}
}

function getData(product: Person | Stuend) {
    // if (product.name) {
    //     (product as Person).say()
    // } else {
    //     (product as Stuend).skill()
    // }
    // if ('say' in product) {
    //     product.say()
    // }
    // if()

}

//枚举类型 
// enum Select {
//     max = 1,
//     min,
//     big,
//     small
// }
// console.log(Select.max)
//泛型
// function join<T, P>(one: T, two: P) {
//     return `${one}${two}`
// }
// join<string, number>('1', 2)
// //此时有个需求前面是string，后面就必须是string

// function list<T>(params: T[]) {
//     return params
// }

// list<string>(['1', '2', '3'])

//泛型继承
// interface Person2 {
//     name: string
// }

// class Girl<T extends Person2> {
//     constructor(private _girls: T[]) {

//     }
//     getGirls(index: number): string {
//         return this._girls[index].name
//     }
// }
// const gg = new Girl<{ name: string }>([{ name: '1' }, { name: '1' }])

// console.log(gg.getGirls(1))


//
// class Product<T> {
//     constructor(private params: T[]) {

//     }
//     getData(index: number): T {
//         return this.params[index]
//     }
// }
// const o1 = new Product<string>(['哈哈1', '哈哈2', '哈哈3'])
// const o2 = new Product<number>([1, 2, 3])
// console.log(o1.getData(1))
// console.log(o2.getData(1))



// class obj={
//     Header:
// }
// obj.hah = 213
