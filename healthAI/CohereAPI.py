import cohere
from cohere.responses.classify import Example

co = cohere.Client('oMAjSR2qS6SCrobemgS3a2t55ZSGSE5Xu6d8dNoN')

examples=[
  Example("I've ordered a pizza for my birthday. The order came 5 days early. I wasn't really hungry then, but still I could have some pizza so I ate some even though it was 5 days before my birthday.", "positive review"),
  Example("The item exceeded my expectations", "positive review"),
  Example("I ordered more for my friends", "positive review"),
  Example("I would buy this again", "positive review"),
  Example("I would recommend this to others", "positive review"),
  Example("The package was damaged", "negative review"),
  Example("The order is 5 days late", "negative review"),
  Example("The order was incorrect", "negative review"),
  Example("I want to return my item", "negative review"),
  Example("The item's material feels low quality", "negative review"),
  Example("The product was okay", "neutral review"),
  Example("I received five items in total", "neutral review"),
  Example("I bought it from the website", "neutral review"),
  Example("I used the product this morning", "neutral review"),
  Example("The product arrived yesterday", "neutral review")
]
inputs=[
  "This item was broken when it arrived",
  "The product is amazing",
  "The product was not too bad"
]

response = co.classify(
  inputs=inputs,
  examples=examples,
)
print(response)