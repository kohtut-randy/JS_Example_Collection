
let students = [
    {
      name: "David Rayy",
      mark: 12,
    },
    {
      name: "NYAN Rayy",
      mark: 1,
    },
    {
      name: "KO Rayy",
      mark: 2,
    },
    {
      name: "LIN Rayy",
      mark: 40,
    },
    {
      name: "TIN Rayy",
      mark: 90,
    },
    {
      name: "DEOK Rayy",
      mark: 1,
    },
    {
      name: "KOOO Rayy",
      mark: 100,
    },
];
let highestMark=0;
let highestStudentName="";
function highestName(arr){
    for(let i=0;i<arr.length;i++){
        //console.log(arr[i]);
        if(arr[i].mark>highestMark){
            highestMark=arr[i].mark;
            highestStudentName=arr[i].name;
        }
    }
    return highestStudentName;

    
}
console.log(highestName(students))
