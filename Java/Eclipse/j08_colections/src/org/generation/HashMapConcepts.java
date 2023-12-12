package org.generation;

import java.util.HashMap;

public class HashMapConcepts {

	public static void main(String[] args) {
		/**
		 * Una colección Map, es una relación clave(key):valor(value)
		 * que forma una tabla de datos.
		 */
		
		// Definimos una colección HashMap
		// < key, value   >
		HashMap<Integer, String > students = new HashMap<>();
		
		// agregamos valores con put()
		students.put(1234, "Migue O");
		students.put(1235, "Olivia R");
		students.put(1236, "Fernando J");
		students.put(1250, "Mirta T");
		
		System.out.println(students);
		
		// reemplazar un elemento
		students.put(1250, "Liliana O");
		System.out.println(students);
		
		// mostrar un elemento con get(key)
		System.out.println("Persona con numero 1235: " + students.get(1235));
		
		// removiendo un elemento remove(key)
		System.out.println("Elemento eliminado: " + students.remove(1234));
		System.out.println(students);
		
		// iterar la coleccion con sus keys
		for(int matricula : students.keySet()) {
			System.out.println(matricula + " - " + students.get(matricula));
		}
		
		// iterar la coleccion con sus valores
		for (String student : students.values()) {
			System.out.println("Estudiante: " + student);
		}
		
		students.forEach((key,value) -> System.out.println(key + " - " + value));
		

	}

}
