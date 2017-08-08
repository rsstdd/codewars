// Write a fn that:
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. 
// He owns 18, which is an awesome number of lightsabers. 
// Anyone else owns 0.

// No starting help here -- you'll need to know how to write a function
// that accepts a parameter and returns a value based on that parameter.

fn how_many_lightsabers_do_you_own(name: &str) -> u8 {
  match name {
    "Zach" => 18,
    _ => 0,
  }
}

// fn how_many_lightsabers_do_you_own(name: &str) -> u8 {
//   if name == "Zach" { 18 } else { 0 }
// }