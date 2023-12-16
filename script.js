var quote = document.getElementById("quote");
var quotes = [
    {
        'Author': `J.K. Rowling, Harry Potter and the Goblet of Fire.`,
        'Quote': `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`
    },
    {
        'Author': `Maya Angelou`,
        'Quote': `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`
    },
    {
        'Author': `William W. Purkey`,
        'Quote': `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.`
    },
    {
        'Author': `Andre Gide, Autumn Leaves`,
        'Quote': `In three words I can sum up everything I've learned about life: it goes on.`
    },
    {
        'Author': `Robert Frost`,
        'Quote': `It is better to be hated for what you are than to be loved for what you are not.`
    },
    {
        'Author': ` Markus Zusak, I Am the Messenger`,
        'Quote': `Sometimes people are beautiful.
        Not in looks.
        Not in what they say.
        Just in what they are.`
    },
];

function newQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    quote.innerHTML = `<h4>${randomQuote['Quote']}</h4><br>-${randomQuote['Author']}`;
}
