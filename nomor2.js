let isFibo = (query, count = 1, last = 0) => {
    if(count < query){
       return isFibo(query, count+last, count);
    };
    if(count === query){
       return true;
    }
    return false;
 };
 console.log(`isFibo(8)`)
 console.log(isFibo(8))
 console.log(`isFibo(9)`)
 console.log(isFibo(9))