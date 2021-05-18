(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{486:function(a,t,s){"use strict";s.r(t);var r=s(44),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_2019-r00t-新生赛writeup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2019-r00t-新生赛writeup"}},[a._v("#")]),a._v(" 2019 r00t 新生赛writeup")]),a._v(" "),s("p",[a._v("By EZForever")]),a._v(" "),s("h2",{attrs:{id:"misc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#misc"}},[a._v("#")]),a._v(" Misc")]),a._v(" "),s("h3",{attrs:{id:"签到题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签到题"}},[a._v("#")]),a._v(" 签到题")]),a._v(" "),s("p",[a._v("不解释，Ctrl+C，Ctrl+V。")]),a._v(" "),s("h3",{attrs:{id:"ez-qr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ez-qr"}},[a._v("#")]),a._v(" EZ QR")]),a._v(" "),s("p",[a._v("反色的二维码，但恢复正常后扫描发现只是个假flag。实为LSB隐写（RGB通道都有而且相同），stegsolve解之。")]),a._v(" "),s("p",[a._v("P.S. 这道题因为没有/不会用stegsolve卡住了很长时间，试过自己写程序解析图片，但是得到的都是缺了定位点的原二维码。")]),a._v(" "),s("h3",{attrs:{id:"mario-非正常flag格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mario-非正常flag格式"}},[a._v("#")]),a._v(" Mario （非正常flag格式）")]),a._v(" "),s("p",[a._v("查看文件头发现是个NES ROM。放模拟器跑，游戏是超级玛丽1代。通关（实操过程用了金手指+跳关，网上搜得到）之后得到flag。")]),a._v(" "),s("h3",{attrs:{id:"摩尔庄园-遗失的麦可滋"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#摩尔庄园-遗失的麦可滋"}},[a._v("#")]),a._v(" 摩尔庄园 - 遗失的麦可滋")]),a._v(" "),s("p",[s("s",[s("em",[a._v("未解出：没有米米号（注册要实名所以不想注册），一点思路没有。")])])]),a._v(" "),s("p",[a._v("抱着尝试的心态去BugMeNot上看了看，发现居然真的有米米号可以用！解题关键在去商业区道具店买“我的邻居”牌子，回到家园放在地上设置米米号就能访问了。其他网上的方案大多已经失效，还有的是因为游戏bug进不去。")]),a._v(" "),s("h3",{attrs:{id:"小卢与健康跑-非正常flag格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小卢与健康跑-非正常flag格式"}},[a._v("#")]),a._v(" 小卢与健康跑 （非正常flag格式）")]),a._v(" "),s("p",[s("s",[a._v("消费过世主播警告")])]),a._v(" "),s("p",[a._v("绘制“神秘音频”的频谱图可以发现音频结尾的杂音实为写入音频的字符，为zip包的密码。把解压得到的的坐标数据嵌进kml文件缺失的部分，导入谷歌地球（需要科学上网，应该有其他打开方式）显示路线，路线构成flag提示，照做得到flag。")]),a._v(" "),s("h3",{attrs:{id:"神秘的盒子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#神秘的盒子"}},[a._v("#")]),a._v(" 神秘的盒子")]),a._v(" "),s("p",[a._v("glb文件是3D模型，但是打不开~~，不知道是不是我的电脑有问题~~。binwalk发现其中有7张png图片，依次提取发现后三张图片的尺寸和内容与前四张有很大差异。在第五张图片中发现LSB隐写（两部分，分别在G和B通道），stegsolve解之得到flag二维码。")]),a._v(" "),s("p",[a._v("P.S. 事后经由提示想到可能文件是被篡改过。另存了一份系统自带的演示文件，hex编辑器打开，发现文件头的前4个字节被清零了。修改好后可以正常加载，果不其然就真是个盒子，两张黑色的图片是在盒子里的。")]),a._v(" "),s("h3",{attrs:{id:"奇怪的学妹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#奇怪的学妹"}},[a._v("#")]),a._v(" 奇怪的学妹")]),a._v(" "),s("p",[a._v("png图片本身的内容为聊天记录，其中混有3条十六进制消息。binwalk发现图片后附有一个zip文件，提取解压得到提示“想想十六进制的ASCII码”。OCR提取图片上的十六进制消息并解码，得到flag密文和提示“Caesar”。找一个在线凯撒密码解码器，所有尝试中像是flag（以"),s("code",[a._v("r00t")]),a._v("开头）的就是flag。")]),a._v(" "),s("h3",{attrs:{id:"风景画中的秘密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#风景画中的秘密"}},[a._v("#")]),a._v(" 风景画中的秘密")]),a._v(" "),s("p",[a._v("binwalk发现图片后附有一个zip文件，提取后发现有密码无法解压。题目强调“图片编辑软件”，想到EXIF信息，查看发现两条提示“密码是CRC32”和“*看起来*一样的图片”。尝试各个文件的各种格式的CRC32，但都解不开压缩包密码。最终放弃，去找密码爆破软件，但还是各种失败，提示文件头损坏。猛然想到压缩包本身也有CRC32，头部数据应该是被手动修改过（讲真，手改压缩包凑密码有点过于强悍了吧）！解压之，得到另一张长相极其接近的图片。stegsolve叠加两张图片，SUB模式得到flag。")]),a._v(" "),s("h3",{attrs:{id:"来玩个游戏吧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#来玩个游戏吧"}},[a._v("#")]),a._v(" 来玩个游戏吧")]),a._v(" "),s("p",[a._v("一开始以为flag写在了存档数据里，但用NBT Explorer检查无果。发现存档包含内置行为包，遂打开游戏加载存档，原来是一道红石电路的Reverse题（！）。然而行为包的代码是明文，外加对暴露出来的电路的简单分析，得知地图上的一行各式方块对应flag的不同字符。截图手动对应得到flag。")]),a._v(" "),s("p",[a._v("P.S. 我觉得这应该就是所谓的“非正常”解题方式了吧，毕竟显示器和旁边的一堆按钮连碰都没碰过。")]),a._v(" "),s("h2",{attrs:{id:"reverse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reverse"}},[a._v("#")]),a._v(" Reverse")]),a._v(" "),s("h3",{attrs:{id:"babyrev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babyrev"}},[a._v("#")]),a._v(" babyREV")]),a._v(" "),s("p",[a._v("拖进IDA，main函数中进行了一堆连续字节的赋值，可以猜想是当作数组/字符串使用了。其后的代码表明字符串的编码方式为每个字符与其下标异或，写程序解码得到flag。")]),a._v(" "),s("h3",{attrs:{id:"theseus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#theseus"}},[a._v("#")]),a._v(" Theseus")]),a._v(" "),s("p",[a._v("IDA没有识别出main函数，但可以轻易发现是"),s("code",[a._v("sub_401120")]),a._v("。其调用的"),s("code",[a._v("sub_401210")]),a._v("利用伪随机数+异或对数组"),s("code",[a._v("byte_401190")]),a._v("进行解码，并将解码后的数据作为验证函数调用。提取并解码这个数组后另进行分析，可见最终解码逻辑为每个字符与前一个字符异或。写程序解码得到flag。")]),a._v(" "),s("h3",{attrs:{id:"cycle-非正常flag格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cycle-非正常flag格式"}},[a._v("#")]),a._v(" cycle （非正常flag格式）")]),a._v(" "),s("p",[a._v("IDA索性没有将main识别为函数（原因是其中插入的反-反汇编语句"),s("code",[a._v("jmp $+1")]),a._v("）。阅读汇编逻辑得知flag格式为"),s("code",[a._v("r00t{%8x-%8x-c902babe}")]),a._v("，验证函数的逻辑为将三个数字转换为浮点数后代入数学方程组，外加一次异或检查。将方程组拿去matlab计算，得到的解试出顺序即为flag。")]),a._v(" "),s("p",[a._v("P.S. 方程组根据题目提示应该是用来根据三角形的三边求解三角形的内切/外接圆半径的，使用的算法包括海伦-秦九韶公式。试过逆推但是数学太渣算不出来（……）。而且秦九韶公式的系数好像错了一点。")]),a._v(" "),s("h3",{attrs:{id:"easyasm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#easyasm"}},[a._v("#")]),a._v(" EasyASM")]),a._v(" "),s("p",[a._v("16位程序无法反编译只能反汇编，好在逻辑相对比较好懂。编码逻辑是用硬编码的表格替换数据64次，写出程序反向操作得到flag。")]),a._v(" "),s("p",[a._v("P.S. 64次替换后的结果依然与原文一一对应，（因为代码出了某些奇怪的问题不得不）用DOS模拟器运行程序进行调试，可以直接导出明文和密文间的关系。")]),a._v(" "),s("h3",{attrs:{id:"persistent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistent"}},[a._v("#")]),a._v(" Persistent")]),a._v(" "),s("p",[a._v("一个安卓包，反编译dex得到被按位取反（提示是代码中不断出现的异或-1操作）的flag前半部分。JNI库拖进IDA，定位到java代码中调用的函数，找到后半部分flag的明文。拼在一起得到flag。")]),a._v(" "),s("h3",{attrs:{id:"ollvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ollvm"}},[a._v("#")]),a._v(" ollvm")]),a._v(" "),s("p",[a._v("程序一开始对key的比对算法极其复杂，但由题目提示猜想是md5算法。下面的4个连续整数比较可以拆出来目标md5，网站解密得"),s("code",[a._v("123456")]),a._v("。第二部分的算法依然可以生成一对一的表格，并有不同字符的下标，由此确定大部分字符，但4处字符不确定，有64种可能。从其后的第三轮提取出目标md5，但发现与64组可疑flag都不匹配。在windbg调试查看过md5的计算结果后想到第二次计算的上下文没有重置，故目标md5为"),s("code",[a._v('md5("123456" + flg)')]),a._v("。更改条件后恰好找到一组，即为flag。")]),a._v(" "),s("h3",{attrs:{id:"useshare"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useshare"}},[a._v("#")]),a._v(" useshare")]),a._v(" "),s("p",[a._v("拖进IDA很容易发现解码逻辑是每4字节与常数异或，写程序计算就能得到flag。题目的描述和提供的头文件因为我没有Linux版IDA而被完美作废了。事后分析发现是程序引用了一个不存在的库的函数导致无法运行，然鹅纯静态分析完全不用考虑这个，以至于做题时都怀疑题有问题。")]),a._v(" "),s("p",[a._v("需要注意的是解密函数实际执行了两次（main之前init_array一次、手动调用一次），两次的常数不同。")]),a._v(" "),s("h3",{attrs:{id:"signal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signal"}},[a._v("#")]),a._v(" signal")]),a._v(" "),s("p",[a._v("看见题目提示觉得还好，但是发现反编译的代码里到处都是"),s("code",[a._v("return 1 / 0;")]),a._v("倒吸了一口凉气。IDA的反编译过程也被干扰了；用伪随机数+递归生成替换表的函数直接缺了最关键的一块。后来发现了设置伪随机数种子和注册信号处理的函数（没被main调用，在init_array里），得知int3也被注册了，解释了替换表生成函数如何以断点结束递归。gdb调试程序、int3之前下断，得到完整替换表，密文在之前的初始化函数里，写程序算出flag。")]),a._v(" "),s("p",[a._v("P.S. 被gdb无源码调试烦透了，试过提取生成替换表的函数的汇编代码自己编译运行，但是得到的替换表完全不同，暂时还不清楚为什么。")]),a._v(" "),s("h2",{attrs:{id:"pwn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwn"}},[a._v("#")]),a._v(" Pwn")]),a._v(" "),s("h3",{attrs:{id:"白给"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#白给"}},[a._v("#")]),a._v(" 白给")]),a._v(" "),s("p",[a._v("反编译get_shell得知，程序已经启动了一个可交互的shell。连接到服务器进行操作发现flag文件就在当前目录，cat之得到flag。")]),a._v(" "),s("h3",{attrs:{id:"ai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ai"}},[a._v("#")]),a._v(" AI")]),a._v(" "),s("p",[a._v("AI函数存在缓冲区溢出，溢出填充数据长度为"),s("code",[a._v("(0x404 + 4 + 4) = 1036")]),a._v("。代码中存在未被调用的backboor函数，其作用恰为getshell。IDA获取backdoor的地址，附在填充数据后发送至服务器即可getshell。在当前目录的文件中得到flag。")]),a._v(" "),s("h3",{attrs:{id:"anotherai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anotherai"}},[a._v("#")]),a._v(" AnotherAI")]),a._v(" "),s("p",[a._v("这一次没有了backdoor函数，但是同时提供了一个可控的全局变量缓冲区，所以就是自己“输入”一个函数的事情了。网上找到适配linux x86的shellcode作为第二行输入，其余知识点同上一道题，溢出填充数据长度为"),s("code",[a._v("(36 + 4 + 4) = 44")]),a._v("。")]),a._v(" "),s("p",[a._v("P.S. shellcode及其来源，留做参考："),s("br"),a._v(" "),s("code",[a._v("\\x31\\xc0\\x50\\x68\\x2f\\x2f\\x73\\x68\\x68\\x2f\\x62\\x69\\x6e\\x89\\xe3\\x50\\x89\\xe2\\x53\\x89\\xe1\\xb0\\x0b\\xcd\\x80")]),a._v("\nhttps://www.exploit-db.com/exploits/46524")]),a._v(" "),s("h3",{attrs:{id:"究极问答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#究极问答"}},[a._v("#")]),a._v(" 究极问答")]),a._v(" "),s("p",[a._v("注意到main最后的"),s("code",[a._v("___stack_chk_fail")]),a._v("函数，也就是说这一次不是搞栈溢出了。题目的要求是在两次近乎连续的全局变量值的判断中失败一次成功一次，中间只隔一个printf。关键点在于这个printf的格式字符串是可控的，可以利用"),s("code",[a._v("%n")]),a._v("修改一个int大小的数据。利用前面输入名字（即格式字符串）的机会可以输入全局变量的地址到栈上，保证8字节对齐（64位），算出调用printf前的栈顶到输入的地址的偏移，格式字符串写成类似"),s("code",[a._v("xx%_$n")]),a._v("的格式，下划线替换为偏移（注意64位gcc传参前6个参数不在栈上，偏移要相应调整）即可。")]),a._v(" "),s("h2",{attrs:{id:"web"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[a._v("#")]),a._v(" Web")]),a._v(" "),s("h3",{attrs:{id:"愚人节礼物"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#愚人节礼物"}},[a._v("#")]),a._v(" 愚人节礼物")]),a._v(" "),s("p",[a._v("查看框架的源代码并和真实的教务处主页源码比较，发现一处注释写有另一文件的文件名，下载文件得到flag。")]),a._v(" "),s("h3",{attrs:{id:"小卢与饼干游戏-非正常flag格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小卢与饼干游戏-非正常flag格式"}},[a._v("#")]),a._v(" 小卢与饼干游戏 （非正常flag格式）")]),a._v(" "),s("p",[s("s",[a._v("请马上停止你的卢本伟行为(╯' - ')╯︵ ┻━┻")])]),a._v(" "),s("p",[a._v("通（kai）关（gua）方法千千万，最直接的就是在JS里搜"),s("code",[a._v("5000")]),a._v("这个关键数字，复制弹出消息的语句（提示信息是“Congratulations!”）到控制台运行就能拿到flag。也试过拦截JS修改代码，屏蔽反作弊机制和物品价格上涨的机制，再批量买入，不过可想而知麻烦得多。")]),a._v(" "),s("h2",{attrs:{id:"crypto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crypto"}},[a._v("#")]),a._v(" Crypto")]),a._v(" "),s("h3",{attrs:{id:"脆弱的-加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脆弱的-加密"}},[a._v("#")]),a._v(" 脆弱的“加密”")]),a._v(" "),s("p",[a._v("经过对字符串长度和特征的比对发现明文每3字节(向上取整)对应密文4个数字，与base64一致。尝试与递推发现每个数字与base64的65个符号一一对应。由此得到flag的base64密文，解码得到flag。")])])}),[],!1,null,null,null);t.default=v.exports}}]);