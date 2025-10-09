function maxProduct(nums: number[]): number {
    // We can assume than candidate1 > candidate2
    let candidate1= 0;
    let candidate2= 0;
    
    for(let current of nums){
        if(current > candidate1){
            candidate2 = candidate1;  //previous candidate1
            candidate1 = current;     // current number becomes new candidate1
        }
        else if(current > candidate2){
            candidate2= current;    //We just forgot about the previous candidate2
        }
    }
    
    return (candidate1-1)* (candidate2-1);

};