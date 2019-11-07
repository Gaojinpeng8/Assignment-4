function Accumulator(startingValue) {
  this.value = startingValue
  this.read=function(n){
    this.value+=n;
  }
} 
const accumulator = new Accumulator(1); // 初始 value 1 提示：箭头函数没有 this
accumulator.read(2); // 添加用户输入 value
accumulator.read(3); // 添加用户输入 value
console.log(accumulator.value); // 显示这些值的总和 1+2+3 = 6