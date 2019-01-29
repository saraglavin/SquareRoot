async function squareRoot() {

    let number = document.getElementById("number").value;
    //let result = document.getElementById("result");
    //result.innerText = `Du angav ${number}`;

    document.getElementById("error").innerText = "";

    if (isNaN(number)) {


        document.getElementById("error").innerText = "Du måste ange ett nummer!";
    }

    else if (number < 0) {

        document.getElementById("error").innerText = "Du kan inte ange ett negativt nummer!";

    }


    else {

        let response = await fetch(`api/squareroot?number=${number}`);

        if (response.status === 200) {
            let result = await response.json();
            document.getElementById("result").innerText = result;
        }

        else {

        }
    }
}