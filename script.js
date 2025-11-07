function generationNumber(){
 
    const min=Math.ceil( document.querySelector('.input1').value)
  const max=Math.floor(document.querySelector('.input2').value)

  if( min >= max){
    alert("O valor minimo tem que ser MENOR que o valor maximo")
  }
  else{
    const result =Math.floor(Math.random() * (max - min) + min);

  alert(result) 
  }
  
  
}