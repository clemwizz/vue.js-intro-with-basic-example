var app = new Vue({
    el: "#app",
    data: {
        titre: "Arithmetic with Vue.js",
        nbre1: 0,
        nbre2: 0,
        operation: "add",
        selectOptions: [
            {text: "Addition", value: "add"},
            {text: "Substraction", value: "substract"},
            {text: "Multiplication", value: "multiply"},
            {text: "Division", value: "divide"},
            {text: "Greatest common divisor", value: "gcd"}
        ]
    },
    methods: {
        add: function(a, b){
            return parseInt(a) + parseInt(b);
        },
        substract: function(a, b){
            return a - b;
        },
        multiply: function(a, b){
            return a * b;
        },
        divide: function(a, b){
            return b != 0 ? a / b : 0;
        },
        gcd: function(a, b) {

            if(a >= b){
                x = a; y = b;
            }
            else{
                x = b; y = a;
            }
            
            return (!y) ? x : this.gcd(y, x % y);
        }
    },
    computed: {
        result() {
            switch(this.operation){
                case this.selectOptions[0].value:
                    return this.add(this.nbre1, this.nbre2);
                    break;
                case this.selectOptions[1].value:
                    return this.substract(this.nbre1, this.nbre2);
                    break;
                case this.selectOptions[2].value:
                    return this.multiply(this.nbre1, this.nbre2);
                    break;
                case this.selectOptions[3].value:
                    return this.divide(this.nbre1, this.nbre2);
                    break;
                case this.selectOptions[4].value:
                    return this.gcd(this.nbre1, this.nbre2);
                    break;
                default:
                    return "?";
            }
        }
    }
});