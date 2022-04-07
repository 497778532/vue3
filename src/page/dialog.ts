import CheckDialog from './CheckDialog.vue'
import getDialogComponent from '@/components/dialog'

export const opeUseModelDialog = function (api: Function, initData: any, childrenemit: Function | void) {
    getDialogComponent('dialog-product-useModel', CheckDialog)(api, initData)
}



