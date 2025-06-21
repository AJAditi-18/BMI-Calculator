document.getElementById("BMIForm").addEventListener('submit', function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFt = parseInt(document.getElementById('feet').value);
    const heightIn = parseInt(document.getElementById('inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightFt && heightIn && weight){

        const heightM = ((heightFt * 12) + heightIn) * 0.0254;
        const BMI = weight/(heightM * heightM);
        const res = document.getElementById("result");

        let category = '';

        if(BMI < 18.5){
            category = 'Underweight';
        }else if (BMI >= 18.5 && BMI < 24.9){
            category = 'Normal weight';
        }else if(BMI >= 25 && BMI < 29.9){
            category = 'Overweight';
        }else{
            category = 'Obese';
        }

        let resultMessage = 'Your BMI: ' + BMI.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        res.innerHTML = resultMessage;
    }

});