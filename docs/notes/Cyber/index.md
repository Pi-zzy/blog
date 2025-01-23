# 一，Windows系统

## 1，重要文件介绍

```python
# Program Files 软件程序存放目录，64位程序文件默认会安装到这个目录下，安装的时候是可以自行修改安装目录的，如果你安装的某个软件的时候，没有特意的修改安装路径，那么就去这个目录中找

# Program Files (x86)   32位程序文件默认会安装到这个目录下，x86是x86_32的简写，x64是x86_64的简写

# Windows   系统程序的核心目录

#用户     多用户文件(桌面)，现在的系统都支持多个用户登录操作，系统为了作区分，就在系统盘为每个用户分配一个默认的文件夹，这就是所谓的用户目录。
```

## 2.开机自启动设置

```python
# win + r 输入 shell:startup 回车，打开一个文件夹(里面都是开机自启动的程序的快捷方式) -----路径如下
## C:\Users\艾尼-aini\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

## 把应用快捷方式拖到这个文件夹里即可
```

## 3，查看电脑IP 地址

```python
## 终端  ipconfig
```

## 4,windows共享资源

```python
## 共享资源：文件右击属性，共享，添加 everyone
## 访问资源：\\192.168.1.5\Tools 
## 直接回车，就可以直接打开文件（如果设置过密码的话，需要用户名和密码登录)
```

## 5,window注册表

```python
## 打开 regedit
```

### 5.1 注册表是什么

```python
'''
    Windows操作系统称之为登录档案。是Microsoft Windows中的一个重要的数据库，注册表是
    windows操作系统中的一个核心数据库，其中存放着各种参数，直接控制着Windows的启动、硬件驱动程序的
    装载以及一些Windows应用程序的运行，从而在整个系统中起着核心作用。这些作用包括了软、硬件的相关配
    置和状态信息，比如注册表中保存有应用程序和资源管理器外壳的初始条件、首选项和卸载数据等，联网计算
    机的整个系统的设置和各种许可，文件扩展名与应用程序的关联，硬件部件的描述、状态和属性，性能记录和
    其他底层的系统状态信息，以及其他数据等。注册表中还包含 Windows 在运行期间不断引用的信息，例如，
    每个用户的配置文件、计算机上安装的应用程序以及每个应用程序可以创建的文档类型、文件夹和应用程序图
    标的属性表设置、系统上存在哪些硬件以及正在使用哪些端口。当一个用户准备运行一个应用程序，注册表提
    供应用程序信息给操作系统，这样应用程序可以被找到，正确数据文件的位置被规定，其他设置也都可以被使
    用。
     正常情况下，你可以点击开始菜单当中的运行，然后输入regedit或regedit.exe点击确定就能打开
    Windows操作系统自带的注册表编辑器了，友情慎重提醒，操作注册表有可能造成系统故障，若您是对
    Windows注册表不熟悉、不了解或没有经验的Windows操作系统用户建议尽量不要随意操作注册表，即便是必
    须要操作，那么也要提前做好注册表的备份工作。如果上述打开注册表的方法不能使用，说明你没有管理员权
    限，或者注册表被锁定，如果是没有权限，那么想办法解锁权限。
    简单来说：注册表是windows系统来记录和修改用户设置的，不论是软件还是硬件

'''
```

### 5.2 注册表结构

```python
'''
    注册表由项（也叫主键或称“键”）、子项（子键）和值构成。一个项就是分支中的一个文件夹，而子项就
    是这个文件夹当中的子文件夹，子项同样它也是一个项。一个值则是一个项的当前定义，由名称、数据类型以
    及分配的值组成。一个项可以有一个或多个值，每个值的名称各不相同，如果一个值的名称为空，则该值为该
    项的默认值。
     在注册表编辑器（regedit.exe）中，数据结构显示如下，其中，command键是open项的子项，(默
    认)表示该值是默认值，值名称为空，其数据类型为REG_SZ，数据值
    为%systemroot%/system32/notepad.exe"%1数据类型。
    注册表的数据类型主要有以下四种：显示类型（在编辑器中）数据类型说明
'''

   ## REG_SZ：字符串：文本字符串
   ## REG_MULTI_SZ：多字符串值：含有多个文本值的字符串
   ## REG_BINARY：二进制数：二进制值，以十六进制显示，
   ## REG_DWORD：双字值；一个32位的二进制值，显示为8位的十六进制值。
```

