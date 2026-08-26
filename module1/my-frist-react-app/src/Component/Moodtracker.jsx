// const Moodtracker = () => {
// const moods = {

import { useState } from "react";

   
//  "😊": "Happy",
//  "😢": "Sad",
//  "😡": "Angry",
//  "😍": "Love",
//  "😲": "Surprised",
// };
// const moodkeys=Object.keys(moods)
// console.log(moodkeys)
//     return (
//         <div className="moods-tracker">
//             all moods 
//             {
//                 moodkeys.map((emoji)=>{
//                     return <button>{emoji}</button>
//                 })
//             }

//         </div>
//     );
// };

// export default Moodtracker;



const Moodtracker = () => {
  const messages = {
    "😢": "মন খারাপ? একটু বিরতি নাও।",
    "😐": "ঠিক আছে, চলছে চলুক।",
    "🙂": "ভালো লাগছে জেনে ভালো লাগলো!",
    "😄": "দারুণ! এই energy ধরে রাখো।",
    "🤩": "আজ তোমার দিনটা অসাধারণ!",
  };

 
  const [selectedMood, setSelectedMood] = useState(null);

  const messagesKeys = Object.keys(messages);
  console.log(selectedMood, messages[selectedMood], "selectedMood");

  return (
    <div className="mood-tracker-parent">
      Mood tracker
      <div className="emoji-parent">
        {messagesKeys.map((emoji) => {
          return <button className="emoji-btn" onClick={()=> setSelectedMood(emoji)}>{emoji}</button>;
        })}
      </div>

      <p>{messages[selectedMood]}</p>
    </div>
  );
};

export default Moodtracker;