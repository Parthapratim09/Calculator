let expression = ''; // Store the expression
        let resultShown = false; // Indicates if the result is currently shown

        function addToInput(value) {
            if (resultShown) {
                clearResult();
                // clearInput();
                resultShown = false;
            }
            const currentValue = document.getElementById("expression").innerHTML;

            if (currentValue === 'Enter:' || currentValue === 'Invalid Expression') {
                document.getElementById("expression").innerHTML = value;
                // currentValue=value;
                expression = value;
            } else {
                document.getElementById("expression").innerHTML += value;
                // currentValue+=value;
                expression += value;
            }
        }

        function calculate() {
            try {
                let modifiedExpression = expression;

                // Handling percentage calculations
                modifiedExpression = modifiedExpression.replace(/(\d+)%(\d+)/g, "($1/100)*$2"); // 50%200 → (50/100)*200
                modifiedExpression = modifiedExpression.replace(/(\d+)%/g, "($1/100)"); // 50% → (50/100)
        
                const result = eval(modifiedExpression);
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString(); 
                resultShown = true;


                
                // const result = eval(expression);
                // document.getElementById("result").innerHTML = result.toFixed(4);
                // expression = result.toString(); // Store the result as the next part of the expression
                // // document.getElementById("expression").innerHTML = '';
                // resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }
        function clearResult(){
            document.getElementById("result").innerHTML=" ";
            expression=" ";
            result=" ";
        }
        function clearInput() {
            document.getElementById("expression").innerHTML ='';
            expression = " ";
        }

        function clearAll() {
            document.getElementById("expression").innerHTML = 'Enter:';
            document.getElementById("result").innerHTML = '0';
            expression = '';
            resultShown = false;
        }

        function calculateSin() {
            try {
                const degrees = eval(expression);
                const radians = degrees * (Math.PI / 180); // Convert to radians
                const result = Math.sin(radians);
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString();
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }
        
        function calculateCos() {
            try {
                const degrees = eval(expression);
                const radians = degrees * (Math.PI / 180);
                const result = Math.cos(radians);
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString();
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }
        
        function calculateTan() {
            try {
                const degrees = eval(expression);
                const radians = degrees * (Math.PI / 180);
                const result = Math.tan(radians);
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString();
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }
        
        function calculateSqrt() {
            try {
                const result = Math.sqrt(eval(expression));
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString(); // Store the result as the next part of the expression
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }

        function calculateLog() {
            try {
                const result = Math.log(eval(expression));
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString(); // Store the result as the next part of the expression
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }

        function calculateExp() {
            try {
                const result = Math.exp(eval(expression));
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString(); // Store the result as the next part of the expression
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }
        
        function addPercentage() {
            if (expression !== '' && !expression.endsWith('%')) {
                expression += '%';
                document.getElementById("expression").innerHTML = expression;
            }
        }

        function calculateFactorial() {
            try {
                const num = eval(expression);
                let result = 1;
                for (let i = 2; i <= num; i++) {
                    result *= i;
                }
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString(); // Store the result as the next part of the expression
                document.getElementById("expression").innerHTML = '';
                resultShown = true;
            } catch (error) {
                document.getElementById("result").innerHTML = "Error";
                document.getElementById("expression").innerHTML = "Invalid Expression";
                expression = '';
            }
        }
