
export function delay(ms,flag){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // if(flag){
            //     resolve()
            // }else{
            //     reject('失败');
            // }
            if(flag){
                resolve({code:0,status:200});
            }else{
                reject({code:1,error:'失败'});
            }

        },3000)
    })
}