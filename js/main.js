function caloricCalculation() {
    var weight = document.getElementsByName('weight')[0].value;
    var height = document.getElementsByName('height')[0].value;
    var age = document.getElementsByName('age')[0].value;
    var activity = document.getElementsByName('activity')[0].value;
    var caloricity = (655 + (height * 1.8) + (weight * 9.6) + (age * 4.7)) * activity;
    document.getElementsByName('caloricity')[0].value = Math.round(caloricity);
    var lowerCaloricity = caloricity * 0.8;
    document.getElementsByName('lower-caloricity')[0].value = Math.round(lowerCaloricity);
}

function nutrientsCalculation() {
    var calories = document.getElementsByName('calories')[0].value;
    var proteins = calories * 0.3 / 4;
    var fats = calories * 0.2 / 9;
    var carbohydrates = calories * 0.5 / 4;
    document.getElementsByName('proteins')[0].value = Math.round(proteins);
    document.getElementsByName('fats')[0].value = Math.round(fats);
    document.getElementsByName('carbohydrates')[0].value = Math.round(carbohydrates);
}