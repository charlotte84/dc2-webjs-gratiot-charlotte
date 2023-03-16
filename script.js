let elt = document.getElementById('main');
elt.innerHTML = "<div>Je suis la div 1</div><div>Je suis la div 2</div><div>Je suis la div 3</div>";

var newElm = document.createElement("div");
newElm.innerHTML = "<div>Je suis la div 4</div><div>Je suis la div 5</div><div>Je suis la div 6</div>";
elt.appendChild(newElm);



elt.addEventListener("click",function(){
elt.innerHTML = "c'est cliqué";


});




var div = document.getElementById("div3");




let div1 = elt.getElementsByTagName("div")[0];
let div3 = elt.getElementsByTagName("div")[2];

function colorChange() {
    div1.style.color = "pink";
}

div3.addEventListener("click", colorChange);






let serpiereWrite = {
	type : "serpiere",
	matiere : 4
}

let serpiereLineadroite =JSON.stringify(serpiereWrite);
localStorage.setItem("serpiere",serpiereLineadroite);

let serpiereLineagauche = localStorage.getItem("serpiere");
let serpiereJsongauche = JSON.parse(serpiereLineagauche);


console.log(serpiereLineagauche)


elt.innerHTML = serpiereJsongauche


const nameInput = document.getElementById("name");

const registerButton = document.getElementById("register");

registerButton.addEventListener("click", function() {
  const name = nameInput.value;
  localStorage.setItem("nom", name);
});


var inputText = document.getElementById("inputText");
		var submitButton = document.getElementById("submitButton");
		var displayButton = document.getElementById("displayButton");
		var displayArea = document.getElementById("displayArea");

		submitButton.addEventListener("click", function() {
			var text = inputText.value;
			localStorage.setItem("text", text);
			alert("Texte enregistré !");
		});

		displayButton.addEventListener("click", function() {
			var text = localStorage.getItem("text");
			if (text) {
				displayArea.textContent = "Texte enregistré : " + text;
				localStorage.removeItem("text");
			}

		});



var str = "https://www.domain.com/page?name=francois1&id=opwiueru3920983r2&lastname=john"
var url = new URL(str);
var search_params = new URLSearchParams(url.search);

if(search_params.has('name')){
	var name =search_params.get('name');
	console.log(name)

}


var url = new URL(str);
var search_params = new URLSearchParams(url.search);

if(search_params.has('id')){
	var id =search_params.get('id');
	console.log(id)

}



var url = new URL(str);
var search_params = new URLSearchParams(url.search);

if(search_params.has('lastname')){
	var lastname =search_params.get('lastname');
	console.log(lastname)

}