const cohere = require('cohere-ai');
cohere.init('oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN')

const examples = [
  { text: 'The order came 5 days early', label: 'positive review' },
  { text: 'The item exceeded my expectations', label: 'positive review' },
  { text: 'I ordered more for my friends', label: 'positive review' },
  { text: 'I would buy this again', label: 'positive review' },
  { text: 'I would recommend this to others', label: 'positive review' },
  { text: 'The package was damaged', label: 'negative review' },
  { text: 'The order is 5 days late', label: 'negative review' },
  { text: 'The order was incorrect', label: 'negative review' },
  { text: 'I want to return my item', label: 'negative review' },
  { text: "The item's material feels low quality", label: 'negative review' },
  { text: 'The product was okay', label: 'neutral review' },
  { text: 'I received five items in total', label: 'neutral review' },
  { text: 'I bought it from the website', label: 'neutral review' },
  { text: 'I used the product this morning', label: 'neutral review' },
  { text: 'The product arrived yesterday', label: 'neutral review' },
];
const inputs = [
  'This item was broken when it arrived',
  'The product is amazing',
  'The product was not too bad',
];

(async () => {
  const response = await cohere.classify({
    inputs: inputs,
    examples: examples,
  });
  console.log(response);
})();