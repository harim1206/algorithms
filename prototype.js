//https://www.youtube.com/playlist?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub
//fun fun function playlist
function prototype() {
  // function name does not have to be capitalized, but for ones used with a constructor, typically are.
  function Animal() {
    this.name = 'bob';
  }

  Animal.prototype.sayHello = () => console.log('hello');

  // initialized with new keyword. In this case, Animal() is called a ****constructor***
  const bob = new Animal();

  // Animal's prototype object.
  console.log(Animal.prototype);
  console.log(Object.getPrototypeOf(Animal)); // another way of getting Animal's prototype object.

  // To get bob's prototype. Bob is instantiated with Animal's constructor, therefore is linked to Animal's prototype.
  console.log(bob.__proto__ === Animal.prototype); // true
  console.log(Object.getPrototypeOf(bob) === Animal.prototype); // true
  console.log(Animal.__proto__); // or Object.getPrototypeOf(Animal) => {} ---- Animal does not have another prototype object it is instantiated from. Should probably return null or an error or something

  console.log(Animal.prototype !== Animal.__proto__); // Animal's prototype object is not the same thing as Animal.__proto__, which is trying to obtain the prototype object it is instantiated from. Animal is not instantiated therefore it does not exist.
}

function prototypeChain() {
  /*
    Prototype Chaining
  */

  console.log(Animal.prototype.__proto__ === Object.prototype); // Animal's prototype object has a prototype object it is instantiated from, which is Object.prototype - prototypal cahining
  console.log(Object.getPrototypeOf(Animal.prototype) === Object.prototype);
}

function objectCreate() {
  // function name does not have to be capitalized, but for ones used with a constructor, typically are.
  function Car(name) {
    this.name = name;
  }

  /*
  Car.prototype = {
    sayHello: () => console.log(this.name)
  }
  */

  Car.prototype.sayHello = function () {
    return `hello ${this.name}`;
  };

  // initialized with a constructor
  const dan = new Car('dan');
  // create a new object named sarah, with prototype linked to Car's prototype object.
  const sarah = Object.create(Car.prototype);
  // sarah.name = 'sarah';
  console.log('sarah: ', sarah);
  console.log('Object.getPrototypeOf(sarah): ', Object.getPrototypeOf(sarah));

  console.log(dan.sayHello());
  console.log(sarah.sayHello());
}

function newKeyWord() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    return `hello ${this.name}`;
  };

  /*
    new keyword
    1. creates a new object
    2. It binds this to the object
    3. set new object's prototype to Person.prototype (harim.__proto__ || Object.getPrototypeOf(harim) === Person.prototype)
    4. set the properties defined in Person
    5. return the new object harim
  */
  const harim = new Person('harim');

  function createPerson(name) {
    // creates a new object whose prototype is Person's prototype
    let obj = Object.create(Person.prototype);
    obj.name = name;

    return obj;
  }
  const mustang = createPerson('mustang');

  console.log('mustang: ', mustang);
  console.log('mustang.sayHello(): ', mustang.sayHello());
  console.log(
    'Object.getPrototypeOf(mustang): ',
    Object.getPrototypeOf(mustang)
  ); // Person.prototype
}

function betterWayOfCreatingObjects() {
  const Person = {
    init: (name) => {
      this.name = name;
    },
    sayHello: () => {
      return `hello ${this.name}`;
    },
  };

  const harim = Object.create(Person); // Create a new object whose __proto__ is Person object.
  harim.init('harim');
  console.log(harim.sayHello());
}

function classVsConstructor() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    return `hello ${this.name}`;
  };

  class Animal {
    constructor(name) {
      this.name = name;
    }

    sayHello() {
      return `hello ${this.name}`;
    }
  }

  class Cat extends Animal {
    constructor(name) {
      super(name);
    }

    sayHello() {
      return `hello ${this.name}`;
    }
  }

  const dog = new Animal('dog');
  const cat = new Animal('cat');
  const harim = new Person('harim');
  console.log('harim: ', harim);
  console.log('harim.sayHello(): ', harim.sayHello());
  console.log('Object.getPrototypeOf(harim): ', Object.getPrototypeOf(harim)); // Person.prototype
  console.log('Animal.prototype: ', Animal.prototype); // {}
  console.log('Cat.prototype: ', Cat.prototype); // Animal {}
  console.log('Object.getPrototypeOf(dog): ', Object.getPrototypeOf(dog)); // {}
  console.log('Object.getPrototypeOf(cat): ', Object.getPrototypeOf(cat)); // {}
}

function thisKeyword() {
  const dog = {
    sound: 'woof',
  };

  function talk() {
    console.log(this.sound);
  }

  const dogTalk = talk.bind(dog);
  // dogTalk();
  // talk();

  // setTimeout(talk.bind(dog), 500);
  // setTimeout(talk, 500);

  /*
    arrow functions do not have a concept of `this` inside the function.

    el.addEventListener('click', function() {
      this.classList.toggle('active');
    });

    this points to `el`, because this defined in the function points to the object that it is calling.

    el.addEventListener('click', () => {
      this.classList.toggle('active');
    });

    the arrow function does not have the concept of binding, so it doesn't bind `this` to `el` like a normal function would. So it points to the window object.

    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });

  */

  const Person = {
    name: 'harim',
    arrow: () => {
      //this is not bound to Person
      console.log(this.name); // undefined
      // console.log(this); // global
    },
    func: function () {
      // traditional function - `this` points to Person
      console.log(this.name); // 'harim'
      // console.log(this); //Person
    },
    async: function () {
      // the function executes on the window scope
      setTimeout(function () {
        console.log(this.name);
      }, 300);
    },
    asyncArrow: function () {
      // arrow function does not bind this to the window, therefore this points to the context, which is the Person object.
      setTimeout(() => {
        console.log(this.name);
      }, 300);
    },
  };

  Person.arrow(); //undefined
  Person.func(); //harim
  Person.async(); //undefined
  Person.asyncArrow(); //harim

  const Dog = function (firstName) {
    this.firstName = firstName;
    this.sayName1 = function () {
      console.log(this.firstName);
    };
    this.sayName2 = () => {
      console.log(this.firstName);
    };
  };

  const john = new Dog('John');
  john.sayName1(); //John
  john.sayName2(); //John
}

// objectCreate();
// classVsConstructor();
thisKeyword();