### 5.3 远程桌面注册表位置

```python
## 位置：HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server
## 双击  fDenyTSConnections 1-----> 0  
## 1 -------- 表示关闭   0 -----------表示开启
```

### 5.4 注册表控制开启自启动

```python
## HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
## 找到对应的自启动程序删除就可以


## 我们发现其实还有一些开启自启动的程序在注册表的上面这个位置看不到，那么可以能在其他位置
## 如 HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run ，如下


## 对于win10来讲的常见位置：
     ## HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
     ## HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
 
## 其他位置：这些大致了解即可，后面用到哪个就说哪个。

 ## Load注册键：
    ## HKEY_CURRENT_USER＼Software＼Microsoft＼WindowsNT＼CurrentVersion＼Windows＼load
  
 ## Userinit注册键：
	## HKEY_LOCAL_MACHINE＼SOFTWARE＼Microsoft＼WindowsNT＼CurrentVersion＼Winlogon＼Userinit
  
    ##这里也能够使系统启动时自动初始化程序。通常该注册键下面有一个userinit.exe，但这个键允许指定用逗号分隔的多个程序，例如“userinit.exe,OSA.exe”(不含引号)。
```

### 5.5 命令行添加注册表选项

```python
## reg add HKEY_CURRENT_USER\Software\Valve\Half-Life\Settings /v dms /t REG_SZ /d test /f
## 注：reg 命令;add 增加; /v 选项; /t 类型 ;/d 值;/f   不用提示就强行覆盖现有注册表项
```

## 6，window安全组策略

### 6.1 定义

```python
'''
    百度百科：组策略（英语：Group Policy）是微软Windows NT家族操作系统的一个特性，它可以控制用户
            帐户和计算机帐户的工作环境。组策略提供了操作系统、应用程序和活动目录中用户设置的集中化管理和配
            置。组策略的其中一个版本名为本地组策略（缩写“LGPO”或“LocalGPO”），这可以在独立且非域的计算机上
            管理组策略对象。
            通俗解释：组策略是一组策略的集合，策略就是制定的规则。组策略是将系统重要的配置功能汇集成各种配置
            模块，供用户直接使用，从而达到方便管理计算机的目的。简单点说，组策略就是修改注册表中的配置。当
            然，组策略使用自己更完善的管理组织方法，可以对各种对象中的设置进行统一的管理和配置，远比手工修改
            注册表方便、灵活，功能也更加强大
'''

## 这里我用win10专业版系统来演示，家庭版是不能操作这个功能的。
## 组策略分本地组策略和远程组策略，远程组策略我们学到域渗透的时候再讲解，先看本地组策略。
```

### 6.2 打开组策略

```Python
## 方式1：直接搜索 
## 方式2：win+r键，运行 gpedit.msc ，即可打开
```

### 6.3 组策略两大模块

```python
## 计算机配置：针对于本地计算机生效
## 用户配置：针对于用户生效
```

### 6.4 组策略禁用软件对应注册表位置

```python
## 前面定义的位置有提到过，组策略就是修改注册表中的配置。
## 首先把注册表打开，刚才禁用来着，别忘了取消一下，那么刚才我们演示的示例是对应修改的注册表什么位置呢？在这里
## HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\DisallowRun
```

### 6.5 组策略的实例

```python
## 限制某些软件运行
## 限制插U盘
```

## 7，windows服务

### 7.1 常见服务

```python
## DHCP Client服务
	## 这个服务程序如果没有开启，那么我们的电脑无法得到ip地址，就无法联网
  
## Print Spooler服务
	##没有这个服务程序，我们就没有办法打印东西。
  
## VMware Tools服务
	## 这是我们安装VMware tools工具软件的时候，Vmware自动在系统中添加的服务程序，就是为了一开机，我们的虚拟机就能和物理主机		进行数据交互等功能。
  
## Windows Update服务
	## 为什么我们的电脑能够自动检测到需要更新了，就是这个服务程序一直在后台默默的运行着，检测并提示系统更新。
```

