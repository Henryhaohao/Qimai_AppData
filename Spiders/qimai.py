# !/user/bin/env python
# -*- coding:utf-8 -*- 
# time: 2019/07/16--14:07
__author__ = 'Henry'


'''
项目:七麦数据完全版
榜单分类:brand_id/{}---2:畅销榜 1: 免费榜 0:付费榜
数据:一页20个,最多查看10页(200个),登录后可以查看更多
'''

import requests,execjs,json

with open('encrypt_20190716.js',encoding='utf-8') as f:
    jsdata = f.read()
jsdata = execjs.compile(jsdata)

# 只需要传入url(brand_id)和params(筛选条件)
url = 'https://api.qimai.cn/rank/indexPlus/brand_id/1'
params = {
    'brand':'all',
    'device':'iphone',
    'country':'cn',
    'genre':'5000',
    'date':'2019-07-16',
}
params_str = []
for i in params:
    params_str.append(params[i])
# print(params_str)
analysis = jsdata.call('get_analysis',url,params_str)
# print(analysis)
params['analysis'] = analysis
# print(params)
headers = {
    'Referer':'https://www.qimai.cn/rank',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
}
html = requests.get(url,params=params,headers=headers)
print(html.json())


