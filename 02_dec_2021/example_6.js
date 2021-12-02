

let obj = {
    num: 10
}

if (obj && obj.num) {
    console.log(obj.num * 10);
}


let obj2 = {
    obj: {
    }
}

console.log(obj2 && obj2.obj && obj2.obj.obj && obj2.obj.obj.num);

const arr = [10];

console.log(arr && arr.length && arr[0]);
