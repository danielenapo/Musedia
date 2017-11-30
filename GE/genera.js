var cont=[];
		function avvio()
		{
			//input delle impostazioni
			output=document.getElementById("generato");
			//input tempo
			var tempo=document.getElementById("tempo").value;
			//input n°battute
			var battute = document.getElementById('battute').value;
			//input tipo di scala
			var scala_value = document.getElementsByName('scala');
			var scala;
			for(var i = 0; i < scala_value.length; i++){
				if(scala_value[i].checked){
					scala = scala_value[i].value;
				}
			}
			//tonalità
			var ton=document.getElementById("ton").value;
			output.innerHTML+=ton;
			//calcolo delle note
			switch(ton)
			{
				case "C":
					{
						if(scala=="maggiore")
							cont=["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];
						else if(scala=="minore")
							cont=["DO", "RE", "MIb", "FA", "SOL", "LAb", "SIb"];
						else if(scala=="blues")
							cont=["DO" , "MIb" , "FA" , "SOLb" , "SOL" , "SIb" , "DO" ];
					}
					break;

				case "D":
					{
						if(scala=="maggiore")
							cont=["RE", "MI", "FA#", "SOL", "LA", "SI", "DO#", "RE"];
						else if(scala=="minore")
							cont=["RE", "MI", "FA", "SOL", "LA", "SIb", "DO", "RE"];
						else if(scala=="blues")
							cont=["RE", "FA#", "SOL", "LAb", "LA", "DO", "RE"];
					}
					break;
			}
			//output
			var progressione="";
			var lead= new nota(cont, progressione, ton, battute, tempo);
			progressione=lead.prossima();
			tempi=lead.generaTempo();
			output.innerHTML=cont[0]+" "+progressione+cont[0];
		}


		function nota(note,progressione, prec, battute, max) //oggetto
		{
			this.max=max;	//max è il tempo, chiamato così per non confondere nella funzione generaTempo()
			this.battute=battute
			this.note=note;
			this.progressione=progressione;
			this.prec=prec;
			//metodo che calcola la progressione di accordi
			this.prossima =function()
			{

				for(var i=0; i<10; i++)
				{
				//1 a tutti, 2 a 4 o 6, 3 a 6, 4 a
				var random=Math.floor(Math.random()*7);
				progressione+= cont[random]+" ";
				}
					return progressione;
			}
			this.generaTempo()
			{
				tempi=[];					//vettore con tutti ti tempi delle note
				valori=[0.5,1,2];		//valori possibili(in ordine croma, semiminima, minima)
				for(var k=0; k<battute;k++)	//for delle battute
				{
					sommaf=0; //somma finale
					somma=0;	//somma temporanea
					do       //generazione singolabattuta
					{
						somma=sommaf;
						random=Math.floor(Math.random() * 3);	//generazione dell'indice di valori[] in modo random
						somma+=valori[random];
						if(somma<=max)	//se la somma temporanea non supera il numero di battiti massimi, aggiorna somma finale
						{
							sommaf+=valori[random];
							tempi.push(valori[random]);
						}

					}while(sommaf!=max);
				}
				return tempi;
			}
		}


		function Probabilita(percentuale)
		{
			var random=Math.floor((Math.random()*10)+1);
			if (random<=5)
				return true;
			else
				return false;
		}
