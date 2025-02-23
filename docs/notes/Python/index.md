# 必知必会基础

1：为什么学习Python？

    因为他强大，上到抓外星人，下到喂小猫咪都能做。

2：Python和Java、PHP、C、C#、C++等其他语言的对比？

    Java 编程语言是个简单、面向对象、分布式、解释性、健壮、安全与系统无关、可移植、高性能、多线程和动态的语言。

    php语法吸收了C语言、Java和Perl的特点,入门门槛较低，易于学习，使用广泛，主要适用于Web开发领域。

    C#是微软公司发布的一种面向对象的、运行于.NET Framework之上的高级程序设计语言。

    C语言，它既有高级语言的特点，又具有汇编语言的特点，它是结构式语言。

    python语言，是一种面向对象，直译式计算机程序设计语言，Python语法简洁而清晰，具有丰富和强大的类库。

    3：简述解释型和编译型编程语言？

    解释型语言编写的程序不需要执行，边执行一行，边翻译一次，效率一般较低。

    编译型语言就是先编译，将程序编译成机器语言，然后执行程序，一般而言程序效率较高。

4：Python解释器种类以及特点？

    CPython 从Python官网下载并且安装完后Python相应的解释器为CPython解释器。

    IPython IPython是基于CPython之上的一个交互式解释器，好比国产浏览器外观不一样，内核就是调用的IE。

    PyPy PyPy采用JIT技术，对Python代码进行动态编译，所以可以显著提高Python代码的执行速度。

    Jython Jython是运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行

    IronPython IronPython和Jython类似，只不过IronPython是运行在微软.Net平台上的Python解释器，可以直接把Python代码编译成.Net的字节码。

    在Python的解释器中，使用广泛的是CPython。

