enum RomanNumeral {
 "I"  =          1,
"IV" =           4,
"V"    =         5,
"IX"    =         9,
"X"     =        10,
"XL"    =        40,
"L"      =       50,
"XC"     =        90,
"C"       =      100,
 "CD"      =     400,
"D"        =     500,
"CM"       =     900,
"M"         =    1000,
}

function romanToInt(s: string): number {
    let count = 0;
    let i = 0;
    
    while(i <= s.length -1){
        let num=0;
        // Is the last element?
        if(i === s.length -1){
            num = RomanNumeral[s[i]];
        } else {
            // Substraction case
            if(RomanNumeral[`${s[i]}${s[i+1]}`]){
                num = RomanNumeral[`${s[i]}${s[i+1]}`];
                // Speed up the iteration by 1
                i++;

            }
            // Default case
            else{
                num = RomanNumeral[s[i]];
            }
            
        }
        
        count+=num;
        i++;
    }
    
    return count;
};