function larrysArray(A) {
    let inversion = 0;
    for (let i=0;i<A.length;i++)
        for (let j=i+1;j<A.length;j++)
            if (A[i] > A[j])
                inversion++;

    if (inversion % 2 == 0)
        return 'YES';
    
    return 'NO';
}

console.log(larrysArray([1,6,5,2,4,3]))