function main() {
    console.log("Uppgift 3.");
    let mng1 = "It's Learning";
    let MNG1 = mng1.substring(5,13)
    console.log(MNG1.toUpperCase());

    let mng2 = "JavaScript: The Good Parts"; 
    let MNG2 = mng2.substring(16,25);
    console.log(MNG2.toLocaleLowerCase());

    let mng3 = "JavaScript: The Good Parts";
    let MNG3 = mng3.substring(16,20);
    console.log(MNG3.toUpperCase());

    let mng4= "Eloquent JavaScript";
    let MNG4= mng4.substring(5,13)
    console.log(MNG4)


}
main();

exports.main = main;
