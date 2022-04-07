import { get, post, local } from '../index'

export default {
    login: post('/Passport/Login'),
    getNav: local('../category/index.json'),
    // getNode: api('/ords/epfcms/cmsItem/queryCmsItemBySeriesId/010003')
}