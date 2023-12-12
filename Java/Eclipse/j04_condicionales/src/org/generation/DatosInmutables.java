package org.generation;

public class DatosInmutables {
	
	public static void main(String[] args) {
		// dato inmutable: No se puede modificar
		// datos primitivos son inmutables
		int cuentaBancaria = 6890;
		cuentaBancaria = 2345;
		
		String nombre = "Kim";
		nombre = "Sebas"; // la referencia del objeto cambia de Kim a la referencia de Sebas
		String participante = new String("Kim"); // con new forzamos a crear un nuevo objeto
		
		// if (participante == "Kim") { // se comparan las referencias, por lo que la referencia de kim en participante no es la misma que la referencia creada en nombre
		if (participante.equals("Kim")) { // con .equals no se toma la referencia, se toma el valor del objeto
										  // siempre usar .equals para objetos en lugar de ==
			System.out.println("Duplico la cancion 1/2");
		} else {
			System.out.println("La persona no se llama Kim");
		}
		
	}

}
