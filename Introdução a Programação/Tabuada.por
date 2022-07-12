programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,valor

		contador = 0
		
		escreva("Qual tabuada você deseja resolver? ")
		leia (valor)
		escreva("Até qual número você deseja multiplicar? ")
		leia (limite)

		faca{
			resultado = valor * contador
			escreva(valor + " X " + contador + " = " + resultado + "\n")
			contador++
			
		}enquanto (contador<=limite)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 215; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */