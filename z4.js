
// 1 Сортировка выбором
Array.prototype.selectSort = function (arr) {
	
	let l = arr.length - 1
	for(let i=0; i<l;i++){
		let min
		min = i
		for(let j=i+1; j<l;j++){
			if(arr[min] > arr[j]){
				min = j
			}
		}
		let min2 = arr[i]
		arr[i] = arr[min]
		arr[min] = min2

	}
	return arr
}

// 2 Сортировка пузырьком
Array.prototype.bubbleSort = function (arr) {

	let l = arr.length - 1
	for(let i=0; i<l; i++){
		for(let j=0; j<l-1;j++){
			if(arr[j] > arr[j+1]){
				let b = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = b
			}
		}
	}
	return arr
}


// 3 Сортировка вставками
Array.prototype.insertSort = function (arr) {

	for (let i=1; i<arr.length; i++){ 
	    let m = arr[i]
	    let j = i
	    while(j > 0 && arr[j-1] > m){
	      arr[j] = arr[j-1]
	      j--
	    }
	    arr[j] = m; 
	}
	return arr
}

// 4 Сортировка слиянием
Array.prototype.mergeSort = function (arr) {

	const merge = (arrL,arrR) => {
		let arrS = []
		let i = j = 0
		while(i<arrL.length && j<arrR.length){
			if(arrL[i] < arrR[j]){
				arrS.push(arrL[i++])
			}else  
					arrS.push(arrR[j++])
		}
		while(i < arrL.length){
			arrS.push(arrL[i])
			i++
		}
		while(j < arrR.length){
			arrS.push(arrR[j])
			j++
		}

		return arrS
	}

	const sorting = arr => {
		let arr1 = []
		let arr2 = []
		let mid = arr.length/2
		if(arr.length === 1){
			return arr
		}
		for(let i=0; i<mid;i++){
			arr1.push(arr[i])
		}
		for(let i=mid; i<arr.length;i++){
			arr2.push(arr[i])
		}

		return merge(sorting(arr1),sorting(arr2))
	}
	return sorting(arr)
}


// 5 Быстрая сортировка
Array.prototype.quickSort = function (arr) {

	const part = (arr, inL, inR) => {
		let pivot = arr[Math.floor((inL + inR) / 2)]
		let i = inL
		let j = inR
		while (i <= j) {
	        while (arr[i] < pivot) {
	            i++
	        }
	        while (arr[j] > pivot) {
	            j--
	        }
	        if (i <= j) {
	            let f = arr[i]
	            arr[i] = arr[j]
	            arr[j] = f
	            i++
	            j--
	        }
	    }
	    return i
	}

	const qSort = (arr, inL, inR) => {
	    let index
	    if (arr.length > 1) {
	        index = part(arr, inL, inR)
	        if (inL < index - 1) {
	            qSort(arr, inL, index-1)
	        }
	        if (index < inR) {
	            qSort(arr, index, inR)
	        }
	    }
	    return arr
	}
	let result = qSort(arr, 0, arr.length-1)
	return result
}


let arr = [1,5,-3,6,10,0,-8]
console.log(arr.mergeSort())
