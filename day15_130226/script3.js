// sealing and freezing arrays

var teams = [
    {
        name: "CSK",
        trophies: ["IPL 2010", "IPL 2011", "IPL 2018", "IPL 2021", "IPL 2023"]
    },
    {
        name: "MI",
        trophies: ["IPL 2013", "IPL 2015", "IPL 2017", "IPL 2019", "IPL 2020"]
    },
    {
        name: "RCB",
        trophies: [2025]
    }
]

trophies.some(a=> a.trophies.length == 5); 

const newArr = arr.filter((el)=>{
    if(el.trophies.length == 5){
        return el;
    };
})