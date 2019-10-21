**props**

1. datas:一个数组，每项是一个对象，对应一个多选框
    1. 对象具有value，text属性
    2. value:多选框的值
    3. .text:多选框的文本

例如：

```js
datas = [
    {value:"football",text:"足球'}
]
```
2. name:每一个多选框的name属性
3. chooseDatas:数组，表示当前选中的Value