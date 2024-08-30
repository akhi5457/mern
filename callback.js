function check(a,b,callback){
    if(typeof a !='number' || typeof b !='number') {
        return callback('type error')
    }
    else{
        return callback(null,a+b)
    }
}

check(1,2,(err,result)=>{
    if(err){
        console.log('in err',err)
    }
    else{
        console.log('in result',result);
        
    }
})