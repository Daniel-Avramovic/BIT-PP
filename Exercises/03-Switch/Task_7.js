//7.Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message"Please choose a different city".

var city = 'Zagreb';
var resCity; 
switch (city) {
    case 'Beograd':
    case 'Novi-Sad':
    case 'Kragujevac':
        resCity = ('Serbia');
        break;
    case 'Sarajevo':
    case 'Banja-Luka':
    case 'Tuzla':
    case 'Sarajevo':
        resCity = ('BiH');
        break;
    case 'Zagreb':
    case 'Split':
    case 'Rijeka':
    case 'Osjek':
        resCity = ('Croatia');
        break;
    case 'Wien':
    case 'Graz':
    case 'Linz':
    case 'Wels':
        resCity = ('Osteraih');
        break;
    case 'Podgorica':
    case 'Niksic':
    case 'Bjelo-Polje':
    case Bar:
        resCity = ('Montenegro');
        break;
    default:
        resCity = ('Please choose a different city');
        break;
}
console.log(resCity);