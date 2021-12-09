function calcule() {
      // Recebe o valor "Inicio"
      let ini = document.querySelector("#enterpoint");

      // Recebe o valor "Fim"
      let end = document.querySelector("#endpoint");

      // Recebe o valor "Passo"""
      let pass = document.querySelector("#pass");

      // Recebe o ID "Res" que fica dentro da última div.
      let res = document.querySelector("#res");

      // Verificando estrutura se houver let = null mostrará um erro.
      if (ini.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
            window.alert(`Error 404`)
      }else{
           res.innerHTML = `<strong>Calculando...</strong>`
           let i = Number(ini.value)
           let e = Number(end.value)
           let p = Number(pass.value)
            // Estrutura de repetição com FOR.
           for(let c = i; c <= e; c += p){
                 res.innerHTML += `${c} \u{1F635}`
           }
      }
}