package com.mundopokemon;

public class Pokemon {
	String nombre;
	String tipo;
	int puntosPoder = 999;
	int numPokedex;
	
	static int counter = 500; // para iniciar el contador a partir del 500
	
	// bloque de inicializacion de atributos no estaticos, no es necesaria y se puede hacer desde la declaracion
	{
		this.nombre = "---";
		this.tipo = "---";
		this.puntosPoder = 100;
	}
	
	static {
		counter = 200;
	}
	
	// bloque de inicializacion de atributos estaticos
	Pokemon() {
		this.numPokedex = ++counter;
	}
	
	Pokemon(String nombre, String tipo, int puntosPoder){
		this();
		this.nombre = nombre;
		this.tipo = tipo;
		this.puntosPoder = puntosPoder;
	}
	
	String detalles() {
		return this.numPokedex + ": " + this.nombre + ", tipo: " + this.tipo + ", puntos de poder: " + this.puntosPoder; 
	}
}
