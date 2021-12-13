let o = {};
let arr = ['zalupka', 'leguski', 'ochen`', 'malen`kaya'];
for (let i = 0; i <= arr.length -1; i++) {
    console.log(i)
    console.log(arr[i])
   
    o[arr.length - i] = arr[i];
  }
  console.log(o)