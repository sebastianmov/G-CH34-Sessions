package org.generation;

import java.util.Scanner;

public class ConditionalIf {
	public static void main(String[]args) {
		/**
		 * Sintaxis de la condicional if 
		 * Si la condicional es verdadera, se
		 * ejecuta la instrucción de if
		 * 
		 * if ( condicional ) sentencia;
		 * 
		 * if ( condicional ) { 
		 *  sentencias; 
		 * }
		 * 
		 * if ( condicional ) sentencia; 
		 * else sentencia_Si_condicional_es_falsa;
		 * ------------------------------------------------------ 
		 * if ( condicional ) sentencia; 
		 * else if ( nueva_condicional) sentencia; 
		 * . . . 
		 * else if ( * n_condición ) sentencia; 
		 * else sentencia;
		 * 
		 */
		
		// Verificar la edad de una persona.
		// Si es mayor de edad, imprimir "Puede votar", caso contrario: "No puede votar"
		int edad = 18;
		
		if (edad >= 18) {
			System.out.println("Puede votar.");
	    } else {
	    	System.out.println("No puede votar.");
	    }
		
		/*
		 * De una variable tipo int, evaluar si está en el rango de 1 a 10, si es así
		 * desplegar en consola "La selección está en el rango" En caso contrario
		 * "La selección está fuera de rango"
		 */
		int rango = -5;
		
		if (rango >= 1 && rango <= 10) {
			System.out.println("La seleccion esta en el rango");
		} else {
			System.out.println("La seleccion esta fuera de rango");
		}
		
		/*
		 * Operador ternario.
		 * 
		 * Sintaxis: expresión ? respuesta_si_es_true : si_es_false
		 * 
		 * Realizar el ejercicio anterior usando el operador ternario
		 */
		String EvaluarRango = (rango >= 1 && rango <= 10) ? "La selección está en el rango." : "La selección está fuera de rango";
		System.out.println(EvaluarRango);
		
		System.out.println((rango >= 1 && rango <= 10) ? "La selección está en el rango." : "La selección está fuera de rango");
		
		// -------------------------------------------------------------------
		// =========================== Clase Scanner =========================
		// int age; // Declarando la variable age y guardandola como tipo integer
		Scanner myScan; // Declarando la variable myScan y guardandola como tipo Scanner
		
		myScan = new Scanner(System.in);
		
		System.out.println("Escribe tu nombre: ");
		String myName = myScan.nextLine(); // metodo .nextLine lee toda la linea hasta el salto de linea "/n"
		System.out.println("Tu nombre es: " + myName);
		
		System.out.println("Escribe una frase: ");
		String frase = myScan.next(); // metodo .next lee hasta el delimitador indicado
		System.out.println("La primer palabra de la frase es: " + frase);
		myScan.nextLine(); // Para consumir el resto de la frase y no se mantenga en buffer
		
		System.out.println("Escribe tu cancion favorita: ");
		String cancion = myScan.next(); // metodo .next lee hasta el delimitador indicado
		System.out.println("Tu cancion es: " + cancion);
		myScan.nextLine();
		
//		System.out.print("Dime tu numero entero favorito: ");
//		int number = myScan.nextInt();
//		System.out.println("Tu numero favorito es: " + number);
//		myScan.nextLine();
		
		System.out.print("Dime tu número entero favorito :");
		if( myScan.hasNextInt()  ) { // Verifica si existe un valor numérico entero
			int number = myScan.nextInt();
			System.out.println("Tu número favorito es: " + number);
			
		} else {
			System.out.println("No introdujiste un número entero");
		}
		myScan.nextLine();	// limpiar el buffer
		
		myScan.close(); // liberar recursos cerrando el myScan, ya no se puede utilizar hasta volver a declararlo
		
		
		
	}
}
