/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(input: string[]): void {
    let left = 0;
    let right = input.length -1;
 
    while (left < right){
        let tmpLeft = input[left];
        let tmpRight = input[right];

        input[left] = tmpRight;
        input[right] = tmpLeft;

        left++;
        right--;
    }

};


// first iteration "hello"
// 0 < 4 => true
// left = 0 , right =  4
// tmpLeft = h , tmpRight = o
// input = "oellh"
// left =1 , right = 3

// second iteration "oellh"
// 1 < 3 => true
// left = 1, right =3
// tmpL = e , tmpR= l
// input = "olleh"
// left = 2 , right = 2


// 2 < 2 => false
// end