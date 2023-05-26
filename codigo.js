function Aluno(){
    let nome = window.document.querySelector(".nom").value
    let n1 = Number(window.document.querySelector(".no1").value) 
    let n2 = Number(window.document.querySelector(".no2").value)
    let n3 = Number(window.document.querySelector(".no3").value)
    Math.round(media = (n1+n2+n3)/3)
    
    addEventListener("submit", (e) => {
        e.preventDefault();
    })
   
   
    if (media >= 6 ){
    document.querySelector(".aluno").innerHTML="<br><p style= color:green >"+"O aluno "+nome+" ficou com média de "+media.toFixed(1)+", logo foi aprovado!"+"</p>"}
    
    else {
   document.querySelector(".aluno").innerHTML="<br><p style= color:red >"+"O aluno "+nome+" ficou com média de "+media.toFixed(1)+", logo foi reprovado!"+"</p>"}

}

