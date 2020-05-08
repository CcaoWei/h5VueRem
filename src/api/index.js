import request from '@/router/axios';
//首页
export const getIndex = () => {
    return request({
        url: '/api/mall_api/wx/home/index',
        method: 'get'
    })
};
