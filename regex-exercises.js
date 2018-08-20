//Stock market ticker tests
let matchesStockMarketTicker = (string) => {
    const stockTickerExpression = /^[A-Z]{3,5}$/
    return stockTickerExpression.test(string);
};
console.assert(matchesStockMarketTicker('AAPL') === true, 'AAPL is a valid stock market ticker');
console.assert(matchesStockMarketTicker('GOOGA') === true, 'GOOGA is a valid stock market ticker');
console.assert(matchesStockMarketTicker('MDB') === true, 'MDB is a valid stock market ticker');
console.assert(matchesStockMarketTicker('123') === false, '123 is not valid stock market ticker');
console.assert(matchesStockMarketTicker('a123') === false, 'a123 is not valid stock market ticker');
console.assert(matchesStockMarketTicker('134a') === false, '134a is not valid stock market ticker');

//Credit card statements

let matchesCreditCardNumber = (number) => {
    const creditCardExpression = /^[0-9]{3,4}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}-?$/
    return creditCardExpression.test(number);
};

console.assert(matchesCreditCardNumber(4000123498762746) === true, '4000123498762746 is a valid credit card number');
console.assert(matchesCreditCardNumber('4000-1234-9876-2746') === true, '4000-1234-9876-2746 is a valid credit card number');
console.assert(matchesCreditCardNumber('345-4000-1234-9876') === true, '345-4000-1234-9876 is a notvalid credit card number');
console.assert(matchesCreditCardNumber(400012349876) === false, '400012349876 is a not valid credit card number');
console.assert(matchesCreditCardNumber('4000-1234-9876') === false, '4000-1234-9876 is a not valid credit card number');

//Links

let matchesLink = (link) => {
    const linkExpression = /^https?:\/\/[0-9a-zA-Z]+[.]\S+$/;
    return linkExpression.test(link);
}

console.assert(matchesLink('https://google.com') === true, "https://google.com is a valid link");
console.assert(matchesLink('http://facebook.com/mysite.html?q=hello') === true, "http://facebook.com/mysite.html?q=hello is a valid link.");
console.assert(matchesLink('http://google.co') === true, 'http://google.co is a valid link.');
console.assert(matchesLink('google.com') === false, 'google.com is not a valid link.');
console.assert(matchesLink('http://google') === false, 'http://google is not a valid link');
console.assert(matchesLink('htt:/google.com') === false, 'htt://google.com is not a valid link');
console.assert(matchesLink('http:/google.com') === false, 'http:/google.com is not a valid link.');

// Episode Lists

let matchesEpisode = (html) => {
const episodeExpression = /<tr class="vevent" style="text-align:center;background:inherit"><th scope="row" [^<]+<\/th><td>[^<]+<\/td><td class="summary" style="text-align:left">"([^"]+)"<\/td><td><b>[^<]+<\/b>,[^<]+<\/td><td>(<a href="[^"]+" title="[^"]+">)?[^<]+(<\/a>)?<\/td><td>([^<]+)/

return link.match(episodeExpression);

matchesEpisode()