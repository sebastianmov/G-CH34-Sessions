package org.generation;

public class MathOperations {
	
	// atributos de instancia (non-static fields)
	// atributos de clase (static fields)
	
	// metodos constructores
	
	// metodos de instancia
	void sumaSinRetorno(int a, int b){
		System.out.println("Resultado: " + (a + b));
	}
	
	int sumaConRetorno(int a, int b) {
		return a + b;
	}
	
	// metodos de clase
	static double valorPI(){
		// return 3.141592;
		return Math.PI;
	}
}