### 7.2 添加服务

```python
## sc create jaden_typora binpath=C:\tools\typora\Typora\Typora.exe
    ## sc是windows用来创建服务的关键指令
    ## create表示创建的意思，固定搭配
    ## jaden_typora是自己指定的服务名称(只要和系统中已经有的服务名称没有冲突即可)
    ## binpath=程序路径
```

### 7-3 删除服务

```python
## sc delete "服务名称"
	## 例如： sc delete jaden_typora
```

## 8，用户和组

```python
'''
    用户：用户是登录系统的身份凭证
  
    用户组：一个系统可以有多个用户，为了方便管理这些用户，给多个用户统一分配操作权限等设置，可以将多
        个用户划分为一个组，给这个组做一些配置，那么在这个用户组中的用户都会按照组的配置来设定自己的操
        作。一个用户可以属于多个组，会同时继承多个组的操作权限。并且用户的权限其实还可以单独设定，甚至超
        过所属组的权限。
'''
```

### 8.1 常见的用户组说明

```python
'''
需要人为添加成员的组
   Administrators：管理员组，属于该administators本地组内的用户，都具备系统管理员的权限，它
们拥有对这台计算机最大的控制权限，可以执行整台计算机的管理任务。内置的系统管理员账号
Administrator就是本地组的成员，而且无法将它从该组删除，它的操作权限比Administrators组中的其
他成员还要高。
   Users：普通用户组，该组员只拥有一些基本的权利，例如运行应用程序，但是他们不能修改操作系统的
设置、不能更改其它用户的数据、不能关闭服务器级的计算机。
   Guests：来宾组，该组是提供没有用户帐户，但是需要访问本地计算机内资源的用户使用，该组的成员
无法永久地改变其桌面的工作环境。该组最常见的默认成员为用户帐号Guest。默认这个组是禁用状态，操作
权限最低。
    
动态包含成员的组：也就是它里面的成员是不固定的，随着用户的操作，组成员会动态变化，也可以手动添
加。
 INTERACTIVE：默认包含本地登录的账户
 Authenticated Users：包含了通过验证的用户，不包含来宾用户
 Everyone：所有账户都属于这个组(设置全面开放权限时使用)，注意，如果Guest帐号被启用时，则给
Everyone这个组指派权限时必须小心，因为当一个没有帐户的用户连接计算机时，他被允许自动利用Guest
帐户连接，但是因为Guest也是属于Everyone组，所以他将具备Everyone所拥有的权限。
'''
```

## 9,window常见指令

### 9.1 常见指令

```python
## 面板操作：
    exit -- 退出cmd面板
   cls -- 清除cmd面板上的历史记录
    
## 文件和目录操作：
   ## 指令 /?，可以查看指令的具体参数和对应能力，比如，查看cd指令怎么用，输入：cd /?
   ## c: -- 切换盘符
   ## cd指令 -- 切换路径，cd 路径，cd ..返回上一层目录，cd ../.. 返回上一层的上一层目录
   ## dir指令 -- 显示当前目录信息，目录下面的文件和文件夹列表
   ## md 文件夹名 -- 创建新文件夹
   ## type nul > 文件名 -- 创建一个空文件，比如type nul > jaden.txt
   ## del /s 文件名  -- 删除文件
   ## rd /s 文件夹名  -- 删除文件夹

## 用户操作相关指令：
   ## net user        #查看用户列表
   ## net user 用户名 密码         #改密码
   ## net user 用户名 密码 /add      #创建一个新用户
   ## net user 用户名 /del        #删除一个用户
   ## net user 用户名 /active:yes/no        #激活或禁用账户
  
## 用户组操作相关指令：
   ## net localgroup        #查看组列表
   ## net localgroup 组名        #查看该组的成员
   ## net localgroup 组名 /add         #创建一个新的组
   ## net localgroup 组名 用户名 /add        #添加用户到组
   ## net localgroup 组名 用户名 /del        #从组中踢出用户
   ## net localgroup 组名 /del        #删除组
```

### 9.2 激活Administrator用户

```python
## 执行指令 net user administrator /active:yes
## 切换administrator来登录，默认是没有密码的
```
