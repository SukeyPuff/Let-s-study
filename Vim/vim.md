

# Vim

> **VI IMproved**

简介
		vi: Visual Interface，文本编辑器

		文本：ASCII, Unicode
	
		文本编辑种类：
			行编辑器: sed
			全屏编辑器：nano, vi
	
		VIM - Vi IMproved
	
	使用
		vim：模式化的编辑
	
			基本模式：
				编辑模式，命令模式
				输入模式
				末行模式：
					内置的命令行接口
	
			打开文件：
				# vim [OPTION]... FILE...
					+#: 打开文件后，直接让光标处于第#行的行首；
					+/PATTERN：打开文件后，直接让光标处于第一个被PATTERN匹配到的行的行首；
	
			模式转换：
				编辑模式 --> 输入模式
					i: insert, 在光标所在处输入；
					a: append, 在光标所在处后面输入；
					o: 在当前光标所在行的下方打开一个新行；
					I：在当前光标所在行的行首输入；
					A：在当前光标所在行的行尾输入；
					O：在当前光标所在行的上方打开一个新行；
					c
					C
	
				输入模式 --> 编辑模式
					ESC
	
				编辑模式 --> 末行模式
					:
	
				末行模式 --> 编辑模式
					ESC
	
			关闭文件：
				:q 退出
				:q! 强制退出，丢弃做出的修改；
				:wq 保存退出
				:x 保存退出
				:w /PATH/TO/SOMEWHERE
	
				ZZ: 保存退出；
	
		光标跳转：
			
			字符间跳转：
				h, j, k, l
					h: 左
					l: 右
					j: 下
					k: 上
	
				#COMMAND：跳转由#指定的个数的字符；
	
			单词间跳转：
				w：下一个单词的词首
				e：当前或下一单词的词尾
				b：当前或前一个单词的词首
	
				#COMMAND：由#指定一次跳转的单词数
	
			行首行尾跳转：
				^: 跳转至行首的第一个非空白字符；
				0: 跳转至行首；
				$: 跳转至行尾；
	
			行间移动：
				#G：跳转至由#指定行；
				G：最后一行；
				1G, gg: 第一行；
	
			句间移动：
				)
				(
	
			段落间移动：
				}
				{
	
	vim的编辑命令：
	
		字符编辑：
			x: 删除光标处的字符；
			#x: 删除光标处起始的#个字符；
	
			xp: 交换光标所在处的字符及其后面字符的位置；
	
		替换命令(r, replace)
			r: 替换光标所在处的字符
	
		删除命令：
			d: 删除命令，可结合光标跳转字符，实现范围删除；
				d$: 
				d^:
				d0:
	
				dw
				de
				db
	
					#COMMAND
	
				dd: 删除光标所在的行；
					#dd：多行删除；
	
		粘贴命令(p, put, paste)：
			p：缓冲区存的如果为整行，则粘贴当前光标所在行的下方；否则，则粘贴至当前光标所在处的后面；
			P：缓冲区存的如果为整行，则粘贴当前光标所在行的上方；否则，则粘贴至当前光标所在处的前面；
	
		复制命令(y, yank)：
			y: 复制，工作行为相似于d命令；
				y$
				y0
				y^
	
				ye
				yw
				yb
	
					#COMMAND
	
				yy：复制行
					#yy: 复制多行；
	
		改变命令(c, change)
			c: 修改
				编辑模式 --> 输入模式
	
				c$
				c^
				c0
	
				cb
				ce
				cw
					#COMMAND
	
				cc：删除并输入新内容
				#cc: 
	
		其它编辑操作
	
			可视化模式：
				v: 按字符选定
				V：按行行定
	
				Note：经常结合编辑命令；
					d, c, y
	
			撤消此前的编辑：
				u(undo)：撤消此前的操作；
					#u: 撤消指定次数的操作；
	
			撤消此前的撤消：
				Ctrl+r
	
			重复前一个编辑操作：
				.
	
		翻屏操作：
			Ctrl+f: 向文件尾部翻一屏；
			Ctrl+b: 向文件首部翻一屏；
	
			Ctrl+d: 向文件尾部翻半屏；
			Ctrl+u：向文件首部翻半屏；
	
		vim自带的练习教程：
			vimtutor
	
	vim中的末行模式：
		内建的命令行接口
	
		(1) 地址定界
			:start_pos,end_pos
				#: 具体第#行，例如2表示第2行；
				#,#: 从左侧#表示行起始，到右侧#表示行结尾；
				#,+#: 从左侧#表示的行起始，加上右侧#表示的行数；
				.: 当前行
				$: 最后一行
					.,$-1
				%：全文, 相当于1,$
	
				/pat1/,/pat2/：
					从第一次被pat1模式匹配到的行开始，一直到第一次被pat2匹配到的行结束；
					#,/pat/
					/pat/,$
	
			使用方式：
				后跟一个编辑命令
					d
					y
					w /PATH/TO/SOMEWHERE: 将范围内的行另存至指定文件中；
					r /PATH/FROM/SOMEFILE：在指定位置插入指定文件中的所有内容；
	
		(2) 查找
			/PATTERN：从当前光标所在处向文件尾部查找；
			?PATTERN：从当前光标所在处向文件首部查找；
				n：与命令同方向；
				N：与命令反方向；
	
		(3) 查找并替换
			s: 在末行模式下完成查找替换操作
				s/要查找的内容/替换为的内容/修饰符
					要查找的内容：可使用模式
					替换为的内容：不能使用模式，但可以使用\1, \2, ...等后向引用符号；还可以使用“&”引用前面查找时查找到的整个内容；
					修饰符：
						i: 忽略大小写
						g: 全局替换；默认情况下，每一行只替换第一次出现；
	
				查找替换中的分隔符/可替换为其它字符，例如
					s@@@
					s###
	
			练习：
				1、复制/etc/grub2.cfg至/tmp/目录，用查找替换命令删除/tmp/grub2.cfg文件中的行首的空白字符；
					%s/^[[:space:]]\+//g
	
				2、复制/etc/rc.d/init.d/functions文件至/tmp目录，用查找替换命令为/tmp/functions的每行开头为空白字符的行的行首添加一个#号；
					:%s/^[[:space:]]/#&/
	
		多文件模式：
			vim FILE1 FILE2 FILE3 ...
				:next 下一个
				:prev 前一个
				:first 第一个
				:last 最后一个
	
				:wall 保存所有
				:qall 退出所有
	
		窗口分隔模式：
			vim -o|-O FILE1 FILE2 ...
				-o: 水平分割
				-O: 垂直分割
	
				在窗口间切换：Ctrl+w, Arrow
	
		单文件窗口分割：
			Ctrl+w,s: split, 水平分割
			Ctrl+w,v: vertical, 垂直分割
	
		定制vim的工作特性：
			配置文件：永久有效
				全局：/etc/vimrc
				个人：~/.vimrc
	
			末行：当前vim进程有效
	
			(1) 行号
				显示：set number, 简写为set nu
				取消显示：set nonumber, 简写为set nonu
			(2) 括号匹配
				匹配：set showmatch, 简写为set sm
				取消：set nosm
			(3) 自动缩进
				启用：set ai
				禁用：set noai
			(4) 高亮搜索
				启用：set hlsearch
				禁用：set nohlsearch
			(5) 语法高亮
				启用：syntax on
				禁用：syntax off
			(6) 忽略字符的大小写
				启用：set ic
				不忽略：set noic
	
			获取帮助：
				:help 
				:help subject
	
		问题：如何设置tab缩进为4个字符？
	
		练习：
			1、复制/etc/rc.d/init.d/functions文件至/tmp目录；替换/tmp/functions文件中的/etc/sysconfig/init为/var/log；
			2、删除/tmp/functions文件中所有以#开头，且#后面至少有一个空白字符的行的行首的#号；