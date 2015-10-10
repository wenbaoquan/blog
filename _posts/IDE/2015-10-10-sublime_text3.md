---
layout: post
title: 如何将sublime3打造成python/django IDE开发利器
category: tools
tags: sublime， tools
description: sublime，一个小巧又强大的编辑器。
---

## 安装Package Control

    使用 ctrl+`快捷键 或者 菜单项View > Show Console 来调出命令界面

    然后复制粘贴下面的Python代码到命令输入框中:

    import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

    另外提供Sublime text 2的Package Control的安装代码

    import urllib2,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404' + 'e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')

安装完毕后, 就可以使用快捷键 ctrl+shift+p (Win, Linux) 或 cmd+shift+p (OS X), 其中以 Package Control: 开头的都是其相关命令, 最常用的可能就是 Package Control: Install Package, Package Control: Remove Package, Package Control: List Packages 这几个命令了.

## 推荐安装的插件

现在可以使用 Package Control 安装其他插件了. 使用快捷键 ctrl+shift+p (Win, Linux) 或 cmd+shift+p (OS X), 输入 Package Control: Install Package 回车, 输入 package 名再回车安装:

Anaconda
Anaconda是目前 Sublime 3 中最好的 Python 自动补全和语法提示插件, 并且提供了"跳转到定义", "查找使用", "显示文档", "自动重命名"等 IDE 中插件的功能.

Djaneiro
提供了对Django的支持.


## 世界！我来了
哈哈，弄了一下午终于能看到了。^_^