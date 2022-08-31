>能够掌握Git 基本命令的使用
>能够使用Github创建和维护远程仓库
>能够掌握Git分支的基本使用
[toc]

# 起步
## 版本控制
1. 文件的版本
![](images/QQ截图20220825151215.png)
![](images/QQ截图20220825151425.png)
![](images/QQ截图20220825151456.png)
![](images/QQ截图20220825151531.png)
![](images/QQ截图20220825151611.png)
![](images/QQ截图20220825151636.png)
![](images/QQ截图20220825151636.png)


## 基础概念
![](images/QQ截图20220825152010.png)
![](images/QQ截图20220825152044.png)
![](images/QQ截图20220825152139.png)
![](images/QQ截图20220825152215.png)
![](images/QQ截图20220825152250.png)
![](images/QQ截图20220825152336.png)
![](images/QQ截图20220825152456.png)
![](images/QQ截图20220825152549.png)

# git 基础
## 安装
- 下载地址：https://git-scm.com/download
>Git GUI：Git提供的图形界面工具
Git Bash：Git提供的命令行工具
## 配置
1.打开Git Bash
2.设置用户名及用户邮箱
>写入到C:/Users/用户名文件夹l.gitconfig文件中。这个文件是Git的全局配置文件
配置一次即可永久生效。
- 设置用户名（英文）
```bash
git config --global user.name “username”
```
- 设置用户邮箱
```bash
git config --global user.email “useremail”
```
3.查看配置信息
- 查看用户名
```bash
git config --global user.name
```
- 查看邮箱
```bash
git config --global user.email
```
- 查看所有
```bash
git config --list  --global 
``` 
4.获取帮助
```bash
git config -h  
git help  config  
``` 
5.解决Git Bash乱码问题
[跳转](https://blog.csdn.net/seimeii/article/details/122713965?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166141487716782388078449%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166141487716782388078449&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-122713965-null-null.142^v42^pc_rank_34_1,185^v2^control&utm_term=git%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81&spm=1018.2226.3001.4187)
## 基本操作
![](images/QQ截图20220825193717.png)

### 1. 获取仓库的两种方式
![](images/QQ截图20220825154059.png)
![](images/QQ截图20220825154157.png)
### 2. git中文件的状态
![](images/QQ截图20220825155452.png)
![](images/QQ截图20220825155556.png)
![](images/QQ截图20220825161317.png)
### 3. 跟踪文件&提交更新
跟踪文件
![](images/QQ截图20220825161821.png)
提交更新
![](images/QQ截图20220825162142.png)
![](images/QQ截图20220825162440.png)
![](images/QQ截图20220825183130.png)
修改更新
![](images/QQ截图20220825162601.png)
![](images/QQ截图20220825164021.png)
![](images/QQ截图20220825164556.png)
撤销取消
![](images/QQ截图20220825182632.png)
![](images/QQ截图20220825183633.png)
![](images/QQ截图20220825183757.png)
![](images/QQ截图20220825184527.png)
### 4. 移除文件
![](images/QQ截图20220825185627.png)

### 5. 忽略文件
![](images/QQ截图20220825185833.png)
![](images/QQ截图20220825190127.png)
![](images/QQ截图20220825190543.png)
###  6. 查看提交文件
![](images/QQ截图20220825192422.png)
![](images/QQ截图20220825192750.png)
### 7. 回退到指定版本
![](images/QQ截图20220825193020.png)
![](images/QQ截图20220825193348.png)
![](images/QQ截图20220825193502.png)

# github
## 开源
![](images/QQ截图20220831114458.png)
![](images/QQ截图20220831114613.png)
![](images/QQ截图20220831115352.png)
![](images/QQ截图20220831115520.png)
![](images/QQ截图20220831115622.png)
## github
![](images/QQ截图20220831120048.png)
## 远程仓库的使用
1. 介绍
![](images/QQ截图20220831120323.png)
![](images/QQ截图20220831131213.png)
2. https
![](images/QQ截图20220831131359.png)
3. ssh
![](images/QQ截图20220831133324.png)
```git
ssh-keygen -t rsa -b 4096 -C "3255988713@qq.com"
```
![](images/QQ截图20220831133819.png)
```git
 ssh -T git@github.com
```
![](images/QQ截图20220831134237.png)
![](images/QQ截图20220831135237.png)
## 分支
### 1. 介绍
![](images/QQ截图20220831145933.png)
![](images/QQ截图20220831150028.png)
![](images/QQ截图20220831150146.png)
![](images/QQ截图20220831150303.png)
### 2. 查看—创建-切换
![](images/QQ截图20220831150613.png)
![](images/QQ截图20220831150726.png)
![](images/QQ截图20220831150954.png)
![](images/QQ截图20220831151340.png)
### 3. 合并—删除-解决冲突
![](images/QQ截图20220831152028.png)
![](images/QQ截图20220831153218.png)
![](images/QQ截图20220831154853.png)
### 4. 推送到远程仓库
![](images/QQ截图20220831160107.png)
![](images/QQ截图20220831160234.png)
### 5.跟踪、拉取、删除远程分支
![](images/QQ截图20220831160947.png)
![](images/QQ截图20220831161328.png)
![](images/QQ截图20220831161928.png)
#总结
![](images/QQ截图20220831162104.png)
