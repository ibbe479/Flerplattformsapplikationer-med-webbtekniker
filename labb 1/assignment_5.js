function main() {
    console.log("Uppgift 5.");

    let countries = ["Sweden", "Denmark", "Finland", "Norway"];
    let OnlyDen = countries[1].substring(0,3)
    console.log(OnlyDen)
    
    let HurMångaBok = countries[0]+ countries[1] + countries[2]+ countries[3]
    let medelvärdet = HurMångaBok.length/4
    console.log(medelvärdet)
    

}

main();

// Notera att raden nedan behövs för den automatiska rättningen av uppgiften
exports.main = main;