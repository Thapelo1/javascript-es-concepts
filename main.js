/* 
   ES6 Object with Destructuring: 
   Normal Object
*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
   
  const today = HIGH_TEMPERATURES.today;
  const tomorrow = HIGH_TEMPERATURES.tomorrow;


/* 
   ES6 Object with Destructuring: 
   Use Destructuring Assignment to Extract Values from Objects
*/
  const HIGH_TEMPERATURESDestructured = {
    todayDestructured: 77,
    tomorrowDestructured: 80
  };

  
  const {todayDestructured} = HIGH_TEMPERATURESDestructured;
  const {tomorrowDestructured} = HIGH_TEMPERATURESDestructured;



/* 
   ES6 Object with Destructuring: 
  Use Destructuring Assignment to Assign Variables from Objects
*/

const HIGH_TEMPERATURESDestructuredp2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
    
  const {today: highTodayp1} = HIGH_TEMPERATURESDestructuredp2;
  const {tomorrow: highTomorrow} = HIGH_TEMPERATURESDestructuredp2; 


  
/* 
   ES6 Object with Destructuring: 
  Use Destructuring Assignment to Assign Variables from Nested Objects

*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };


    
  const { today: { low:lowToday } } = LOCAL_FORECAST;
  const { today: { high: highToday } } = LOCAL_FORECAST;

  console.log(highToday);


