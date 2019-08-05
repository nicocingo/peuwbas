let canvas = document.getElementById("canvas"),textArriba,textAbajo;

function GenerarMeme(){
			textArriba=document.getElementById("txtTextoArriba").value;
			textAbajo=document.getElementById("txtTextoAbajo").value;
			var ContextoCanvas = canvas.getContext("2d");
			var ObjetoImagen = new Image();
				ObjetoImagen.onload = function(){
				canvas.width = ObjetoImagen.width * 0.7;
				canvas.height = ObjetoImagen.height * 0.7;
                ContextoCanvas.drawImage(ObjetoImagen, 0, 0,canvas.width ,canvas.height);

                // Datos texto Meme (font)
				ContextoCanvas.font ='40px Impact';
		    ContextoCanvas.lineWidth =5;
				ContextoCanvas.lineJoin = 'round';
				ContextoCanvas.fillStyle = 'white';
	      ContextoCanvas.strokeStyle = 'black';
	      ContextoCanvas.textAlign = 'center';

				textAbajo = textAbajo.toUpperCase();
				x = canvas.width/2;
				y = canvas.height - canvas.height/18;

				ContextoCanvas.strokeText(textAbajo, x, y);
				ContextoCanvas.fillText(textAbajo, x, y);

				textArriba = textArriba.toUpperCase();
				ContextoCanvas.strokeText(textArriba, x, 42);
				ContextoCanvas.fillText(textArriba, x, 42);
	};
	 ObjetoImagen.src = document.getElementById("image").src;
};




function RedimensionarImagen(base64, maxWidth, maxHeight) {
  if(typeof(maxWidth) === 'undefined') var maxWidth = 500;
  if(typeof(maxHeight) === 'undefined') var maxHeight = 500;
  var canvas = document.createElement("canvas");
  var ContextoCanvas = canvas.getContext("2d");
  var CopiaCambas = document.createElement("canvas");
  var copyContext = CopiaCambas.getContext("2d");
  var ImgenTemporal = new Image();
  ImgenTemporal.src = base64;
  var ratio = 1;
  if(ImgenTemporal.width > maxWidth)
    ratio = maxWidth / ImgenTemporal.width;
  else if(ImgenTemporal.height > maxHeight)
    ratio = maxHeight / ImgenTemporal.height;
  CopiaCambas.width = ImgenTemporal.width;
  CopiaCambas.height = ImgenTemporal.height;
  copyContext.drawImage(ImgenTemporal, 0, 0);
  canvas.width = ImgenTemporal.width * ratio;
  canvas.height = ImgenTemporal.height * ratio;
  ContextoCanvas.drawImage(CopiaCambas, 0, 0, CopiaCambas.width, CopiaCambas.height, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL();
}
 GenerarMeme();

var imagen=document.getElementsByClassName("imgthumbnail");
for(i=0;i<imagen.length;i++){
	imagen[i].onclick = function() { document.getElementById("image").src=this.src;GenerarMeme(); };
}
