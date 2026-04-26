# Part 2 Expose

1) it will print 3 to the console. This is because i is a var variable, so even outside the for loop it is defined. Furthermore, price.length = 3, so it will go from 0 -> 1 -> 2 -> 3 and the loop will terminate at 3. 
2) It will print 150, this is because the last item on price is 300, so the calculated discountedPrice is 150. Since it is declared with var, it is function-scoped and accessible outside the loop.
3) it will print 150 because finalPrice is updated each time in loop and it ends with the value from the last iteration. Since it is declared with var, it is function-scoped and accessible outside the loop.
4) It returns [50, 100, 150]. This is because each time in the loop the final price is being pushed into the discounted array and it contains the discounted price for each item in the list prices. 

5) It will throw an error because i is not defined outside the for loop block.
6) It will throw an error because discountedPrice is not defined out side the for loop block. 
7) it will print 150, as the variable finalPrice is defined outside the for loop block and is last updated within the the for loop with the last loop and is equal to 150.
8) It returns [50, 100, 150]. This is because each time in the loop the final price is being pushed into the discounted array and it contains the discounted price for each item in the list prices. 

9) It will throw an error because i is not defined outside the for loop block.
10) it will print 3, as it is defined outside the for loop block and never changed therefore, it will print the original thing it was defined as which is the length of prices, which is 3. 
11) It returns [50, 100, 150]. This is because each time in the loop the final price is being pushed into the discounted array and it contains the discounted price for each item in the list prices. 

12) a. student.name
    b. student['Grad Year']
    c. student.greeting()
    d. student['Favorit Teacher].name
    e. student.courseLoad[0]

13) a. **32** - '3' is a string and + treats it like a string concatenation.
    b. **1** - the minus symbol treats like a numerical conversion 
    c. **3** - null is converted to 0 in numerical setting
    d. **3null** - this is because 3 is a string and + treats it like a string concatenation.
    e. **4** - true is treated as 1 in numerical setting
    f. **0** - both false and null are equal to 0
    g. **3undefined** - '3' is a string and + treats it like a string concatenation.
    h. **NaN** - '3' is 3 in numerical setting but endifined is NaN so it answers NaN

14) a. **true** - '2' is converted to numerical 2
    b. **true** - Both are strings and 12 is greater lexicographically
    c. **true** - '2' is converted to numerical 2
    d. **false** - they are different types (numer 1 != string)
    e. **false** - true is 1 which is not equal to 2
    f. **true** - same type and value 

15) "==" converts the types therefore a boolean like true will become 1, however, "===" does not convert the types and it checks if value and type is the same. 
