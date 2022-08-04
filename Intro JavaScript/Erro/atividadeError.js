function validaArray(arr, num){
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros.');

        if (typeof arr !== 'object') 
            throw new TypeError('Array precisa ser do tipo object.');

        if (typeof num !== 'number') 
            throw new TypeError('Num precisa ser do tipo number.');

        if (arr.length !== num) throw new RangeError('Tamanho inválido.');

        return arr;
    } catch (e) {
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
    }
}

console.log(validaArray([], 5))