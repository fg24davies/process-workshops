# Process Workshop 04 May 21

You are meeting a friend in New York City, where all roads are laid out in a perfect grid. You arrived ten minutes too early to the appointment, so you decided to take the opportunity to go for a short walk.
The city provides its tourists with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk. eg. ['n', 's', 'w', 'e']

You always walk one block at a time in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

```
ten_minute_walk?(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w']) # => true
ten_minute_walk?(['w', 's', 'e', 'n', 'n', 'e', 's', 'w', 'w', 'w']) # => false
ten_minute_walk?(['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n']) # => false
ten_minute_walk?(['w', 's']) # => false
```

length has to be 10 otherwise false
has be equal numbers of N/S and E/W

| Input                                              | Output |
| -------------------------------------------------- | ------ |
| ['w', 's']                                         | false  |
| ['w', 's', 'e', 's', 's', 'e', 's', 'w', 'n', 'n'] | false  |
| ['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'] | true   |
