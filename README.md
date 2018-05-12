# egg-onebyone

egg-onebyone 学习

## egg 在 koa 基础之上的封装

* 1、完善的目录结构及约定。
* 2、egg 本身提供了 **Controller** **service** 层的抽象。

  * **Controller** 一般不会自己产出数据，也不会包含复杂的逻辑，复杂的过程应抽象为业务逻辑层 Service。
  * 框架本身提供了一种目录约定能力，比如`controller public view service config` 并提供了基于框架的对分散组件的访问能力，提供了大型应用开发时文件的组织能力，使其能够更好的复用、维护和协同开发
  * 文件名就是使用时对应的变量名，并且文件的命名体现该文件的功能，
  * middleware 中的文件，接近于 koa 框架的中间件功能。其余的文件则是，Egg 对开发文件的一种划分和组织，（同样也体现了软件开发工程中的思想）并在内部实现了这种文件的组织。
  * 刚开始的时候写的时候，代码并没有明显的代码关联语句，而在使用的时候有关联。这时候要是有个代码高亮就好了，或者就记住它。
  * egg-core/loader/minxin/controller.js .... 加载器
  * 内容被加载到了 context 上下文中
  * ceshi git
