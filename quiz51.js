/*
// Javascript program to get size of subset whose
// each pair sum is not divisible by K
	
	// Returns maximum size of subset with no pair
	// sum divisible by K
	function subsetPairNotDivisibleByK(arr,N,K)
	{
		// Array for storing frequency of modulo
		// values
		let f = new Array(K);
		for(let i=0;i<K;i++)
		{
			f[i]=0;
		}
		
		
	
		// Fill frequency array with values modulo K
		for (let i = 0; i < N; i++)
			f[arr[i] % K]++;
	
		// if K is even, then update f[K/2]
		if (K % 2 == 0)
			f[K/2] = Math.min(f[K/2], 1);
	
		// Initialize result by minimum of 1 or
		// count of numbers giving remainder 0
		let res = Math.min(f[0], 1);
	
		// Choose maximum of count of numbers
		// giving remainder i or K-i
		for (let i = 1; i <= K/2; i++)
			res += Math.max(f[i], f[K-i]);
	
		return res;
	}
	
	let arr=[3, 7, 2, 9, 1];
	let N = arr.length;
	let K = 3;
	document.write(subsetPairNotDivisibleByK(
										arr, N, K));
	
	// This code is contributed by avanitrachhadiya2155
*/

	function subsetPairNotDivisibleByK(k,s) 
	{
		let f = new Array(k);
		for(let i=0;i<k;i++)
		{
			f[i]=0;
		}
		for (let i = 0; i < s.length; i++)
			f[s[i] % k]++;
		if (k % 2 == 0)
			f[k/2] = Math.min(f[k/2], 1);
		let res = Math.min(f[0], 1);
		for (let i = 1; i <= k/2; i++)
			res += Math.max(f[i], f[k-i]);
		return res;
	}
    console.log(subsetPairNotDivisibleByK(3,[1,7,2,4]))


    // let temp = new Array(k)
    // for(let i=0;i<k;i++)
    // {
    //     temp[i]=0
    // }
    // for (let i = 0; i < s.length; i++)
    //     temp[s[i] % k]++
    // if (k % 2 == 0)
    //     temp[k/2] = Math.min(temp[k/2], 1)
    // let res = Math.min(temp[0], 1)
    // for (let i = 1; i <= k/2; i++)
    //     res += Math.max(temp[i], temp[k-i])
    // return res