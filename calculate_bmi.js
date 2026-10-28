function calculator(height, width) {
    let bmitext = "";
    let BMI = width / (height * height);
    if (BMI < 18.5) {
        console.log("Underweight");
        bmitext = "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        console.log("Normal weight");
        bmitext = "Normal weight";
    }
    else if (BMI >= 25 && BMI < 29.9) {
        console.log("Overweight");
        bmitext = "Overweight";
    }
    else {
        console.log("Obese");
        bmitext = "Obese";
    }
    localStorage.setItem("BMI", BMI);
    return bmitext;
}


function calculateBMI() {
    var height = document.getElementById("height").value;
    var width = document.getElementById("width").value;
    var result = calculator(height, width);

    localStorage.setItem("result", result);

    // redirect to resultpage.html
    window.location.href = "resultpage.html";
}