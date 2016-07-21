/*
  Acá también se puede agregar cuestiones raras dentro de este tipo de comentariado
*/
var diametro=1;

// Función setup se ejecuta una vez al principio
function setup() {
  createCanvas(400, 300);// para crear lienzos (horizontal, vertical)
  background(255, 0, 255); //para poner color al fondo
}


//Se ejecuta después de setup y 60 veces por segundo
function draw() {
  background(255, 0, 255); //pinta el fondo para que no quede la estela de dibujos que crea con el mouse

  estiloEclipse1();
  ellipse(mouseX, mouseY, 40, 40);  
  estiloEclipse2();
  ellipse(mouseX, mouseY, 100, 100);  
  diametro += 1;
}

function estiloEclipse1(){
    //ellipse(posX, posY, width, height) dibuja un elipse
  //todos los valores se informan en pixeles
  //Todo lo que se pinta tiene su orden para ser mostrado
  //mouseX, mouseY son las posiciones X e Y del mouse
  noFill();//Esta función deja el background transparente
  var anchoBorde = 1;
  strokeWeight(anchoBorde);//strokeWeight(px): Esta función pinta el border del ellipse
  stroke(1,1,100);//stroke(R,G,B)
  fill(50,100,150);//fill(R,G,B)

}
function estiloEclipse2(){
    //ellipse(posX, posY, width, height) dibuja un elipse
  //todos los valores se informan en pixeles
  //Todo lo que se pinta tiene su orden para ser mostrado
  //mouseX, mouseY son las posiciones X e Y del mouse
  noFill();//Esta función deja el background transparente
  var anchoBorde = 1;
  strokeWeight(anchoBorde);//strokeWeight(px): Esta función pinta el border del ellipse
  stroke(50,50,100);//stroke(R,G,B)
  fill(50,100,150);//fill(R,G,B)

}