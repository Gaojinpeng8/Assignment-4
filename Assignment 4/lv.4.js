//拷贝一个基本类型，会创建一个新值再复制。但拷贝一个对象是把地址复制给变量，一个对象的改变会引起另一个对象的改变。
//所以要对一个变量进行深度拷贝可以复制对象里的基本类型，而不是复制对象它本身。
const gaojinpeng={
      name:'gaojinpeng',
      age:18,
      sex:'boy',
      school:'cqupt'
}
function copy(old){
    const newcopy={};
    for(let i in old){//历变对象中的元素
        if(typeof old[i]=="Object"){//如果元素是基本类型就直接复制
            newcopy[i]=copy(old[i]);
        }else{
            newcopy[i]=old[i];//如果不是就再调用函数进行其内部元素的判断，直到找到基本类型。
        }
    }
    return newcopy;//如果将基本类似都复制完，则深度拷贝完成。
}
giaojinpeng=copy(gaojinpeng);
console.log(giaojinpeng);