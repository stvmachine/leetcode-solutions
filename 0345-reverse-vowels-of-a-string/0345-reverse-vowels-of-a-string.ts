function reverseVowels(s: string): string {
    let left = 0;
    let right = s.length -1;
    const output = s.split("")
    const regex = /[aeiou]/i;

    while(left < right){
        if(regex.test(s[left]) && regex.test(s[right]) ){
            output[left] = s[right];
            output[right] = s[left];
            left++;
            right--;        
        }

        if(!regex.test(s[left])){
            left++;
        }

        if(!regex.test(s[right])){
            right--;
        }

    }

    return output.join("");
};