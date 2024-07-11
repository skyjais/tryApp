
//insertion sort best (O(n)) worst avg O(n2)
let arr = [4,2,6,1,5,8]

function insert (arr){
let n=arr.length
    for(let i=1;i<n;i++){
        
        let j=i-1
        let key=arr[i]

        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }

        arr[j+1] = key
         
    }

    return arr

}

console.log(insert(arr))

