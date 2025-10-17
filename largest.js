let arr =[2,3,4,1,5,8];

let largest = 0;

for(let i=0; i<=arr.length ;i++){
        if(largest <arr[i]){
                largest = arr[i]
        }
}
console.log(largest);