function first () {
  showMessage('hei pissay')
  let mesaj = ' hey alex ne ftem'
  let price = 1.2 + 2.2
  showMessage(mesaj)
  console.log(typeof price)

  let mySymbol = Symbol()

  let person = {
    firstName: 'Johnson',
    astName: 'Stefan',
    [mySymbol]: 'secretInformation',
    showInfo: function (realAge) {
      showMessage(this.firstName + ' ' + this.lastName + 'age is ' + realAge)
    }
  }
  let bos = true
  console.log(person.firstName)

  for (let i = 0; i <= 50; i++) {
    setDiscount(i)
  }
  console.log(person.mySymbol)
  person.showInfo(40)
}
//value and ref passing

function valueRef () {
  let person = {
    name: 'John',
    age: 30,
    partTime: false,
    showInfo: function () {
      console.log('merge')
    }
  }

  function modifyName (person, name) {
    person.name = name
  }

  modifyName(person, 'stefan')
  showMessage(person.name)
}

//valueRef();

// objects
objectsDates()
function objectsDates () {
  let now = new Date()
}
