let time = new Date()
let fz = miao = 0;
fz = 60 - time.getMinutes()
miao = 60 - time.getSeconds()
let id =setInterval(seckill,1000)
function seckill() {
    miao--
    if(miao== -1){
        miao= 60
        fz--
    } 
    if(fz == -1){
        fz = 60
    } 
    document.getElementById('fz').innerHTML = fz +'分'
    document.getElementById('miao').innerHTML = miao +'秒'
}