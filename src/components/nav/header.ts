import { extend } from "vue/types/umd"


interface NavHeadeFace {
    url: string
    text: string
    [propName: string]: any
}
const assign = Object.assign || ((target: any, source: any) => { Object.keys(source).forEach(i => { target[i] = source[i] }); return target });
/**
 * 获取对象的get,set属性
 * @param {Object} obj
 * @param {Number} n
 */
class BaseModel {
    constructor() {
        console.dir(this.constructor)
    }
    [propName: string]: any
    get writablePropertyNames() {
        return Object.keys(this)
    }
    setProperties(model: any) {
        this.writablePropertyNames.forEach(k => {
            this[k] = model[k]
        });
        return this
    }
}
new BaseModel()
export class BreadcrumbNav {
    constructor() {
    }
    _top_menu = []
    get topMenu() { return this._top_menu }
    set topMenu(value) { console.log('this._top_menu', this._top_menu); this._top_menu = new NavHeader({ items: value }) }
    // topMenu: any[] = []
    // topActive: string = '#/dashboard';
    // topClick(topItem: { Url: string, [propName: string]: any }) {
    //     this.topActive = topItem.url
    // }
    // bind(navData: any[]) {
    //     let top: any[] = []
    //     for (let i = 0; i < navData.length; i++) {
    //         const item = new NavHeader(navData[i])
    //         top.push(item)
    //     }
    //     this.topMenu = top
    // }
    get SideMenu() {

        return []
    }

}
class NavHeader extends BaseModel {
    constructor(model: NavHeadeFace) {
        super()
        console.log('model', model)
        this.setProperties(model);
    }
    text = ''
    url = ''
    children = [],
}