function sortVowels(s: string): string {
    // const regex = /[^aeiou]/ig;  //not bowel
    // const isBowel = /[aeiou]/i; // is bowel

    // // lets extract vowels
    // const vowels = s.replace(regex, "").split("");
    // console.log(vowels)

    // // array of ordered vowels
    // let swapped = false;
    // for (let i = 0; i < vowels.length - 1; i++) {
    //     swapped = false;
    //     for (let j = 0; j < vowels.length - i - 1; j++) {
    //         if (vowels[j] > vowels[j + 1]) {
    //             let temp = vowels[j];
    //             vowels[j] = vowels[j + 1];
    //             vowels[j + 1] = temp;
    //             swapped = true;
    //         }
    //     }

    //     if (!swapped) {
    //         break;
    //     }
    // }

    // console.log(vowels)

    // // replace ordered vowels in word
    // const output = [];
    // for (let i = 0; i <= s.length - 1; i++) {
    //     console.log(s[i])
    //     if (isBowel.test(s[i])) {
    //         if(vowels.length >=1){
    //             let vowel = vowels.shift();
    //             output.push(vowel);
    //         }
    //     }
    //     else {
    //         output.push(s[i])
    //     }
    // }

    // return output.join("");

    const vowels = (s.match(/[aeiou]/ig) || []).sort()

    let i = 0;
    return s.replace(/[aeiou]/ig, ()=> vowels[i++]);
};