# Calendar Conflicts - Pairing Kit

A base repository for pair programming calendar conflicts in JS.

## Instructions

Given a calendar with multiple events that have a start and end time, find all events that overlap and return them.

An example set of events would look like this:

```
(1, 3) (12, 14) (2, 4) (13, 15) (5, 10)
```

The correct output is:

```
(1, 3), (12, 14), (2, 4), (13, 15)
```

Because `(1, 3)` and `(2, 4)` overlap, as well as `(12, 14)` and `(13, 15)`

For `(1, 3) (2, 5) (4, 6)` the output would be `(1, 3) (2, 5) (4, 6)` because each overlaps with the subsequent one.


After NPM installing, the tests can be run using `node test.js`.

