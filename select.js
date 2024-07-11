
//selection sort best case worstcase & average case o(n2)
let arr = [2,4,7,1,3,8,1,3,9,4]

const select = (arr)=>{
    let n=arr.length
    

    for(let i=0;i<n-1;i++){
        let minIndex=i

        for(let j=i+1;j<n;j++){
            
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }

        }

        if(minIndex!==i){
          [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]
        }
       

    }

    return arr

}

console.log(select(arr))