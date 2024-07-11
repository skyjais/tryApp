
//bubble sort bestTime(O(n)), worst case (O(n2))  and averge (O(n2))

let arr = [1,2,3,4,5,7]

const bubb = (arr)=>{
    const n=arr.length

    for(let i=0;i<n;i++){
      let flag=false
        for(let j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
                flag=true
            }
        }

        if(flag===false){
            
            console.log(i,"brak")
            break
            
        }
    }

    return arr

}

console.log(bubb(arr))