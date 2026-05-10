import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const fillGaps = async () => {
  // 1. Define your range
  const START_DATE = moment("2026-02-28");
  const END_DATE = moment(); // Today: May 10, 2026

  let currentDay = START_DATE;

  while (currentDay.isBefore(END_DATE)) {
    // 2. Decide if we should commit today (80% chance for weekdays, 10% for weekends)
    const isWeekend = currentDay.day() === 0 || currentDay.day() === 6;
    const shouldCommit = isWeekend ? random.float() < 0.1 : random.float() < 0.8;

    if (shouldCommit) {
      // 3. Decide how many commits for this specific day (1 to 4)
      const commitCount = random.int(1, 4);

      for (let i = 0; i < commitCount; i++) {
        const date = currentDay
          .clone()
          .set("hour", random.int(9, 20)) // Commits between 9 AM and 8 PM
          .set("minute", random.int(0, 59))
          .format();

        const data = { date };

        // We use a simplified synchronous-style logic here for the loop
        await jsonfile.writeFile(path, data);
        await simpleGit().add([path]).commit(date, { "--date": date });
        console.log(`Committed: ${date}`);
      }
    }
    
    // Move to the next day
    currentDay.add(1, "d");
  }

  // 4. Push everything at the very end
  console.log("Finishing up... pushing to GitHub.");
  await simpleGit().push();
};

fillGaps();

// const makeCommits = (n) => {
//   if (n === 0) return simpleGit().push();
  
//   // 1. Pick a random day of the year (0 to 364)
//   const randomDayOfYear = random.int(0, 364);

//   // 2. Start at Jan 1st, 2025, and add the random days
//   const date = moment("2025-01-01")
//     .add(randomDayOfYear, "d")
//     .add(random.int(0, 23), "h") // Optional: adds random hour
//     .add(random.int(0, 59), "m") // Optional: adds random minute
//     .format();

//   const data = {
//     date: date,
//   };

//   console.log(`Committing for: ${date}`);

//   jsonfile.writeFile(path, data, () => {
//     simpleGit().add([path]).commit(date, { "--date": date }, makeCommits.bind(this, --n));
//   });
// };

// makeCommits(1000);

// const makeCommits = (n) => {
//   if (n === 0) return simpleGit().push();
  
//   // Fixed: Removed '.default'
//   const x = random.int(0, 54);
//   const y = random.int(0, 6);
  
//   const date = moment()
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(x, "w")
//     .add(y, "d")
//     .format();

//   const data = {
//     date: date,
//   };

//   console.log(`Creating commit for: ${date}`);

//   jsonfile.writeFile(path, data, () => {
//     simpleGit().add([path]).commit(date, { "--date": date }, makeCommits.bind(this, --n));
//   });
// };

// makeCommits(100);