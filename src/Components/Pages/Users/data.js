export const userDataArray = [
    { username: "Karthi", postName: "Web Developer", date: "21, June" },
    { username: "Sabi", postName: "Web Developer", date: "22, June" },
    { username: "Navas", postName: "Web Developer", date: "23, June" },
    { username: "Logesh", postName: "Web Developer", date: "24, June" },
    { username: "Arbas", postName: "Web Developer", date: "25, June" },
    { username: "Gokul", postName: "Web Developer", date: "26, June" },
    { username: "Sabi", postName: "Web Developer", date: "22, June" },
    { username: "Navas", postName: "Web Developer", date: "23, June" },
    { username: "Arbas", postName: "Web Developer", date: "25, June" },
    { username: "Gokul", postName: "Web Developer", date: "26, June" },
  ];
  
  export const DataTitles = [
    { title: "profile" },
    { title: "usernames" },
    { title: "post name" },
    { title: "dates" },
    { title: "access" },
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
  