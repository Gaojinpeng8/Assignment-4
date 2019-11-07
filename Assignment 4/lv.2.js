//递归 （我把循环和等差求和的代码放在下方注释中）
const sumTo = (n) => { 
    let resulte=1;
    if(n==1){
        return resulte=1;
    }else{
        return n+sumTo(n-1);
    }
}

console.log(sumTo(100));

/*
//循环
const sumTo = (n) => { 
    let resulte=0;
    for(let a=1;a<=n;a++){
        resulte +=a;
    }
    return resulte;
 }

console.log(sumTo(100));

//等差数列
const sumTo = (n) => { 
    let resulte=0;
    resulte=n*(n+1)/2;
    return resulte;
 }

console.log(sumTo(100));*/