

fetch('data.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

const plot = document.getElementsByClassName("height");
const value = document.getElementsByClassName("value");


    function appendData(data) {
        for (let i = 0; i < data.length; i++) {
            let amount = data[i].amount;
            plot[i].style.setProperty("height", amount*2.5 +"px");
            value[i].innerText = "$"+ amount;
            plot[i].addEventListener("mouseenter", function() {
                value[i].style.display = 'block';
            });
    
            plot[i].addEventListener("mouseleave", function() {
                value[i].style.display = 'none';
            });
        }
    }


    