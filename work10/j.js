function stat(){
    let str = document.getElementById("str").value
    let obj={}
    str = str.split("").sort()
    console.log(str);
    for(let i=0;i<str.length;++i){
        let j=str[i]
        obj[j] = (obj[j] + 1) || 1;
    }
    document.getElementById("result").innerText=JSON.stringify(obj)
}