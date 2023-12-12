package animales.zoologico;

/*
 *  Crear una clase de un animal
 *    3 atributos no estáticos (instancia)
 *    1 atributo estático (clase)
 *    2 métodos constructores sobrecargados
 *    2 métodos  no estáticos  (instancia)
 *    1 método estático (clase)
 *    
 *  Crear una clase de prueba de la Clase animal
 * 
 * 
 * Crear una clase que contenga la clase animal creada.
 */

public class Felino {
	
	int edad;
	String tipo;
	String colorPelaje;
	
	static int cantidadFelinos = 0;
	
	Felino(){
		cantidadFelinos++;
	}
	
	Felino(int edad, String tipo, String colorPelaje){
		this();
		this.edad = edad;
		this.tipo = tipo;
		this.colorPelaje = colorPelaje;
	}
	
	public void ronrronear() {
		System.out.println(tipo + " " + "Ronrroneando... grr");
	}
	
	public void dormir() {
		System.out.println(tipo + " " + "Durmiendo... zzz");
	}
	
	public static void imprimirCantidadFelinos() {
		System.out.println("Cantidad total de felinos: " + cantidadFelinos);
	}
}
