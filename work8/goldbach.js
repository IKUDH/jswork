function goldbach() {
    let aaa= document.getElementById('odd').value
    if(aaa%2!==0){
        alert("请输入偶数")
        return false
    }
    let goldbach= document.getElementById('goldbach')
    let arr =[]
    let a = 0
    for(var i=2;i<=aaa;i++){
        a = 0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        if(a==0){
            arr.push(i)
        }
    }
    let str = ''
    for(let i=0;i<(arr.length)/2;i++){
       for(let j=0;j<arr.length;j++){
           if((arr[i]+arr[j])===Number(aaa)){
              str += '<div>'+aaa+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+ '</div>'
              console.log(aaa+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和")
           }
       }
    }
    goldbach.innerHTML = str
}