
//quick sort worst case O(n2) avg and best case O(nlog(n))
//space comp. avg  O(log(n)) worst O(n)
let arr=[2,4,1,6,2,4,9,3]

function Quick(arr){
    let n=arr.length

    if(arr.length<=1){
        return arr
    }

    let pivot=arr[0]
    let left=[]
    let right=[]

    for(let i=1;i<n;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    return [...Quick(left),pivot,...Quick(right)]

}

console.log(Quick(arr))