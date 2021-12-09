

function verify() {
      const date = new Date()
      var Year = date.getFullYear()
      var YearOld = document.querySelector("#year")
      var res = document.querySelector("#result")
      if (YearOld.value.length == 0 || YearOld.value > Year) {
            window.alert("[ERROR - INVALID DATE]")
      } else {
            //window.alert("Tudo OK !")
            var Gender = document.getElementsByName("gender")
            var Age = Year - Number(YearOld.value)
            var GenderConfirmed = ""
            //res.innerHTML = `Idade calculada é de : ${Age}`
            if (Gender[0].checked) {
                  GenderConfirmed = 'Homem'
            } else if (Gender[1].checked) {
                  GenderConfirmed = 'Mulher'
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detetectamos que seu genero é : ${GenderConfirmed} com ${Age} anos.`

      }
}
      document.getElementById("button").addEventListener("mouseenter", mouseenter())
      document.getElementById("button").addEventListener("mouseout", mouseout)

      function mouseenter() {
            document.getElementById("button").style.color = "white"
            document.querySelector("#button").style.backgroundColor = "black"
      }

      function mouseout() {
            document.getElementById("button").style.color = "black"
            document.querySelector("#button").style.backgroundColor = "#5281d890"
      }