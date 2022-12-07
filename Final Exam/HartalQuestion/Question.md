# Base Data: 14 Day Simulation of Hartal Mechanics

h = hartal parameter = avg # days between 2 consecutive strikes

Party 1 = h1 = 3 : This means on avg 3 days between 2 consecutive strikes

Party 2 = h2 = 4 : This means on avg 4 days between 2 consecutive strikes

Party 3 = h3 = 8 : This means on avg 8 days between 2 consecutive strikes

N = number of days being simulated = 14

This means we are simulating how many strikes can potentially appear over 2 weeks

The simulation starts on Sunday

Regardless of the hartal parameter there will never be any strikes on Friday or Saturday

There will be exactly 5 strikes on days 3, 4, 8, 9, 12
- Tuesday Week 1
- Wednesday Week 1
- Sunday Week 2
- Monday Week 2
- Thursday Week 2

<br>

# App Functionality:

The whole previous section is really an example with data of the relationship between political parties, strikes and the calendar week.

We need to use this information and these rules to create an application that can calculate how many working days are lost depending on:

- Number of days in simulation
- Number of political parties (PP)
- Number of days PP has between 2 consecutive strikes

<br>

It should be able to simulate this for:

- A number of test cases between 1 and 9 = T
- Number of days between 7 and 3650 = N
- Number of PP between 1 and 100 = P

<br>

Each PP will have its own hartal parameter = h1

## Order of Input:

1. T value (# of test cases)

2. N value (# of days in each test) **[PER TEST]**

3. P value (# of PP organizing strikes) **[PER TEST]**

4. Hartal param value for every PP organizing a strike **[PER TEST]**

## Expected Output:

\# of working days expected to be lost per test case

<br>

# Sample Input Breakdown

```
2
14
3
3
4
8
100
4
12
15
25
40
```

`2` = # of test cases bing simulated

`14` = # of days being simulated for TEST 1

`3` = # of political parties organizing strikes for TEST 1

`3` = h1 = hartal parameter for PP 1 for TEST 1

`4` = h2 = hartal parameter for PP 2 for TEST 1

`8` = h3 = hartal parameter for PP 3 for TEST 1

`100` = # of days being simulated for TEST 2

`4` = # of political parties organizing strikes for TEST 2

`12` = h1 = hartal parameter for PP 1 in TEST 2

`15` = h2 = hartal parameter for PP 2 in TEST 2

`25` = h3 = hartal parameter for PP 3 in TEST 2

`40` = h4 = hartal parameter for PP 4 in TEST 2

<br>

# Sample Output Breakdown

```
5
15
```

`5` = working days lost TEST 1

`15` = working days lost TEST 2