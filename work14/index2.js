let time = new Date()
let fz = miao = 0;
fz = 59 - time.getMinutes()
miao = 59 - time.getSeconds()
let id =setInterval(seckill,1000)
function seckill() {
    miao--
    if(miao== -1){
        miao= 59
        fz--
    } 
    if(fz == -1){
        fz = 59
    } 
    document.getElementById('fz').innerHTML = fz +'分'
    document.getElementById('miao').innerHTML = miao +'秒'
}
