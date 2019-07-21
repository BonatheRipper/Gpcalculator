

	points = []
	var input2 = $(".input2");
	var input3 = $(".input3");
	var button = $("#butt");
	var course = $(".course");
	var add = $("#add");

	add.on("click", function(){
		Cn=$(".course").val();
		G=$("select").val();
		U=$(".input2").val();
		//This is the Course Name;
			 $("#tb").append('<tr class="bg-primary"><td>'+Cn+'</td><td>'+G+'</td><td>'+U+'</td></tr>');

A=5; B=4; C=3; D=2; E=1; F=0;
   H = eval($("select").val()) * eval(input2.val());
		 points.push(H);
		 //This multiplies the Grade and unit then push to array.
		 console.log(H);
		 
		 input2.val("");
     $(".course").val("");
     //This empties the inputs
	});

	button.on("click", function(){

		

		 J = eval(Number(input3.val()))
		 //This is the Total Units 
		

		var T = 0
		for(var i=0; i<points.length; i++){
			T+= Number(points[i])
		}
		//We sum the array with this loop. 
		
		//We Divide Sum of multiple of Grade and unit then print.
    l = (J/T)
    h = (l * 10)/ 10
    p=h.toFixed(2)
    console.log(p)
    $(".1score").text(p)
		
	})

