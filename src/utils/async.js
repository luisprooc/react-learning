export const getData = (callback) => {
    const name = "LUISPROOC";
    
    setTimeout(() => {
        callback(name);
    }, 1300);
};


const nombre = getData((name) => {
    console.log(name);
});