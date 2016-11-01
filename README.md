# chatbot-normalizer

This package attempts to process a string and make it easier to consume by bots.

___

1. spelling corrections for common spelling errors
2. idiom conversions
3. junk word removal from sentence
5. special sentence effects (question, exclamation, revert question)
6. abbreviation expansion and canonization
7. British & Canadian english to American english

example conversions:

```
Nov 1st I weighed 90 kgs. total
November 1st I weighed 90 kilograms total
```

```
I’ll listen to y’all
I will listen to you all
```

```
armour axe coloured gold
armor ax colored gold
```

```
are we sceduled thrsday for teh restraunt
are we scheduled Thursday for the restaurant
```

Use:

```
import normalize from 'chatbot-normalizer'

normalize('Your string here')
.then(output => {
  console.log(output)
  })
```
