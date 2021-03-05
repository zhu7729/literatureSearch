import request from '@/utils/request';
import APIURL from '@/api/api';

export async function examplefn1(param) {
    const data = await request({
        url: APIURL.example,
        method: 'post',
        data: param
    });
    return data;
}
