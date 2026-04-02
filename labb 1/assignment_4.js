function main() {
    console.log("Uppgift 4.");

    let numbers = [128, 256, 512, 1024, 2048];
    
    let AllNumbers = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]
    console.log(AllNumbers)
   

    let medelvärdet = AllNumbers/5
    console.log(medelvärdet)
    
}

main();

exports.main = main;