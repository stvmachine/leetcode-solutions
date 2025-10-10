/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const n = nums.length;

    for(let i=0; i< n -1; i++){
        let swaped= false;

        // Swaped elements
        for(let j=0; j< n-i-1; j++){
            if(nums[j]>nums[j+1]){
                // Destructuring and swaping in one command due ES6 power
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
                swaped= true;

                // Replacement of the old method with temp
                // const temp = nums[j];
                // nums[j] = nums[j+1];
                // nums[j+1] = temp;
            }
        }

        if(!swaped) break;
    }
};
