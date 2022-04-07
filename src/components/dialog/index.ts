import CheckDialog from './CheckDialog.vue'
import { createApp, h, resolveComponent } from 'vue'
import ElementPlus from 'element-plus'


const getDialogComponent = (id: string, component: any) => {
    return (api: Function, initData: any) => {
        let dom = document.querySelector(`#${id}`);
        if (!dom) {
            dom = document.createElement("div")
            dom.id = id;
        }
        document.querySelector('body')?.appendChild(dom)
        const dialogApp = createApp(component, {
            api, initData, remove() {
                if (dom) {
                    dialogApp.unmount()
                    document.body.removeChild(dom)
                }
            }
        })
        dialogApp.use(ElementPlus).mount(dom)
    }
}

export default getDialogComponent


