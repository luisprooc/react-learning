export const getData = (callback) => {
    const name = "LUISPROOC";
    
    setTimeout(() => {
        callback(name);
    }, 1300);
};

export const getDataPromise = (error = false) => new Promise((resolve,reject) => {
    setTimeout(() => {
        if(error) reject("REJECTED");

        else resolve([1,2,3]);
    }, 100);
});
