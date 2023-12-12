package com.santander;

import java.util.ArrayList;

public class Branch {
	int serialNumber;
	ArrayList< ATM > atms; // branch(sucursal) has atms
	String address;
	static int counter;
	
	Branch(String address){
		this.address = address;
		this.atms = new ArrayList<>();
		this.serialNumber = ++counter;
	}
	
	void addATM(ATM newATM) {
		this.atms.add( newATM );
	}
	
	String details() {
		String message = this.serialNumber + " " + this.address;
		
		for (ATM atm : atms) {
			message += "\n ATM" + atm.serialNumber + " $" + atm.balance;
		}
		return message; 
	}
}
