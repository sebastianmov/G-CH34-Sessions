package org.generation;

public class MathOperationTest {

	public static void main(String[] args) {
		
		MathOperations operations;
		operations = new MathOperations();
		
		operations.sumaSinRetorno(4,5);
		
		int result = operations.sumaConRetorno(5, 7);
		System.out.println("Resultado: " + result);
		
		double valorPi = MathOperations.valorPI();
		System.out.println(valorPi);
	}
}
