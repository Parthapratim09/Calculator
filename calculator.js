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
                const result = eval(expression);
                document.getElementById("result").innerHTML = result.toFixed(4);
                expression = result.toString(); // Store the result as the next part of the expression
                // document.getElementById("expression").innerHTML = '';
                resultShown = true;
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
                const result = Math.sin(eval(expression));
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

        function calculateCos() {
            try {
                const result = Math.cos(eval(expression));
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

        function calculateTan() {
            try {
                const result = Math.tan(eval(expression));
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
