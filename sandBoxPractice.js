//////////////////////////////////////////////////////////////////////////////////////////

// //*********7/15//21 - 7/16/2021******************
// //*********CODEWARS**************/
// tic tac toe validator

function getScore(board){ 
    let scoreCard = []
    board.forEach((row,n)=>{
      row.forEach((play,i)=>{
        scoreCard.push(`${n+1/*row number*/}${play===0?play:play===1?"x":"o"/* "x" or "o" */}${i+1/**column number*/}`)
      }
      )})
      return scoreCard
  }
  function isSolved (board){
    //winning combos 123 321 111 222 333 
    const score = getScore(board)
    if(score===-1){return -1}
    let joinedScore = score.join('')  
      if (joinedScore.includes("1x1")&&joinedScore.includes("1x2")&&joinedScore.includes("1x3")){return 1} //row
      else if (joinedScore.includes("2x1")&&joinedScore.includes("2x2")&&joinedScore.includes("2x3")){return 1} //row
      else if (joinedScore.includes("3x0")&&joinedScore.includes("3x2")&&joinedScore.includes("3x3")){return 1} //row
      else if (joinedScore.includes("1x1")&&joinedScore.includes("2x1")&&joinedScore.includes("3x1")){return 1} //column
      else if (joinedScore.includes("1x2")&&joinedScore.includes("2x2")&&joinedScore.includes("3x2")){return 1} //column
      else if (joinedScore.includes("1x3")&&joinedScore.includes("2x3")&&joinedScore.includes("3x3")){return 1} //column
      else if (joinedScore.includes("1x1")&&joinedScore.includes("2x2")&&joinedScore.includes("3x3")){return 1} //diagonal
      else if (joinedScore.includes("1x3")&&joinedScore.includes("2x2")&&joinedScore.includes("3x1")){return 1} //diagonal
      else if (joinedScore.includes("1o1")&&joinedScore.includes("1o2")&&joinedScore.includes("1o3")){return 2} //row
      else if (joinedScore.includes("2o1")&&joinedScore.includes("2o2")&&joinedScore.includes("2o3")){return 2} //row
      else if (joinedScore.includes("3o1")&&joinedScore.includes("3o2")&&joinedScore.includes("3o3")){return 2} //row
      else if (joinedScore.includes("1o1")&&joinedScore.includes("2o1")&&joinedScore.includes("3o1")){return 2} //column
      else if (joinedScore.includes("1o2")&&joinedScore.includes("2o2")&&joinedScore.includes("3o2")){return 2} //column
      else if (joinedScore.includes("1o3")&&joinedScore.includes("2o3")&&joinedScore.includes("3o3")){return 2} //column
      else if (joinedScore.includes("1o1")&&joinedScore.includes("2o2")&&joinedScore.includes("3o3")){return 2} //diagonal
      else if (joinedScore.includes("1o3")&&joinedScore.includes("2o2")&&joinedScore.includes("3o1")){return 2}//diagonal
      else if (joinedScore.includes(0)){return-1}
      else{return 0}
  }
  
  
  let array = [
    [1, 2, 0],
    [0, 1, 0],
    [1, 2, 1],
  ];
  console.log(isSolved(array))
  
  


//////////////////////////////////////////////////////////////////////////////////////////

// //*********6/30/21 - 7/1/2021******************
// //*********CODEWARS**************/

// const durations = {
//     now:0,//key 0
//     second:1,//key 1
//     seconds:2,//key 2, second *2
//     minute:60,//key 3, second *60
//     minutes:120,//key 4, minute * 2
//     hour:3600,//key 5, minute *60
//     hours:7200,//key 6 hours * 2
//     day:86400,//key 7 *24
//     days:172800,//key 8 days *2
//     year:31536000,//key 9 *365
//     years:63072000, //key 10 year *2
//   };

// const keys = Object.keys(durations)

// formatYears = (duration) =>{
//   const year = durations.year
//   const yearCount = Math.floor(duration/year)
//   return duration>=year? `${yearCount} ${yearCount >= 2 ? keys[10] : keys[9]}` : null;
// }
// formatDays = (duration) =>{
//   const dayCount = Math.floor(duration/durations.day)%365
//   return dayCount >= 1 ? `${dayCount} ${dayCount>1 ? keys[8] : keys[7]}` : null;
// }
// formatHours = (duration) =>{
//   const hourCount = Math.floor(duration/durations.hour % 24)
//   return hourCount >= 1 ? `${hourCount} ${hourCount>1 ? keys[6] : keys[5]}` : null;
// }
// formatMinutes = (duration) =>{ 
//   const minuteCount = Math.floor((duration/durations.minute)%60)
//   return minuteCount >= 1 ? `${minuteCount} ${minuteCount>1 ? keys[4] : keys[3]}` : null;
// }
// formatSeconds = (duration) => {
//   const secondCount = Math.floor((duration/durations.second)%60) 
//   return secondCount >= 1 ? `${secondCount} ${secondCount>1?keys[2]:keys[1]}`:null;
// }

// formatDuration = (duration) => {
//   const durationsArray = [formatYears(duration),formatDays(duration),formatHours(duration),formatMinutes(duration),formatSeconds(duration)] //formats for year,day,hour,minute, second and places in array
//   const formattedArray = [] // final array 
//   if(duration === durations.now){return keys[0]} 
//   durationsArray.filter((dur)=>{
//       return dur // filters out null
//     }).forEach((id,i,arr)=>{ //logic for comma/and placement
//       if(i+1 === arr.length)
//         formattedArray.push(id)
//       else if (i === arr.length-2){
//         formattedArray.push(id +" and")
//       }
//       else if (i <= arr.length-3){
//         formattedArray.push(id+",")
//       }

//       })
//   return formattedArray.join(" ") 
//   }

// console.log(formatDuration(123));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //*********6/30/21******************
// //*********CODEWARS**************/
// const pigIt = (unCoded) => {
//   specialChar = { question: "?", statement: ".", exclamation: "!" };
//   return unCoded
//     .split(" ")
//     .map((word) => {
//       if (!(word.includes("?") || word.includes(".") || word.includes("!"))) {
//         return `${word.slice(1)}${word.slice(0, 1)}ay`;
//       } else return word;
//     })
//     .join(" ");
// };

// //console.log(pigIt("Pig latin is cool !"));