关于这一点我在以前的文章特意说到过这个[地址](http://www.langzi.fun/Python%E8%A7%A3%E9%87%8A%E5%99%A8.html)

5：位和字节的关系？

    位："位(bit)"是电子计算机中最小的数据单位。每一位的状态只能是0或1。8个二进制位构成1个"字节(Byte)"，它是存储空间的基本计量单位。1个字节可以储存1个英文字母或者半个汉字，换句话说，1个汉字占据2个字节的存储空间。

    字："字"由若干个字节构成，字的位数叫做字长，不同档次的机器有不同的字长。例如一台8位机，它的1个字就等于1个字节，字长为8位。如果是一台16位机，那么，它的1个字就由2个字节构成，字长为16位。字是计算机进行数据处理和运算的单位。

6：b、B、KB、MB、GB 的关系？

    计算机存储信息的大小，最基本的单位是字节，一个汉字由两个字节组成，字母和数字由一个字节组成。 容量的单位从小到大依次是：字节（B）、KB、MB、GB、TB。它们之间的关系是

    1TB=1024GB

    1GB=1024MB

    1MB=1024KB

    1KB=1024B

7：请至少列举5个PEP8规范（越多越好）。

    具体详情参见Python PEP8规范官网 https://legacy.python.org/dev/peps/pep-0008/

    主要分为以下几类 代码编排   文档编排   空格的使用  注释    文档描述  命名规则   编程建议

    第一，其中编程建议暂时举例如下：

    No1：推荐使用 .join() 而不使用+ 。

    No2：尽可能使用is is not   取代‘==’，‘!=’，比如if x is not None要优于if x。

    No3：使用基于类的异常，每个模块或包都有自己的异常类，此异常类继承自Exception。

    No4：异常中不要使用裸露的except，except后跟具体的exceptions。

    No5：异常中try的代码尽可能少。

    No6：使用startswith() and endswith()代替切片进行序列前缀或后缀的检查。

    No7：使用isinstance()比较对象的类型。

    No8：判断序列空或不空。

    第二，其中命名建议如下：

    No1：模块命名尽量短小，使用全部小写的方式，可以使用下划线。

    No2：包命名尽量短小，使用全部小写的方式，不可以使用下划线。

    No3：类的命名使用CapWords的方式，模块内部使用的类采用_CapWords的方式。

    No4：异常命名使用CapWords+Error后缀的方式。

    No5：全局变量尽量只在模块内有效，类似C语言中的static。实现方法有两种，一是all机制，二是前缀一个下划线。

    No6：函数命名使用全部小写的方式，可以使用下划线。

    No7：常量命名使用全部大写的方式，可以使用下划线。

    No8：类的属性（方法和变量）命名使用全部小写的方式，可以使用下划线。

    No9：类的属性有3种作用域public、non-public和subclass API，可以理解成C++中的public、private、protected，non-public属性前，前缀一条下划线。

    No10：类的属性若与关键字名字冲突，后缀一下划线，尽量不要使用缩略等其他方式。

    No11：为避免与子类属性命名冲突，在类的一些属性前，前缀两条下划线。比如：类Foo中声明__a,No1：访问时，只能通过Foo__a，避免歧义。如果子类也叫Foo，那就无能为力了。

    No12：类的方法第一个参数必须是self，而静态方法第一个参数必须是cls。

    第三，其中Python常用技巧如下：

    使用 Counter 进行计数统计。

    enumerate获取键值对。

    os.path.join用于拼接路径，好处是可以根据系统自动选择正确的路径分隔符”/”或”\”。

    os.path.split 把路径分割成dirname和basename，返回一个元组。

    os.listdir 获取路径下所有文件，返回list。

    os.getcwd()获取文件的当前路径。

    列表推导式  如 [i for i in range(10]。

    对于轻量级循环，可尽量使用列表推导式,熟练使用列表推导式可以很多情况下代替map，filter等操作。

    函数调用里的*arg和**kwarg。

    chr()  frozenset()   list()	range()	vars()等内置函数 。

    打印输出函数带有颜色如下：

    print("\033[32;1m找的数在mid[%s]右面\033[0m" % data_set[mid])。

    sys.getfilesystemencoding() #返回将Unicode文件名转换成系统文件名的编码的名字。

    os.makedirs('dir1/dir2') 可生成多层递归目录。

    尽管 classmethod 和 staticmethod 非常相似，但在用法上依然有一些明显的区别。classmethod 必须有一个指向类对象的引用作为第一个参数，而 staticmethod 可以没有任何参数。

    第四，python常用功能：

    python的四个重要内置函数：getattr、hasattr、delattr和setattr较为全面的实现了基于字符串的反射机制。他们都是对内存内的模块进行操作，并不会对源文件进行修改。

当然我这边还有一些笔记[地址](http://www.langzi.fun/PEP8%E8%A7%84%E5%88%99.html)

8：isinstance作用？isinstance作用以及应用场景？

    isinstance 用来判断一个对象是否是一个已知的类型。

9：什么是面向对象的mro？

    解析类继承的查找顺序    MRO:Method Resolution Order,即方法解析顺序,是python中用于处理二义性问题的算法 。

我还以为是ORM。。。这下真的涨姿势了

10：Python的作用域？

    本地作用域（Local）→当前作用域被嵌入的本地作用域（Enclosing locals）→全局/模块作用域（Global）→内置作用域（Built-in）

python的作用域我以前特意写过[地址](http://www.langzi.fun/Python%20%E5%8F%98%E9%87%8F%E7%9A%84%E4%BD%9C%E7%94%A8%E5%9F%9F.html)

11：装饰器的写法以及应用场景。

    我们回到日志的例子   并创建一个包裹函数，能让我们指定一个用于输出的日志文件。

    在函数中嵌入装饰器    带参数的装饰器是典型的闭包函数。

    装饰器能有助于检查某个人是否被授权去使用一个web应用的端点(endpoint)。它们被大量使用于Flask和Django web框架中。

    12：用尽量多的方法实现单例模式。

    执行元类的__new__方法和__init__方法用来实例化类对象，__call__ 方法用来对实例化的对象的实例即类的对象进行控制。__call__方法会调用实例类的 __new__方法，用于创建对象。返回对象给__call__方法，然后调用类对象的 __init__方法，用于对对象初始化。

    利用类的静态方法或者类方法，实现对函数初始化的控制。该方法需要手动调用静态方法实现实例。本质上是手动版的__new__方法。

    先执行了类的__new__方法（我们没写时，默认调用object.__new__），实例化对象；然后再执行类的__init__方法，对这个对象进行初始化，所有我们可以基于这个，实现单例模式。

    静态变量方法：

    Python 的模块就是天然的单例模式，因为模块在第一次导入时，会生成 .pyc 文件，当第二次导入时，就会直接加载 .pyc 文件，而不会再次执行模块代码。

    def singleton(cls, *args, **kw):    instance = {}    def _singleton(args):        if cls not in instance:            instance[cls] = cls(*args, **kw)        return instance[cls]    return _singleton @singleton class A:    pass

    装饰器

    class Singleton1(type):    def__init__(self, *args, **kwargs):        self.__instance = None        super(Singleton1,self).__init__(*args, **kwargs)    def __call__(self, *args, **kwargs):        if self.__instance is None:            self.__instance = super(Singleton1,self).__call__(*args, **kwargs)        return self.__instance

    class Singleton2(type):_inst = {}    def__call__(cls, *args, **kwargs):        print(cls)        if cls not in cls._inst:            cls._inst[cls] = super(Singleton2, cls).__call__(*args)        return cls._inst[cls] class C(metaclass=Singleton1):    pass

    class Singleton(object):    def__new__(cls,a):        if not hasattr(cls, '_instance'):            cls._instance = object.__new__(cls)        return cls._instance    def __init__(self,a):        self.a = a    def aa(self):        print(self.a) a = Singleton("a")

装饰器说白了就是把闭包的东西改一下用到这里，使用系统自带的functools更加方便，具体原理我这边也有的哦[链接](http://www.langzi.fun/Python%20%E8%A3%85%E9%A5%B0%E5%99%A8.html)

13：metaclass作用？以及应用场景？

    为了当创建类使能够自动地改变类。通常会为API做这样的事情，希望可以创建符合当前上下文的类。

    用来指定指定某个类是由哪个类创建的

这个考到的python的面向对象编程中的class方法介绍，其实这些我用的很少，虽然当时只是做了笔记但是并没有融会贯通，我觉得使用函数比较方便(可能是因为的项目比较小，并且我的变量命名方法不够好)[地址](http://www.langzi.fun/Python%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B.html)

14：什么是反射？以及应用场景？

    python有两个内置函数exec和eval，他们同样能够执行字符串。反射它的核心本质其实就是利用字符串的形式去对象（模块）中操作（查找/获取/删除/添加）成员，一种基于字符串的事件驱动！

15：1、2、3、4、5 能组成多少个互不相同且无重复的三位数？

    combinations_with_replacement 组合,有重复　　（有放回抽样组合）

    combinations 组合,没有重复　　（不放回抽样组合）

    permutations 排列　　（不放回抽样排列）

    product 笛卡尔积　　（有放回抽样排列）

    使用python内置的排列组合函数（不放回抽样排列）

    组成后的数值不相同，且组合的三个位数之间数字不重复。

    60个

16：创建类有两种方式？

    特殊方式(基于元类的方式)

    普通方式

17：列举面向对象中的特殊成员以及应用场景？

    __getitem__ 、 __setitem__ 、__delitem__ 用于索引操作，如字典。分别表示获取、设置、删除数据__str__ 如果一个类中定义了__str__方法，那么在打印对象时，默认输出该方法的返回值 __dict__ 查看类或对象中的所有成员 __call__ 对象后面加括号，触发执行__doc__  描述类的信息

18：静态方法和类方法区别？

    三种方法从不同层次上来对方法进行了描述：实例方法针对的是实例，类方法针对的是类，他们都可以继承和重新定义，而静态方法则不能继承，可以认为是全局函数。。

    实例方法，类方法，静态方法都可以通过实例或者类调用，只不过实例方法通过类调用时需要传递实例的引用（python 3可以传递任意对象，其他版本会报错）。

19：如何判断是函数还是方法？

    看他的调用者是谁，如果是类，需要传入一个参数self的值，这时他就是一个函数，如果调用者是对象，不需要给self传入参数值，这时他是一个方法。

20：列举面向对象中带爽下划线的特殊方法？

    当创建一个新实例时调用__new__,初始化一个实例时用__init__。只有在__new__返回一个cls的实例时后面的__init__才能被调用。__new__方法会返回一个创建的实例,而__init__什么都不返回。

    __new__是一个静态方法,而__init__是一个实例方法.

    __call__ __doc__ __class__ __del__ __dict__ __str__

    __init__

    __new__

21：是否使用过functools中的函数？其作用是什么？

    用于装饰器中，functools.wraps()，主要是用来修复装饰器。实际上固定了int()函数的关键字参数base  如 int2 = functools.partial(int, base=2)。

    最后，创建偏函数时，实际上可以接收函数对象 *args和**kwargs这3个参数。

    简单总结functools.partial的作用就是，把一个函数的某些参数给固定住（也就是设置默认值），返回一个新的函数，调用这个新函数会更简单。

    python 中提供一种用于对函数固定属性的函数(与数学上的偏函数不一样)。

    functools用于高阶函数：指那些作用于函数或者返回其他函数的函数。通常情况下，只要是可以被当做函数调用的对象就是这个模块的目标。

22：面向对象中super的作用？

    在super机制里可以保证公共父类仅被执行一次，至于执行的顺序，是按照MRO（Method Resolution Order），方法解析顺序进行的。MRO 就是类的方法解析顺序表, 其实也就是继承父类方法时的顺序表。

    super 是用来解决多重继承问题的，直接用类名调用父类方法在使用单继承的时候没问题，但是如果使用多继承，会涉及到查找顺序（MRO）、重复调用（钻石继承）等种种问题。

    super() 函数是用于调用父类(超类)的一个方法。

23：面向对象深度优先和广度优先是什么？

    深度优先：不全部保留节点，占用空间小，有回溯操作（即有入栈/出栈操作），运行速度慢。

    广度优先：保留全部节点，占用空间大；无回溯操作（既无入栈、出栈操作）、运行速度快。

24：Python面向对象中的继承有什么特点？

    在继承中基类的构造（__init__()方法）不会被自动调用，它需要在其派生类的构造中亲自专门调用。有别于C#。

    新类经常是基于已经存在的类，这样就可以提升代码的复用程度。

    建造系统中的类，避免重复操作。

    继承有点类似与我们生物学上的遗传，就是子类的一些特征是来源于父类的，儿子遗传了父亲或母亲的一些性格，或者相貌，又或者是运动天赋。有点种瓜得瓜种豆得豆的意思。面向对象里的继承也就是父类的相关的属性，可以被子类重复使用，子类不必再在自己的类里面重新定义一回，父类里有点我们只要拿过来用就好了。而对于自己类里面需要用到的新的属性和方法，子类就可以自己来扩展了。

25： 什么是重载？

    重载就是类里面相同方法名，不同形参的情况，可以是形参类型不同或者形参个数不同，或者形参顺序不同，但是不能使返回值类型不同。

26：什么是重写？

    重写很简单就是把子类从父亲类里继承下来的方法重新写一遍，这样，父类里相同的方法就被覆盖了，当然啦，你还是可以通过super.CaculSalary方法来调用父类的工资计算方法。

27：什么是多态？

    我们在有一些方法在父类已经定义好了，但是子类我们自己再用的时候，发现，其实，我们的虽然都是计算工资的，但是普通员工的工资计算方法跟经理的计算方法是不一样的，所以这个时候，我们就不能直接调用父类的这个计算工资的方法了。这个时候我们就需要用到面向对象的另一个特性，多态。我们要在子类里面把父类里面定义计算工资的方法在子类里面重新实现一遍。多态包含了重载和重写。

28：谈谈你对面向对象的理解？

    所谓的面向对象就是将我们的程序模块化，对象化，把具体事物的特性属性和通过这些属性来实现一些动作的具体方法放到一个类里面，这就是封装。封装是我们所说的面相对象编程的特征之一。除此之外还有继承和多态。

29：如何使用python删除一个文件？

    import shutil shutil.rmtree()。

    os.rmdir(path)删除目录 path，要求path必须是个空目录。

    os.removedirs(path) 递归地删除目录。

    os.remove(path)删除文件 path

30：如何生成一个随机数？

    random.uniform(a,b):返回指定范围内的浮点数。

    随机实数：random.random( ):返回0到1之间的浮点数

    random.randrange(start,stop,[,step])：返回一个范围在(start,stop,step)之间的随机整数，不包括结束值。

    随机整数：random.randint(a,b)：返回随机整数x,a<=x<=b

31：os和sys模块的作用？

    os.chmod('pathfile',os.W_OK) 改变文件权限模式。

    os.access('pathfile',os.W_OK) 检验文件权限模式，输出True，False。

    os.path.expandvars(path)  #根据环境变量的值替换path中包含的”$name”和”${name}”。

    os.path.expanduser(path)  #把path中包含的"~"和"~user"转换成用户目录。

    os.path.commonprefix(list) #返回list(多个路径)中，所有path共有的最长的路径。

    os.path.getmtime(path) 返回path所指向的文件或者目录的最后修改时间。

    os.path.getatime(path) 返回path所指向的文件或者目录的最后存取时间。

    os.path.join(path1[, path2[, ...]]) 将多个路径组合后返回，第一个绝对路径之前的参数将被忽略。

    os.path.isdir(path) 如果path是一个存在的目录，则返回True。否则返回False。

    os.path.isfile(path) 如果path是一个存在的文件，返回True。否则返回False。

    os.path.isabs(path) 如果path是绝对路径，返回True。

    os.path.lexists  #路径存在则返回True,路径损坏也返回True。

    os.path.exists(path) 如果path存在，返回True；如果path不存在，返回False。

    os.path.basename(path) 返回path最后的文件名。如何path以／或\结尾，那么就会返回空值。即os.path.split(path)的第二个元素。

    os.path.dirname(path) 返回path的目录。其实就是os.path.split(path)的第一个元素。

    os.path.split(path) 将path分割成目录和文件名二元组返回。

    os.path.abspath(path) 返回path规范化的绝对路径。

    os.environ 获取系统环境变量。

    os.system(bash command) 运行shell命令，直接显示。

    os.name 字符串指示当前使用平台。win->'nt'; Linux->'posix'。

    os.pathsep 用于分割文件路径的字符串。

    os.linesep 当前平台使用的行终止符，win下为\t\n,Linux下为\n。

    os.sep 操作系统特定的路径分隔符，win下为\,Linux下为/。

    os.stat('path/filename') 获取文件/目录信息。

    os.rename(oldname,new) 重命名文件/目录。

    os.remove() 删除一个文件。

    os.listdir('dirname') 列出指定目录下的所有文件和子目录，包括隐藏文件，并以列表方式打印。

    os.rmdir('dirname') 删除单级空目录，若目录不为空则无法删除，报错；相当于shell中rmdir 。

    os.mkdir('dirname') 生成单级目录；相当于shell中mkdir dirname。

    os.removedirs('dirname1') 若目录为空，则删除，并递归到上一级目录，如若也为空，则删除，依此类推。

    os.pardir 获取当前目录的父目录字符串名：('..')。

    os.curdir 返回当前目录: ('.')。

    os.chdir(dirname) 改变当前脚本工作目录；相当于shell下cd。

    os.getcwd() 获取当前工作目录，即当前python脚本工作的目录路径。

    sys模块

    sys.displayhook(value) #如果value非空，这个函数会把他输出到sys.stdout(详细使用参考文档)

    sys.setdefaultencoding(name) #用来设置当前默认的字符编码(详细使用参考文档)

    sys.stdin.readline() #从标准输入读一行，sys.stdout.write(a) 屏幕输出a

    sys.getwindowsversion() #获取Windows的版本

    sys.executable #Python解释程序路径

    sys.builtin_module_names #Python解释器导入的内建模块列表

    sys.getdefaultencoding() #返回当前你所用的默认的字符编码格式

    sys.version_info #'final'表示最终,也有'candidate'表示候选，表示版本级别，是否有后继的发行

    sys.api_version #解释器的C的API版本

    sys.byteorder #本地字节规则的指示器，big-endian平台的值是'big',little-endian平台的值是'little'

    sys.exec_prefix #返回平台独立的python文件安装的位置

    sys.exc_clear() #用来清除当前线程所出现的当前的或最近的错误信息

    sys.stdin.read() #输入一行

    sys.stdin #标准输入

    sys.stdout.writelines() #无换行输出

    sys.stdout.write('aaa') #标准输出内容

    sys.stdout #标准输出

    sys.maxint # 最大的Int值

    sys.platform #返回操作系统平台名称

    sys.version #获取Python解释程序的版本信息

    sys.hexversion #获取Python解释程序的版本值，16进制格式如：0x020403F0

    sys.exit(n) #退出程序，正常退出时exit(0)

    sys.exc_info() #获取当前正在处理的异常类,exc_type、exc_value、exc_traceback当前处理的异常详细信息

    sys.modules #返回系统导入的模块字段，key是模块名，value是模块

    sys.modules.keys() #返回所有已经导入的模块列表

    sys.path #返回模块的搜索路径，初始化时使用PYTHONPATH环境变量的值

    sys.argv #命令行参数List，第一个元素是程序本身路径

    sys模块主要是用于提供对python解释器相关的操作

相关资料链接[地址os](http://www.langzi.fun/Python%20os%20%E6%A8%A1%E5%9D%97.html) [地址sys](http://www.langzi.fun/Python%20sys%20%E6%A8%A1%E5%9D%97.html)

32：谈谈你对闭包的理解？

    一般情况下，在我们认知当中，如果一个函数结束，函数的内部所有东西都会释放掉，还给内存，局部变量都会消失。但是闭包是一种特殊情况，如果外函数在结束的时候发现有自己的临时变量将来会在内部函数中用到，就把这个临时变量绑定给了内部函数，然后自己再结束。

    在一个外函数中定义了一个内函数，内函数里运用了外函数的临时变量，并且外函数的返回值是内函数的引用。这样就构成了一个闭包。

33：用Python实现一个二分查找的函数。

    def binary_search(data_set, data):

    data_set_len = len(data_set)

    if data_set_len > 1:

    mid = int(data_set_len / 2)

    if data_set[mid] == data:  # find it

    print("找到数字", data_set[mid])

    elif data_set[mid] > data:  # 找的数在mid左面

    print("\033[31;1m找的数在mid[%s]左面\033[0m" % data_set[mid])

    return binary_search(data_set[0:mid], data)

    else:  # 找的数在mid右面

    print("\033[32;1m找的数在mid[%s]右面\033[0m" % data_set[mid])

    return binary_search(data_set[mid + 1:], data)

    else:

    if data_set_len[0] == data:

    print("找到数字啦", data_set[0])

    else:

    print("没的分了,要找的数字[%s]不在列表里" % data)

关于算法这边我忙不过来，但是以后肯定会深入学习的，目前我只会插入排序，选择排序和二分法[地址](http://www.langzi.fun/Python%E7%AE%97%E6%B3%95%E4%B9%8B%E6%8E%92%E5%BA%8F%E4%B8%8E%E4%BA%8C%E5%88%86%E6%B3%95.html)

34:简述 生成器、迭代器、可迭代对象 以及应用场景？

    有__iter__和__next__方法的对象就是一个迭代器，但是迭代器不一定是生成器。

    生成器：有yield关键字的函数就是一个生成器，生成器一定是一个迭代器

    生成器：带有yield的函数不再是一个普通函数，而是一个生成器。当函数被调用时，返回一个生成器对象。不像一般函数在生成值后退出，生成器函数在生成值后会自动挂起并暂停他们的执行状态。

    迭代器：是访问集合元素的一种方式，从集合的第一个元素开始访问，直到所有元素被访问结束。其优点是不需要事先准备好整个迭代过程中的所有元素，仅在迭代到某个元素时才开始计算该元素。适合遍历比较巨大的集合。__iter__()：方法返回迭代器本身， __next__()：方法用于返回容器中下一个元素或数据。

答案这边说的其实不准确具体看

    迭代器(Iterator)与可迭代对象(Iterable)的区别

    只要可以用作for循环的都是可迭代对象
	只要可以用next()函数的都是迭代器对象
	列表,字典,字符串是可迭代对象但是不是迭代器对象，如果想变成迭代器对象可以使用iter()进行转换
	Python的for循环本质上是使用next()进行不断调用
	一般由可迭代对象变迭代器对象

[地址1](http://www.langzi.fun/Python%20%E7%94%9F%E6%88%90%E5%99%A8%E4%B8%8E%E7%94%9F%E6%88%90%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%AF%B9%E8%B1%A1.html) [地址2](http://www.langzi.fun/Python%20%E7%94%9F%E6%88%90%E5%99%A8%E4%B8%8E%E7%94%9F%E6%88%90%E5%8F%AF%E8%BF%AD%E4%BB%A3%E5%AF%B9%E8%B1%A1.html)

35：常用字符串格式化哪几种？

    print('hello {first} and {second}'.format(first='df',second='another df'))

    print('hello %(first)s and %(second)s'%{'first':'df' , 'second':'another df'})

    print('hello %s and %s'%('df','another df'))

36：请用代码简答实现stack  Queue。

    queue就是管道，分成三种模式。
	定义
	q=Queue.queue()
	传入数据
	q.put(1)
	获取数据
	q.get()
	还可以获取里面的数据是否没空
	if q.empty()

管道可以用来存储数据，作为中转，可以写出一个简单的生产者消费者模式[地址](http://www.langzi.fun/Python%20Queue%20%E6%A8%A1%E5%9D%97.html)

37：logging模块的作用？以及应用场景？

    简单来讲就是，我们通过记录和分析日志可以了解一个系统或软件程序运行情况是否正常，也可以在应用程序出现故障时快速定位问题。比如，做运维的同学，在接收到报警或各种问题反馈后，进行问题排查时通常都会先去看各种日志，大部分问题都可以在日志中找到答案。再比如，做开发的同学，可以通过IDE控制台上输出的各种日志进行程序调试。对于运维老司机或者有经验的开发人员，可以快速的通过日志定位到问题的根源。可见，日志的重要性不可小觑通过log的分析，可以方便用户了解系统或软件、应用的运行情况；如果你的应用log足够丰富，也可以分析以往用户的操作行为、类型喜好、地域分布或其他更多信息；如果一个应用的log同时也分了多个级别，那么可以很轻易地分析得到该应用的健康状况，及时发现问题并快速定位、解决问题，补救损失。

    软件程序运行故障分析与问题定位

    程序调试

具体使用方法[地址](http://www.langzi.fun/Python%20logging%20%E6%A8%A1%E5%9D%97.html)

38：日志级别的种类。

    CRITICAL 当发生严重错误，导致应用程序不能继续运行时记录的信息

    ERROR 由于一个更严重的问题导致某些功能不能正常运行时记录的信息

    WARNING 当某些不期望的事情发生时记录的信息（如，磁盘可用空间较低），但是此时应用程序还是正常运行的

    INFO 信息详细程度仅次于DEBUG，通常只记录关键节点信息，用于确认一切都是按照我们预期的那样进行工作

    DEBUG 最详细的日志信息，典型应用场景是 问题诊断

39：如何在函数中设置一个全局变量 ?

    在函数的内部，通过global声明，使在函数内部中设置一个全局变量，这个全局变量可以在任意的函数中进行调用。

40：一行代码实现删除列表中重复的值 ?

    print(sorted(set(list(列表)),key=list(列表).index)) # sorted output

41：如何用一行代码生成[1,4,9,16,25,36,49,64,81,100] ?

    a = [pow(i,2) for i in range(1,11)]

42：比较a = [1,2,3] 和 b = [(1),(2),(3) ] 以及 b = [(1,),(2,),(3,) ] 的区别？

    print([1, 2, 3])               [1, 2, 3]

    print([(1), (2), (3)])          [1, 2, 3]

    print((1,), (2,), (3,))         (1,) (2,) (3,)

    a 列表里面的的每个元素都是数字类型，

    b 列表里面的元素也是数字，这里面的小括号代表的优先运算符，

    c 列表里面的每个元素都是元组。

43：如何实现[‘1’,’2’,’3’]变成[1,2,3] ?

    第一种：a = [int(i) for i in a]

    第二种：b = map(int, a)

44：如何实现 “1,2,3” 变成 [‘1’,’2’,’3’] ?

    a = '1,2,3'.split(',')

45：def func(a,b=[]) 这种写法有什么坑？

    函数陷阱，列表是一个可变类型，可以在任何的地方修改他那里面的数据。

46：求结果  
	1 or 2    1

    1 and 2   2

    1 < (2==2)   False

    1 < 2 == 2  True

47：求结果。

    [ i % 2 for i in range(10) ]   [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]。

    ( i % 2 for i in range(10) )  <generator object`<genexpr>` at 0x000000000C0EA938>。

48：什么是正则的贪婪匹配？

    区别重点在：.* 和 .*？。

    非贪婪格式：xx.*?xx  。

    贪婪格式：xx.*xx  是尝试匹配尽可能少的字符。

49：re的match和search区别？

    search：从字符的起始位置开始匹配，匹配到第一个符合的就不会去匹配了。

    match：尝试从字符串起始位置开始匹配如果没有就会返回None。

    使用search的话语要用group来获取结果，group(0)就是获取匹配符加结果一起的，group(1)就是匹配到的结果

50：至少列举8个常用模块都有那些？

    re，os，random，json，time，numpy，opencv-python，pytz，pyMysql，pygame，pillow-	python，pip，Django

51：如何安装第三方模块？以及用过哪些第三方模块？

    在cmd终端可以使用pip install 安装第三方模块。

    可以在pycharm里面的settings里面手动的添加第三方模块。

    现在，让我们来安装一个第三方库——Python Imaging Library，这是Python下非常强大的处理图像的工具库。一般来说，第三方库都会在Python官方的pypi.python.org网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者pypi上搜索，比如Python Imaging Library的名称叫PIL在命令提示符窗口下尝试运行pip，如果Windows提示未找到命令，可以重新运行安装程序添加pip。如果你正在使用Windows，确保安装时勾选了pip和Add python.exe to Path。如果你正在使用Mac或Linux，安装pip本身这个步骤就可以跳过了。在Python中，安装第三方模块，是通过setuptools这个工具完成的。Python有两个封装了setuptools的包管理工具：easy_install和pip。目前官方推荐使用pip

52：一行代码实现9*9乘法表？

    print('\n'.join([' '.join(['%s*%s=%-2s' % (y,x,x*y) for y in range(1,1+x)]) for x in range(1,10)]))

53：filter、map、reduce的作用？

    filter是筛选出其中满足某个条件的那些数据，字面意思是过滤，比如挑出列表中所有奇数。

    reduce是用某种方法依次把所有数据丢进去最后得到一个结果，字面意思是化简，比如计算一个	列表所有数的和的过程，就是维持一个部分和然后依次把每个数加进去。

    map是用同样方法把所有数据都改成别的，字面意思是映射，比如把列表的每个数都换成其平方。

54：对给定的List L进行排序，对List、Dict进行排序，Python提供了两个方法。

    用List的成员函数sort进行排序，在本地进行排序，不返回副本。

    用built-in函数sorted进行排序（从2.4开始），返回副本，原始输入不变

    Python中的map函数应用于每一个可迭代的项，返回的是一个结果list。如果有其他的可迭代参数传进来，map函数则会把每一个参数都以相应的处理函数进行迭代处理。map()函数接收两个参数，一个是函数，一个是序列，map将传入的函数依次作用到序列的每个元素，并把结果作为新的list返回。

    filter()函数接收一个函数 f 和一个list，这个函数 f 的作用是对每个元素进行判断，返回 True或 False，filter()根据判断结果自动过滤掉不符合条件的元素，返回由符合条件元素组成的新list。

55：列举常见的内置函数？

    数据集合：len，sorted，enumerate，all，any，zip，filter，map

    数据集合——字典和集合：dict，set，frozenset

    序列：reversed，slice

    序列——字符串相关的：str，format，bytes，bytearry，memoryview，ord，chr，ascii，repr

    序列——列表和元组相关的：list和tuple

    数字——数学运算：abs，divmod，min，max，sum，round，pow

    数字——进制转换相关：bin，oct，hex

    数字——数据类型相关：bool，int，float，complex

    dir() 默认查看全局空间内的属性，也接受一个参数，查看这个参数内的方法或变量

    callable(o)，o是参数，看这个变量是不是可调用。

    帮助方法(help)

    __import__导入一个模块

    open()  打开一个文件，返回一个文件操作符(文件句柄)

    hash(o) o是参数，返回一个可hash变量的哈希值，不可hash的变量被hash之后会报错

    id(o) o是参数，返回一个变量的内存地址

    type(o) 返回变量o的数据类型

    print() 输出

    input() 输入

    locals()——获取执行本方法所在命名空间内的局部变量的字典

    globals()——获取全局变量的字典

    delattr()	hash()	memoryview()	set()

    complex()	hasattr()	max()	round()

    compile()	globals()	map()	reversed()__import__()

    classmethod()	getattr()	locals()	repr()	zip()

    callable()	format()	len()	  property()	type()

    bytes()	float()	iter() print()	tuple()

    bytearray()	filter()	issubclass()	pow()	super()

    bool()	exec()	isinstance()	ord()	sum()

    bin()	  eval()	int()	  open()	  str()

    ascii()	enumerate()	input()	oct()	    staticmethod()

    any()	divmod()   id()	    object()	   sorted()

    all()   dir()	   hex()	next()	slice()

    abs()	dict()	help()	min()	setattr()

56：求

    v = dict.fromkeys(['k1', 'k2'], [33])

    v['k1'].append(666)

    print(v)

    v['k1'] = 777

    print(v)

    {'k1': [33, 666], 'k2': [33, 666]}

    {'k1': 777, 'k2': [33, 666]}

    v = dict.fromkeys(['k1', 'k2'], [])

    print(v)

    v['k1'].append(666)

    print(v)

    v['k1'] = 777

    print(v)

    {'k1': [], 'k2': []}

    {'k1': [666], 'k2': [666]}

    {'k1': 777, 'k2': [666]}

57：Python的可变类型和不可变类型？

    对于不可变类型，无论创建多少个不可变类型，只要值相同，都指向同个内存地址（若值不同，那么一定指向不同的内存地址）。

    对于可变类型，无论创建多少个可变类型，只要值相同，都不指向同个内存地址（除非进行复制操作，那么他们将会指向同一个地址）。

    修改代码声明两个相同值的浮点型变量，查看它们的id，发现它们并不是指向同个内存地址，这点和int类型不同（这方面涉及Python内存管理机制，Python对int类型和较短的字符串进行了缓存，无论声明多少个值相同的变量，实际上都指向同个内存地址。）

    对于不可变类型int，无论创建多少个不可变类型，只要值相同，都指向同个内存地址。同样情况的还有比较短的字符串。

    对不可变类型的变量重新赋值，实际上是重新创建一个不可变类型的对象，并将原来的变量重新指向新创建的对象（如果没有其他变量引用原有对象的话（即引用计数为0），原有对象就会被回收）。

    不可变：数字、字符串、元祖

    可变：列表、字典

    Python的每个对象都分为可变和不可变

58：Python垃圾回收机制？

    分代收集：Python把内存根据对象存活时间划分为三代，对象创建之后，垃圾回收器会分配它们所属的代。每个对象都会被分配一个代，而被分配更年轻的代是被优先处理的，因此越晚创建的对象越容易被回收。连在一起，构成一个有向图，对象构成这个有向图的节点，而引用关系构成这个有向图的边）。

    标记-清除：一些容器对象，比如list、dict、tuple，instance等可能会出现引用循环，对于这些循环，垃圾回收器会定时回收这些循环（对象之间通过引用（指针）。

    引用计数：Python在内存中存储每个对象的引用计数，如果计数变成0，该对象就会消失，分配给该对象的内存就会释放出来。

    Python中的垃圾回收是以引用计数为主，标记-清除和分代收集为辅。

这个确实涉及到短板了，需要补充这方的知识点

59：简述Python的深浅拷贝以及应用场景？

    浅拷贝指仅仅拷贝数据集合的第一层数据，深拷贝指拷贝数据集合的所有层。所以对于只有一层的数据集合来说深浅拷贝的意义是一样的，比如字符串，数字，还有仅仅一层的字典、列表、元祖等。

    深拷贝：copy.deepcopy	浅拷贝：copy.copy

    导入模块：import copy

60：is和==的区别。

    is是对比地址，==是对比值。

61：*arg和**kwarg作用。

    接收参数。

    函数定义时传的*arg /**kwarg。

    分割参数	**kwarg，字典“出没”。

    *arg：元组或列表“出现”。

62：pass的作用？

    保证语义完整

    保证格式完整

    空语句 do nothing

63：lambda表达式格式以及应用场景？

    为了解决那些功能很简单的需求而设计的一句话函数。

64：字符串常用功能？

    长度 循环 键、值、键值对 删除 新增 索引 字典常用操作 包含 长度 切片 索引 元组常用操作 包含 循环 切片 长度  删除 追加 切片 索引 列表常用操作 切片 索引 长度 分割 移除空白

    words = 'today is a wonderfulday'。 print(words.strip('today'))#如果strip方法指定一个值的话，那么会去掉这两个值。 print(words.count('a'))#统计字符串出现的次数。 print(words.index('is'))#找下标。 print(words.index('z'))#找下标如果元素不找不到的话，会报错。 print(words.find('z'))#找下标，如果元素找不到的话，返回-1。 print(words.replace('day','DAY'))#字符串替换。 print(words.isdigit())#判断字符串是否为纯数字。 print(words.islower())#判断字符串是否为小写字母。 print(words.isupper())#判断字符串是否为大写字母。 print(words.startswith('http'))#判断是否以某个字符串开头。 print(words.endswith('.jpg'))#判断是否以某个字符串结尾。 print(words.upper())#将字符串变成大写。 print(words.lower())#将字符串变成小写。

65：列举布尔值为False的常见值？

    False 0 [] () {} 字符串 布尔值 零 列表  元组 字典。

66：xreadlines和readlines的区别？

    二者使用时相同，但返回类型不同，xreadlines返回的是一个生成器，readlines返回的是list。

67：xrange和range的区别？

    Python 3.x已经去掉xrange，全部用range代替。

    range和xrange都是在循环中使用，输出结果一样。

    range返回的是一个list对象，而xrange返回的是一个生成器对象(xrange object)。

    xrange则不会直接生成一个list，而是每次调用返回其中的一个值，内存空间使用极少，因而性能非常好。

    xrange函数说明：用法与range完全相同，所不同的是生成的不是一个数组，而是一个生成器。

    range函数说明：range([start,] stop[, step])，根据start与stop指定的范围以及step设定的步长，生成一个序列。

68：Python3和Python2中 int 和 long的区别？

    long整数类型被Python3废弃，统一使用int

69：用一行代码实现数值交换。

    b = 2   a = 1

    a,b = b,a

70：列举 Python2和Python3的区别？

    在Python2中，print 被视为一个语句而不是一个函数，这是一个典型的容易弄混的地方，因为在 Python 中的许多操作都需要括号内的参数来执行。

71：三元运算规则以及应用场景？

    (expr1) ? (expr2) : (expr3);

    三元运算符的功能与“if...else”流程语句一致，它在一行中书写，代码非常精练、执行效率更高。
	浪子 ps:这个话说不是php的语法吗- -在python中应该是这样
	x = 1
	a = 7 if x>0 else 5
	print(a)

72：字节码和机器码的区别？

    机器码存在着多至100000种机器语言的指令。这意味着不能把这些种类全部列出来。尽管机器语言好像是很复杂的，然而它是有规律的。8086到Pentium的机器语言指令长度可以从1字节到13字节。机器语言是微处理器理解和使用的，用于控制它的操作二进制代码。用机器语言编写程序，编程人员要首先熟记所用计算机的全部指令代码和代码的涵义。手编程序时，程序员得自己处理每条指令和每一数据的存储分配和输入输出，还得记住编程过程中每步所使用的工作单元处在何种状态。这是一件十分繁琐的工作，编写程序花费的时间往往是实际运行时间的几十倍或几百倍。而且，编出的程序全是些0和1的指令代码。总结：机器码是电脑CPU直接读取运行的机器指令，运行速度最快机器码就是计算机可以直接执行，并且执行速度最快的代码。

    字节码主要为了实现特定软件运行和软件环境、硬件环境无关。字节码的实现方式是通过编译器和虚拟机器。编译器将源码编译成字节码，特定平台上的虚拟机器将字节码转译为可以直接执行的指令。字节码的典型应用为Java语言。字节码通常指的是已经经过编译，但与特定机器码无关，需要直译器转译后才能成为机器码的中间代码。字节码通常不像源码一样可以让人阅读，而是编码后的数值常量、引用、指令等构成的序列。字节码是一种中间码。总结：字节码是一种中间状态（中间码）的二进制代码（文件）。需要直译器转译后才能成为机器码。

73：ascii、unicode、utf-8、gbk 区别？　　

    UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码，又称万国码。由Ken Thompson于1992年创建。现在已经标准化为RFC 3629。UTF-8用1到6个字节编码UNICODE字符。用在网页上可以同一页面显示中文简体繁体及其它语言（如英文，日文，韩文）。

    GBK是只用来编码汉字的，GBK全称《汉字内码扩展规范》，使用双字节编码。

    Unicode能够表示全世界所有的字节。在表示一个Unicode的字符时，通常会用“U+”然后紧接着一组十六进制的数字来表示这一个字符。在基本多文种平面（英文为 Basic Multilingual Plane，简写 BMP。它又简称为“零号平面”, plane 0）里的所有字符，要用四位十六进制数（例如U+4AE0，共支持六万多个字符）；在零号平面以外的字符则需要使用五位或六位十六进制数了。旧版的Unicode标准使用相近的标记方法，但却有些微的差异：在Unicode 3.0里使用“U-”然后紧接着八位数，而“U+”则必须随后紧接着四位数。

    ASCII码使用一个字节编码，所以它的范围基本是只有英文字母、数字和一些特殊符号 ，只有256个字符。

74：求出下列的结果。

    v6 = 0 or False and 1       False

    v5 = 0 and 2 or 1 or 4     1

    v4 = 0 and 2 or 1        1

    v3 = 0 and 2 and      0

    v2 = 1 and 3              3

    v1 = 1 or 3            1

75：什么是pickling和unpickling？

    Pickle模块读入任何Python对象，将它们转换成字符串，然后使用dump函数将其转储到一个文件中——这个过程叫做pickling。

    反之从存储的字符串文件中提取原始Python对象的过程，叫做unpickling。

76：python递归的最大层数？

    程序表明在3925-3929之间  一般是在998

77：请编写一个函数实现将IP地址转换成一个整数。

    def ipfunc(ip):

    a = ip.split('.')

    s = ''

    l = []

    for i in a:

    i = bin(int(i))[2:]

    i = i.rjust(8, '0')

    l.append(i)

    s = s.join(l)

    return s

    ipfunc("192.168.2.13")

    再将以上二进制拼接起来计算十进制结果：00001010 00000011 00001001 00001100 = ？

    int(ipfunc("192.168.2.13"),2)

78：Python编程常用技巧？

    #使用yield节省内存开销

    def read_file(fpath):

    with open(fpath, 'rb') as f:

    BLOCK_SIZE = 1024

    while True:

    if block:

    block = f.read(BLOCK_SIZE)

    yield block

    yield 的例子来源于文件读取。如果直接对文件对象调用 read() 方法，会导致不可预测的内存占用。好的方法是利用固定长度的缓冲区来不断读取文件内容。通过 yield，我们不再需要编写读文件的迭代类，就可以轻松实现文件读取。[1,2,3,4]这个是迭代器，用for来迭代它，生成器(x for x in range(4))也是迭代器的一种,但是你只能迭代它们一次.原因很简单,因为它们不是全部存在内存里,它们只在要调用的时候在内存里生成，yield的用法和关键字return差不多,下面的函数将会返回一个生成器。迭代的时候碰到yield立刻return一个值，下一次迭代的时候，从yield的下一条语句开始执行。

    for line in f 这种用法是把文件对象f当作迭代对象，系统将自动处理IO缓存和内存管理。

    组合工具

    izip() # 类似于zip()函数，只是返回的是一个循环器。

    compress('ABCD', [1, 1, 1, 0])  # 根据[1, 1, 1, 0]的真假值情况，选择第一个参数'ABCD'中的元素。A, B, C。

    combinations_with_replacement('abc', 2) # 与上面类似，但允许两次选出的元素重复。即多了aa, bb, cc。

    combinations('abc', 2) # 从'abcd'中挑选两个元素，比如ab, bc, ... 将所有结果排序，返回为新的循环器。

    chain([1, 2, 3], [4, 5, 7])  # 连接两个循环器成为一个1, 2, 3, 4, 5, 7。

    函数式工具

    dropwhile(lambda x: x < 5, [1, 3, 6, 7, 1])

    takewhile(lambda x: x < 5, [1, 3, 6, 7, 1])

    ifilter函数与filter()函数类似，只是返回的是一个循环器。

    starmap(pow, [(1, 1), (2, 2), (3, 3)])

    无穷循环器

    repeat(10, 5)   #重复10，共重复5次

    repeat(1.2)     #重复1.2，构成无穷循环器，即1.2, 1.2, 1.2, ...

    cycle('abc')    #重复序列的元素，既a, b, c, a, b, c ...

    count(5, 2)     #从5开始的整数循环器，每次增加2，即5, 7, 9, 11, 13, 15 ...

    *args和**kw

    *args要么是表示调用方法大的时候额外的参数可以从一个可迭代列表中取得，要么就是定义方法的时候标志这个方法能够接受任意的位置参数。接下来提到的**，**kw代表着键值对的字典,也就是说，你不用一个个字典用key来取value了。

    json.dumps()/loads() 存储字典结构

    json.dumps : dict转成str 。

    json.loads:str转成dict。

    善用traceback 追踪深层错误

    对于轻量级循环，可尽量使用列表推导式,熟练使用列表推导式可以很多情况下代替map，filter等操作。

    islice() # 类似于slice()函数，只是返回的是一个循环器

    79：数据类型。

    Number

    在JavaScript中的双精度浮点格式

    String

    双引号的反斜杠转义的Unicode

    Boolean

    true 或 false

    Array

    值的有序序列

    Value

    它可以是一个字符串，一个数字，真的还是假（true/false），空(null )等

    Object

    无序集合键值对

    Whitespace

    可以使用任何一对中的令牌

    null

    empty

80：json序列化时，默认遇到中文会转换成unicode，如果想要保留中文怎么办？如果需要保留date或者datetime日期格式的数据，该如何处理？

    第一种方案：定义处理类。

    实数虚数

    import json

    class ComplexEncoder(json.JSONEncoder):

    def default(self, obj):

    if isinstance(obj, complex):

    return [obj.real, obj.imag]

    return json.JSONEncoder.default(self, obj)

    数据类型为datetime 与 date

    class CJsonEncoder(json.JSONEncoder):

    def default(self, obj):

    if isinstance(obj, datetime):

    return obj.strftime('%Y-%m-%d %H:%M:%S')

    elif isinstance(obj, date):

    return obj.strftime('%Y-%m-%d')

    else:

    return json.JSONEncoder.default(self, obj)

    json.dumps(datalist, cls=CJsonEncoder)

    第二种方案：不用定义类，直接用strftime方法处理。

    如果不想定义类，直接在我们获取的date或者datetime对象后面用上strftime方法进行格式化也可以。

    处理保留中文的方案。

    dict1 = {'name': '李小萌', 'age': 10}

    #序列化的时候添加一个参数 ensure_ascii=False

    print(json.dumps(dict1, ensure_ascii=False))

81：什么是断言？应用场景？

    Python的assert是用来检查一个条件，如果它为真，就不做任何事。如果它为假，则会抛出AssertError并且包含错误信息。例如：

    防御型的编程：   运行时检查程序逻辑      检查约定    程序常量     检查文档。

    不要用它测试用户提供的数据

    不要用断言来检查你觉得在你的程序的常规使用时会出错的地方。断言是用来检查非常罕见的问题。你的用户不应该看到任何断言错误，如果他们看到了，这是一个bug，修复它。

    有的情况下，不用断言是因为它比精确的检查要短，它不应该是懒码农的偷懒方式。

    不要用它来检查对公共库的输入参数，因为它不能控制调用者，所以不能保证调用者会不会打破双方的约定。

    不要为你觉得可以恢复的错误用断言。换句话说，不用改在产品代码里捕捉到断言错误。

    不要用太多断言以至于让代码很晦涩。

82：有用过with statement吗？它的好处是什么？

    with语句的作用是通过某种方式简化异常处理，它是所谓的上下文管理器的一种。

    with open('output.txt', 'w') as f:       f.write('Hi there!')

    当你要成对执行两个相关的操作的时候，这样就很方便，以上便是经典例子，with语句会在嵌套的代码执行之后，自动关闭文件。这种做法的还有另一个优势就是，无论嵌套的代码是以何种方式结束的，它都关闭文件。如果在嵌套的代码中发生异常，它能够在外部exception handler catch异常前关闭文件。如果嵌套代码有return/continue/break语句，它同样能够关闭文件。

    我们可以用contextlib中的context manager修饰器来实现，比如可以通过以下代码暂时改变当前目录然后执行一定操作后返回。

    from contextlib import contextmanager import os @contextmanager def working_directory(path):    current_dir = os.getcwd()    os.chdir(path)    try:        yield    finally:        os.chdir(current_dir) with working_directory("data/stuff"):    # do something within data/stuff # here I am back again in the original working directory

83：使用代码实现查看列举目录下的所有文件。

    import os

    # 可以通过相对路径    print(os.listdir('../文件名称'))

    #也可以通过绝对路径  得到的结果是一个列表的形式可以遍历出来   print(os.listdir('绝对路径'))

84：简述 yield和yield from关键字。

    yield from iterable本质上等于for item in iterable: yield item的缩写。

    可迭代对象与迭代器的区别

    可迭代对象：指的是具备可迭代的能力，即iterable，在Python中指的是可以通过for  in 语句去逐个访问元素的一些对象，比如元组tuple，列表list，字符串string，文件对象file 等。

    迭代器：指的是通过另一种方式去一个一个访问可迭代对象中的元素，即iterator。在python中指的是给内置函数iter()传递一个可迭代对象作为参数，返回的那个对象就是迭代器，然后通过迭代器的next()方法逐个去访问。

    生成器：生成器的本质就是一个逐个返回元素的函数，即“本质——函数”。

    yield from：简单地说，yield   from  generator 。实际上就是返回另外一个生成器。

85：提高python运行效率的方法。

    使用生成器，因为可以节约大量内存。

    循环代码优化，避免过多重复代码的执行。

    核心模块用Cpython  PyPy等，提高效率。

    多进程、多线程、协程。

    多个if elif条件判断，可以把最有可能先发生的条件放到前面写，这样可以减少程序判断的次数，提高效率。

86：IOError AttributeError ImportError IndentationError IndexError KeyError  SyntaxError NameError分别代表什么异常。

    IOError：输入输出异常。

    AttributeError：试图访问一个对象没有的属性。

    ImportError：无法引入模块或包，基本是路径问题。

    IndentationError：语法错误，代码没有正确的对齐。

    NameError:使用一个还未赋予对象的变量。

    SyntaxError:Python代码逻辑语法出错，不能执行。

    KeyError:试图访问你字典里不存在的键。

    IndexError：下标索引超出序列边界。

    IndentationError：语法错误，代码没有正确的对齐。

86： \*args和\*\*kwargs是什么意思？

    *args表示可变参数（variadic arguments），它允许你传入0个或任意个无名参数，这些参数在函数调用时自动组装为一个tuple； **kwargs表示关键字参数（keyword arguments），它允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。同时使用*args和**kwargs的时候，必须保证*args在**kwargs之前。

87: python里面如何拷贝一个对象？

    （1） 赋值（=），就是创建了对象的一个新的引用，修改其中任意一个变量都会影响到另一个；

    （2）浅拷贝（copy.copy()），创建一个新的对象，但它包含的是对原始对象中包含项的引用（如果用引用的方式修改其中一个对象，另一个也会被改变）；

    （3）深拷贝（copy.deepcopy()），创建一个新的对象，并且递归的复制它所包含的对象（修改其中一个，另一个不会改变）

    注意：并不是所有的对象都可以拷贝

88: 简要描述python的垃圾回收机制

    python中的垃圾回收是以引用计数为主，标记-清除和分代收集为辅。

    引用计数：python在内存中存储每个对象的引用计数，如果计数变成0，该对象就会消失，分配给该对象的内存就会释放出来。

    标记-清除：一些容器对象，比如说list、dict、tuple、instance等可能会出现引用循环，对于这些循环，垃圾回收器会定时回收这些循环（对象之间通过引用（指针）连在一起，构成一个有向图，对象构成这个有向图的节点，而引用关系构成这个有向图的边）。

    分代收集：python把内存根据对象存活时间划分为三代，对象创建之后，垃圾回收器会分配它们所属的代。每个对象都会被分配一个代，而被分配更年轻的代是被优先处理的，因此越晚创建的对象越容易被回收。

89: 什么是lambda函数？它有什么好处？

    lambda表达式，通常是在需要一个函数，但是又不想费神去命名一个函数的场合下使用，也就是指匿名函数。

    Python允许你定义一种单行的小函数。定义lambda函数的形式如下（lambda参数：表达式）lambda函数默认返回表达式的值。你也可以将其赋值给一个变量。lambda函数可以接受任意个参数，包括可选参数，但是表达式只有一个。

90: python如何实现单例模式？

    单例模式是一种常用的软件设计模式。在它的核心结构中只包含一个被称为单例类的特殊类。通过单例模式可以保证系统中一个类只有一个单例而且该单例易于外界访问，从而方便对实例个数的控制并节约系统资源。如果希望在系统中某个类的对象只能存在一个，单例模式是最好的解决方案。

91:  python自省

    自省就是面向对象的语言所写的程序在运行时，所能知道对象的类型，简单一句就是运行时能够获得对象的类型，比如type(),dir(),getattr(),hasattr(),isinstance().

举个例子：

    a = [1,2,3]
	b = {'a':1,'b':2,'c':3}
	c = True
	print type(a),type(b),type(c) # <type 'list'> <type 'dict'> <type 'bool'>
	print isinstance(a,list)  # True

92： 谈一谈python的装饰器

    装饰器本质上是一个python函数，它可以让其他函数在不作任何变动的情况下增加额外功能，装饰器的返回值也是一个函数对象。它经常用于有切面需求的场景。比如：插入日志、性能测试，事务处理、缓存、权限验证等。有了装饰器我们就可以抽离出大量的与函数功能无关的雷同代码进行重用。

93：  什么是鸭子类型？

    在鸭子类型中，关注的不是对象的类型本身，而是他如何使用的。例如，在不适用鸭子类型的语言中，我们可以编写一个函数，它接受一个类型为鸭的对象，并调用它的走和叫方法。在使用鸭子类型的语言中，这样的一个函数可以接受一个任意类型的对象，并调用它的走和叫方法。

94： @classmethod和@staticmethod

    @classmethod修饰符对应的函数不需要实例化，不需要self参数，第一个参数需要是表示自身类的cls参数，cls参数可以用来调用类的属性，类的方法，实例化对象等。@staticmethod返回函数的静态方法，该方法不强制要求传递参数

95：谈一谈python中的元类

    一般来说，我们都是在代码里定义类，用定义的类来创建实例。而使用元类，步骤又是同，定义元类，用元类创建类，再使用创建出来的类来创建实例。元类的主要目的就是为了当创建类时能够自动地改变类。
