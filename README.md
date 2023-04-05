# [memory game](https://seanstephenbrian.github.io/memory-game/)

this is a simple memory card game developed with react.

game state variables such as the won/lost status, the current round number, total clicks, and user high
score are saved in the component state of the top-level `App`.

each `Card` component contains a 'clicked' variable in its own state to track whether the user has 
already clicked the card. successful clicks are relayed up to the `Round` component to increment the 
current round's click count. 

a react hook checks the current click count against the round's total card count after any change to either variable; if two values are the same, a 'round won' message is relayed up to 
the parent `App` component, which increments the round number, checks if the game has been won, updates 
the card quantity for the current round, and so on.

similar communication between the `Card`, `Round`, and `App` components occurs when the user makes a 
bad click, triggering the 'game lost' message.