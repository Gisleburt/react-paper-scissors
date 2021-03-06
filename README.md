React Paper Scissors
====================

A quick game of Rock Paper Scissors using:
- React
- Redux
- Webpack
- Babel

How to use:
-----------

No webserver, so

```
npm run build
```

then open build/index.html

You can also find the files hosted here: https://gisleburt.github.io/react-paper-scissors/

Approach:
---------

- Got webpack + react + babel working with a quick hello world
- Sketched out a quick user flow (two steps: ready to play, and results)
- Skeleton of the screen
- Lots of tests
- Added game logic
- Tested

To Do:
------

- Better test coverage (I haven't covered the final game logic and there might be a bug!)
- Webpack Dev Server (should have done this at the start to see my changes faster)
- Rock, Paper, Scissor icons
- Better styles
- Right now, you can't see if it is responsive (everything was too small). Making larger icons, etc, might require 
  using some media queries, however, the use of flex-box, also means the "choices" section would break in two with one
  above the other anyway.
- It would be cool if the AI choice cycled possibilities while the player made their choice. 

Mistakes:
---------

- Made the button an HOC unnecessarily, which then didn't work for the play again button.
- I don't like testing the element type of components since this could be changed without breaking the element,
  all that matters from a unit point of view is that it renders something.
