# react-redux

Redux 入门

http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
https://cn.redux.js.org/

状态容器 - 管理数据

redux解决的问题：

1. 单向数据流  父子组件值传递问题
2. 代码维护性

## Redux 三个基本原则

1. 单一数据源
2. State是只读的
3. 使用纯函数来执行修改

ui -> action [-> middleware ] -> reducer(function) -> store(state) -> ui

components  connect   store

## redux 和 react-redux

redux     =>    { createStore }
react-redux     =>    { Provider, connect }

  Pass State     store       dispatch Action/reduce State
         ______   App    __________
        |                          |
user Component              main Component



