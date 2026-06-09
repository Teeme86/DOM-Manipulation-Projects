
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes =  [{
    quote: `"I have no special talent. I am only passionately curious."` ,
    person: "Albert Einstein"
}, {
    quote: `"Be yourself; everyone else is already taken."`,
    person: "Oscar Wilde"
}, {
    quote: `"It always seems impossible until it's done."`,
    person: " Nelson Mandela"
}, {
    quote: `"The way to get started is to quit talking and begin doing."`,
    person: " Walt Disney"
}, {
    quote: `"That which does not kill us makes us stronger."`,
    person: "Friedrich Nietzsche"
}, {
    quote: `"It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood..."`,
    person: "Theodore Roosevelt"
}, {
    quote: `"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning."`,
    person: " Albert Einstein"
}, {
    quote: `"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."`,
    person: "Bil Keane"
}, {
    quote: `"The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy."`,
    person: "Martin Luther King Jr."
}, {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    person: "Dr. Seuss"
}, {
    quote: `"Three things in human life are important. The first is to be kind. The second is to be kind, and the third is to be kind."`,
    person: "Henry James"
}, {
    quote: `"Watch your thoughts, they become your words. Watch your words, they become your actions. Watch your actions, they become your habits."`,
    person: "Lao Tzu"
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma. Don't let the noise of others' opinions drown out your own inner voice."`,
    person: "Steve Jobs"
}, {
    quote: `"Do not go where the path may lead. Go instead where there is no path and leave a trail."`,
    person: "Ralph Waldo Emerson"
}, {
    quote: `"We can easily forgive a child who is afraid of the dark. The real tragedy of life is when men are afraid of the light." `,
    person: "Plato"
}, {
    quote: `"Keep your face always toward the sunshine, and shadows will fall behind you."`,
    person: "Walt Whitman"
}, {
    quote: `"Great minds discuss ideas. Average minds discuss events. Small minds discuss people."`,
    person: "Eleanor Roosevelt"
},
]

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})