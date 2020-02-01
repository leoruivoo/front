function carregaHeros() { 
    setTimeout(function() {
    let heros = fetch('http://localhost:3000/api/heros');
    heros
    .then(data => data.json())
    .then(data => data.map(hero => {
    
    let _ul = document.getElementsByClassName("heroList")[0];
    console.log(_ul);
    let _li = _ul.childNodes[1];
    _li = _li.cloneNode(true);
   let _spanNum = _li.getElementsByClassName('numero')[0];
    let _spanName = _li.getElementsByClassName('heroName')[0];
   _spanNum.innerHTML = hero.id;
    _spanName.innerHTML = hero.nome;
   _ul.appendChild(_li);
   }))
    .catch(err => console.error(err))
    }, 300);
  }

  function postCurso(c, d) {
    /*var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      //if (this.readyState == 4 && this.status == 200) {
        document.getElementsByClassName("resp").innerHTML = this.responseText;
      //}
    };
    xhttp.open("POST", "http://localhost:8080/api/curso/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("nome=teste&departamento=teste");
    //xhttp.send("curso=" + c + "&departamento="  + d );
    */
   var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:8080/api/curso/",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "50193db1-ebba-4f16-8ccf-4a9d13ba7f55"
    },
    "processData": false,
    "data": "{\n\t\"nome\":\"ADS\",\n\t\"departamento\":\"5\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementsByClassName("resp").innerHTML = this.responseText;
  });
  }