<script>
var cont=[];
		function avvio()
		{
			//input delle impostazioni
			output=document.getElementById("generato");
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
			}
			//output
			var progressione="";
			var lead= new nota(cont, progressione, ton);
			progressione=lead.prossima();
			output.innerHTML=cont[0]+" "+progressione+cont[0];
		}
		
		//oggetto nota
		function nota(note,progressione, prec)
		{
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
		}
</script>