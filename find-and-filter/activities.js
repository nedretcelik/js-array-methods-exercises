let activities = [
    {
      ActivityId: "ACT1001",
      Name: "Hiking Adventure",
      Location: "Mountain Trail",
      Difficulty: "Moderate",
      Duration: "4 hours",
    },
    {
      ActivityId: "ACT1002",
      Name: "Kayaking Excursion",
      Location: "River",
      Difficulty: "Easy",
      Duration: "3 hours",
    },
    {
      ActivityId: "ACT1003",
      Name: "Rock Climbing",
      Location: "Indoor Climbing Gym",
      Difficulty: "Hard",
      Duration: "2 hours",
    },
    {
      ActivityId: "ACT1004",
      Name: "Cycling Tour",
      Location: "City Streets",
      Difficulty: "Moderate",
      Duration: "5 hours",
    },
    {
        ActivityId: "ACT1009",
        Name: "Kayaking",
        Location: "City Streets",
        Difficulty: "Easy",
        Duration: "5 hours",
      },
  ];
  
  // 1. Where does the "Hiking Adventure" take place?

  let foundLocation = activities.find(activity => activity.Name == "Hiking Adventure");
  console.log('"Hiking Adventure" location is: ' +foundLocation.Location);

  // 2. What is the difficulty level of the "Rock Climbing" activity?
  let difficultyLevel  = activities.find(activity => activity.Name == "Rock Climbing");
  console.log("the difficulty level of the 'Rock Climbing' activity is : "+difficultyLevel.Difficulty);


  // 3. How long does the "Cycling Tour" last?

let foundDuration = activities.find(activity => activity.Name == "Cycling Tour");
console.log('"Cycling Tour" last is: '+foundDuration.Duration)


// 5. Find activities that are longer than 3 hours.

  let longerDuration = activities.filter(activity => parseInt(activity.Duration) > 3);


  let activitiesName = [];
  for (const activiy of longerDuration) {
    activitiesName.push(activiy.Name)
    
  }

  console.log(activitiesName);


// 6. Find activities that are classified as "Moderate" difficulty.
let difficultyModerate = activities.filter(activity => activity.Difficulty == "Moderate");
let activitiesNameForModerate = [];

for (const activity of difficultyModerate) {
    activitiesNameForModerate.push(activity.Name);
    
}

console.log('activities that are classified as "Moderate" difficulty:   ' + activitiesNameForModerate);

// 7. Find activities that are shorter than 4 hours and have a difficulty level of "Easy".

let durationAndDifficulty = activities.filter(activity => parseInt(activity.Duration) > 4 && activity.Difficulty == "Easy");

let durationAndDifficultyArr = [];

for (const activity of durationAndDifficulty) {
    durationAndDifficultyArr.push(activity.Name)
    
}

console.log('activities that are shorter than 4 hours and have a difficulty level of "Easy":    ' + durationAndDifficultyArr)







