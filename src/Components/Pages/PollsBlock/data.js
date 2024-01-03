export const BlockPollColumns = [
    {id:'id',label:'Id'},
    {id:'usernames',label:'User names'},
    {id:'polltypes',label:'Poll types'},
    {id:'questions',label:'Questions'},
    {id:'dates',label:'Dates'},
    {id:"accessbuttons",label:"Access buttons"}
  ];

  export const BlockPollsDatas = [
    { id: 1,  usernames: 'Arbas',   polltypes: 'Food',questions:"What is the capital city of Australia?",dates:"11 Mar"},
    { id: 2,  usernames: 'Krishna', polltypes: 'Sports',questions:"Who wrote the play 'Romeo and Juliet'?",dates:"20 Nov"},
    { id: 3,  usernames: 'Anaz',    polltypes: 'Food',questions:"What is the currency of Japan?",dates:"11 Mar" },
    { id: 4,  usernames: 'Nawas',   polltypes: 'Sports',questions:"Who is known as the 'Father of Modern Physics'?",dates:"20 Nov"},
    { id: 5,  usernames: 'Vignesh', polltypes: 'Food',questions:"What is the largest planet in our solar system?",dates:"11 Mar" },
    { id: 6,  usernames: 'Paartha', polltypes: 'Sports',questions:"How many seconds are there in a year?",dates:"20 Nov"},
    { id: 7,  usernames: 'Yahya',   polltypes: 'Sports',questions:"Why don't scientists trust atoms?",dates:"20 Nov"},
    { id: 8,  usernames: 'Vicky',   polltypes: 'Sports',questions:"If you were a DJ, what would your DJ name be?",dates:"20 Nov"},
    { id: 9,  usernames: 'Sandy',   polltypes: 'Sports',questions:"What's your most unusual talent?",dates:"20 Nov"},
    { id: 10, usernames: 'Yuvi',    polltypes: 'Sports',questions:"What's the weirdest dream you've ever had?",dates:"20 Nov"},
    
  ];
 export const AccessButtons = [
    { word: "Grant" },
    { word: "Revoke" },
    { word: "Block" },
  ];

  // getColorForIndex is backgroundColor
  const generateColorArray = (colors) => (index) => {
    return colors[index % colors.length];
  };
  
  export const getColorForIndex = generateColorArray([ "green", "#7C4DFF","white"]);
  export const getHoverColorForIndex = generateColorArray(["green","#7C4DFF",  "white"]);
  
  // generateBorderColorForIndex is button borders colors
  export const generateBorderColorArray = (colors) => (index) => {
    return colors[index % colors.length];
  };
  
  export const getBorderColorForIndex = generateBorderColorArray(["green", "#7C4DFF", "red"]);
  export const getHoverBorderColorForIndex = generateBorderColorArray([ "green","#7C4DFF", "red"]);
  
  // generateTextColorArray is button text colors
  export const generateTextColorArray = (colors) => (index) => {
    return colors[index % colors.length];
  };
  
  export const getTextColorForIndex = generateTextColorArray(["white", "white", "red"]);
  