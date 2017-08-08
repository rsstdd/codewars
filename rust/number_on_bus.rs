// Description:
// ------------
// You are provided with a list (or array) of integer arrays (or tuples). 
// Each integer array has two items which represent the number of people that get into the bus (The first item) 
// and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). 
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.


fn number(bus_stops:&[(i32,i32)]) -> i32 {
    bus_stops.iter().fold(0,|acc,x| acc + x.0 - x.1)
}

// Test
// ------

// fn returns_expected() {
//   assert_eq!(number(&[(10,0),(3,5),(5,8)]), 5);
//   assert_eq!(number(&[(3,0),(9,1),(4,10),(12,2),(6,1),(7,10)]), 17);
//   assert_eq!(number(&[(3,0),(9,1),(4,8),(12,2),(6,1),(7,8)]), 21);
// }