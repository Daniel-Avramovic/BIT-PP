var hero = {
    name: 'Superhero',
    sayName: function(){
        console.log('Hi, I am ' + this.name);
    }
}
// hero.sayName();

function Hero (name, occupation, kind){
    this.kind = kind;
    this.name = name;
    this.occupation = occupation;
    this.sayName = function(){
        return 'Hi, I am ' + this.name;
    }
}
var hero1 = new Hero('Leonrdo', 'Ninja', 'Turtle');
var hero2 = new Hero('Donatelo', 'Ninja', 'Turtle');
var hero3 = new Hero('Rafaelo', 'Ninja', 'Turtle');
var hero4 = new Hero('Spliner', 'Ninja', 'Rat');

console.log(hero1.sayName(), hero4.sayName());

function createCat (name, color, weigth){
    var obj = {};
    obj.name = name;
    obj.color = color;
    obj.weigth = weigth;

    obj.sleep = function(){
        console.log('Zzzzzzz...');
    }
    obj.sayMeow = function(times){
        times = times || 1;
        for(var i = 0; i < times; i++){
            console.log('Meow!!!');
        }
    }
    return obj;
}
var cat1 = createCat('Leo', 'white', 5);

cat1.sayMeow();