/* inscription */
function validation(){
    var nom=document.forms["form"]["name"].value
    mail=document.forms["form"]["mail"].value
    mdp=document.forms["form"]["pw"].value
    v=document.forms["form"]["vrpw"].value
    x=document.getElementById("section")
    if((nom=="" || mail=="" || mdp=="" || v=="" )  ){
        if(nom==""){
            alert("ecrire votre nom")
        }
        if(mail==""){
            alert("donner un mail")
        }
        if(mdp==""){
            alert("saisir une mdp")
        }
        if (v==""){
            alert("verifier votre mdp")
        }
        if(mdp!==v){
            alert("mdp inccorect")
        }
    }else{
        x.innerHTML=`
        votre compte a été créé <br>
        <button><a href="projet.html">retour</a></button>
        `
    }
}



