package com.santander;

public class ATM {
	
	// atributo de instancia (non-static fields)
	double balance;
	int serialNumber;
	
	
	// atributo de clase (static fields)
	static String bankName = "Santander";
	static int counter = 0;
	
	// metodo constructor
	/**
	 * Método constructor
	 * 
	 * El método constructor se utiliza para iniciar objetos de una clase
	 * El constructor se llama automáticamente cuando se crea una instancia
	 * de la clase utilizando la pabra reservada new.
	 * Su propósito es asignar valores iniciales a los objetos
	 * Características:
	 *  - Su nombre es idéntico al de la clase.
	 *  - No tiene un tipo de retorno explícito.
	 *  - Puede tener parámetros
	 *  - Puede ser sobrecargado
	 *  Constructor por default: no tiene parametros
	 *  Si no se agrega algun constructor java proporciona este metodo
	 */
	ATM(){
		this.serialNumber = ++counter;
	}
	
	ATM(String message){
		this();
		System.out.println(message);
	}
	
	/**
	 * Constructor sobrecargado
	 * Los metodos sobrecargados tienen el mismo nombre pero diferentes parametros
	 * 
	 * 	this: palabra reservada que se utiliza para hacer referencia al objeto en el que se encuentra el contexto de la ejecucion.
	 * 
	 * 	Para invocar a un constructor, desde otro constructor se utiliza this y se envian los argumentos del constructor deseado.
	 * 
	 * 	El llamado a un constructor debe ser la primera linea
	 * 
	 * @param balance cantidad disponible del cajero
	 */
	ATM(double balance){
		this("Estoy iniciando mi balance");
		this.balance = balance;
	}
	
	ATM(boolean isComercialPlace){
		this(isComercialPlace ? 50_000 : 10_000);
	}
	
	// metodos de instancia
	
	// metodos de clase
	public static void main(String[] args) { // Punto de entrada
		ATM cajero01 = new ATM(); // Creacion de un objeto
		cajero01.balance = 1000; // Asignar $1000 al balance, con .balance se invoca el atributo de instancia que pertenece a la clase ATM
		// cajero01.serialNumber = 1;
		// System.out.println(cajero01.bankName); // no se recomienda porque se puede pensar que es un atributo de instancia y no de clase
		System.out.println(ATM.bankName); // recomendable
		
		// Creamos el cajero02 y asiganrle $2000 al balance
		ATM cajero02 = new ATM();
		cajero02.balance = 2000;
		// cajero02.serialNumber = 2;
		// System.out.println(cajero02.bankName);
		System.out.println(ATM.bankName); // recomendable
		
		// Creamos el cajero 03 y aignamos $3000 al balance
		ATM cajero03 = new ATM(3000);
		
		ATM cajero04 = new ATM(true);
		ATM cajero05 = new ATM(false);
		
	}
}
