function mySlice(arr, start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];

function myIndexOf(arr, item, from) {
    for (let i = from || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}



function myIncludes(arr, item, from)  {
    for (let i = from || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}


console.log(mySlice(arr, 0, 4));
console.log(myIndexOf(arr, 3, 0));
console.log(myIncludes(arr, 3, 0));