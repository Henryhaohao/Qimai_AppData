# !/user/bin/env python
# -*- coding:utf-8 -*- 
# time: 2018/11/12--11:48
__author__ = 'Henry'

'''
项目:七麦数据登录 (登录后可以查看更多种数据)
'''

import requests, execjs, json, urllib.parse, time

req = requests.Session()
with open('encrypt.js', encoding='utf-8') as f:
    jsdata = f.read()
jsdata = execjs.compile(jsdata)


def qimai_login():
    # 获取set-cookie
    # 1
    url = 'https://www.qimai.cn/account/signin/r/%2F'
    headers = {
        'Referer': 'https://www.qimai.cn/rank',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
    }
    html = req.get(url, headers=headers)
    # 2
    url = 'https://api.qimai.cn/account/pageCheck/type/signin'
    analysis = jsdata.call('get_analysis', url, '{}')  # 登录不用传递params,为空{}
    analysis = json.loads(analysis).get('analysis')
    url = 'https://api.qimai.cn/account/pageCheck/type/signin?analysis={}'.format(urllib.parse.quote(analysis))
    html = req.get(url, headers=headers)
    print(html.text)
    # 3
    url = 'https://api.qimai.cn/account/userinfo'
    analysis = jsdata.call('get_analysis', url, '{}')  # 登录不用传递params,为空{}
    analysis = json.loads(analysis).get('analysis')
    url = 'https://api.qimai.cn/account/userinfo?analysis={}'.format(urllib.parse.quote(analysis))
    html = req.get(url, headers=headers)
    print(html.text)
    # 4
    url = 'https://api.qimai.cn/index/index'
    analysis = jsdata.call('get_analysis', url, '{}')  # 登录不用传递params,为空{}
    analysis = json.loads(analysis).get('analysis')
    url = 'https://api.qimai.cn/index/index?analysis={}'.format(urllib.parse.quote(analysis))
    html = req.get(url, headers=headers)
    print(html.text)
    # 5
    url = 'https://api.qimai.cn/account/getVerifyCodeImage?{}'.format(str(int(time.time() * 1000)))
    html = req.get(url, headers=headers)
    with open('captcha.jpg', 'wb') as f:
        f.write(html.content)
    # 6 提交登录
    captcha = input('请输入验证码:')
    url = 'https://api.qimai.cn/account/signinForm'
    analysis = jsdata.call('get_analysis', url, '{}')  # 登录不用传递params,为空{}
    analysis = json.loads(analysis).get('analysis')
    login_url = 'https://api.qimai.cn/account/signinForm?analysis={}'.format(urllib.parse.quote(analysis))
    data = {
        'username': username,
        'password': password,
        'code': captcha,  # 验证码
    }
    html = requests.post(login_url, data=data, headers=headers)
    print(html.json())
    if html.json().get('msg') == '登录成功':
        print('登录成功!用户名为:' + html.json().get('userinfo').get('username'))
        print('获取Cookie:' + html.headers.get('Set-Cookie'))  # USERINFO 就是登录成功返回的cookie
    elif html.json().get('msg') == '验证码错误，请重试':
        print('验证码错误，请重试!')
    elif html.json().get('msg') == '用户名或密码错误':
        print('用户名或密码错误')


if __name__ == '__main__':
    username = input('请输入你的七麦账号:')
    password = input('请输入你的七麦密码:')
    qimai_login()
