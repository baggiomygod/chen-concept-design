import fetch from './fetch'
import productionData from './mock/productionData.js'
import categoryData from './mock/category'
import companyInfoData from './mock/companyInfo'
import configData from './mock/configData.js'
export const getNav = (data: any) => fetch('/pc/nav/list', data, 'get')
// export const getProductCategory = (data: any) => fetch('/pc/goods/type/list', data, 'get')
export const getProductCategory = (data: any) =>  Promise.resolve(categoryData)
// export const getProducts = (data: any) => fetch('/pc/goods/list', data, 'get')
export const getProducts = () => Promise.resolve(productionData)
export const getProductInfo = (data: any) => fetch('/pc/goods/info', data, 'get')
export const getNews = (data: any) => fetch('/pc/article/list', data, 'get')
// export const getNewsInfo = (data: any) => fetch('/pc/article/info', data, 'get')
export const getNewsInfo = (data: any) => Promise.resolve(companyInfoData)
// export const getWebConfig = () => fetch('/pc/config', {}, 'get')
export const getWebConfig = () => Promise.resolve(configData)