const numbers = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 4) {
        break;
    }
    console.log(element);
}

const nums = [1,2,-5,3,-9,4,5,-7,6,7,8,9]

for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element < 0) {
        continue;
    }
    console.log(element);
}