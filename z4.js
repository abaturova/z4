
// 1 Сортировка выбором
Array.prototype.selectSort = function () {

	let l = this.length 
	for(let i=0; i<l;i++){
		let min
		min = i
		for(let j=i+1; j<l;j++){
			if(this[min] > this[j]){
				min = j
			}
		}
		let min2 = this[i]
		this[i] = this[min]
		this[min] = min2

	}
	return this
}

// 2 Сортировка пузырьком
Array.prototype.bubbleSort = function () {

	let l = this.length
	for(let i=0; i<l; i++){
		for(let j=0; j<l-1;j++){
			if(this[j] > this[j+1]){
				let b = this[j]
				this[j] = this[j+1]
				this[j+1] = b
			}
		}
	}
	return this
}


// 3 Сортировка вставками
Array.prototype.insertSort = function () {

	for (let i=1; i<this.length; i++){ 
	    let m = this[i]
	    let j = i
	    while(j > 0 && this[j-1] > m){
	      this[j] = this[j-1]
	      j--
	    }
	    this[j] = m; 
	}
	return this
}

// 4 Сортировка слиянием
Array.prototype.mergeSort = function () {

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

	const sorting = this => {
		let arr1 = []
		let arr2 = []
		let mid = this.length/2
		if(this.length === 1){
			return this
		}
		for(let i=0; i<mid;i++){
			arr1.push(this[i])
		}
		for(let i=mid; i<this.length;i++){
			arr2.push(this[i])
		}

		return merge(sorting(arr1),sorting(arr2))
	}
	return sorting(this)
}


// 5 Быстрая сортировка
Array.prototype.quickSort = function () {

	const part = (this, inL, inR) => {
		let pivot = this[Math.floor((inL + inR) / 2)]
		let i = inL
		let j = inR
		while (i <= j) {
	        while (this[i] < pivot) {
	            i++
	        }
	        while (this[j] > pivot) {
	            j--
	        }
	        if (i <= j) {
	            let f = this[i]
	            this[i] = this[j]
	            this[j] = f
	            i++
	            j--
	        }
	    }
	    return i
	}

	const qSort = (this, inL, inR) => {
	    let index
	    if (this.length > 1) {
	        index = part(this, inL, inR)
	        if (inL < index - 1) {
	            qSort(this, inL, index-1)
	        }
	        if (index < inR) {
	            qSort(this, index, inR)
	        }
	    }
	    return this
	}

	let result = qSort(this, 0, this.length-1)
	return result
}


let arr = [1,5,-3,6,10,0,-8]
console.log(arr.selectSort())
console.log(arr.bubbleSort())
console.log(arr.insertSort())
//console.log(arr.mergeSort())
//console.log(arr.quickSort())
