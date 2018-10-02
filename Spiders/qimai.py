# !/user/bin/env python
# -*- coding:utf-8 -*- 
# time: 2018/10/2--14:07
__author__ = 'Henry'


'''
项目:七麦数据完全版
榜单分类:brand_id/{}---2:畅销榜 1: 免费榜 0:付费榜
数据:一页20个,最多查看10页(200个),登录后可以查看更多
'''

import requests,execjs,json

with open('encrypt.js',encoding='utf-8') as f:
    jsdata = f.read()
jsdata = execjs.compile(jsdata)

# 只需要传入url(brand_id)和params(筛选条件)
url = 'https://api.qimai.cn/rank/indexPlus/brand_id/2'
params = {
    'brand':'all',
    'genre':'6014',
    'device':'iphone',
    'country':'us',
    'date':'2018-10-02',
    'page':'1' # 1或'1'都行
}
js_params = json.dumps(params)
analysis = jsdata.call('get_analysis',url,js_params)
form = json.loads(analysis)
headers = {
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
}
html = requests.get(url,params=form,headers=headers)
print(html.json())


