function displayAvailableAnimals(type, location) {

    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
    var theUrl = "https://api.petfinder.com/v2/oauth2/token";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            var bearer = JSON.parse(xmlhttp.responseText).access_token;
            var url = "https://api.petfinder.com/v2/animals?type=" + type + "&location=" + location;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Authorization", "Bearer " + bearer);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    console.log(xhr.status);
                    // console.log(xhr.responseText);
                    // Your code goes here

                    var response = JSON.parse(xhr.responseText);

                    console.log(response.animals);

                    // console.log(response.animals[0].photos.full)




                    var submitButton = document.getElementById("submit")

                    var petBreeds = document.getElementById("pet-breeds");
                    var petBreedsInfo = document.createTextNode(response.animals[0].breeds.primary);

                    // petBreeds.appendChild(petBreedsInfo);


                    function changePetBreeds() {
                        for (i = 0; i < petBreeds.length; i++) {
                            petBreeds[i].appendChild(petBreedsInfo);
                        }
                    }

                    submitButton.addEventListener('click', changePetBreeds);






                    var petGender = document.getElementById("pet-gender");
                    var petGenderInfo = document.createTextNode(response.animals[0].gender);

                    petGender.appendChild(petGenderInfo);



                    var petAge = document.getElementById("pet-age");
                    var petAgeInfo = document.createTextNode(response.animals[0].age);

                    petAge.appendChild(petAgeInfo);


                    var petSize = document.getElementById("pet-size");
                    var petSizeInfo = document.createTextNode(response.animals[0].size);

                    petSize.appendChild(petSizeInfo);


                    var petImage = document.getElementById("pet-image");
                    petImage.src = response.animals[0].photos[0].full;


                    // document.getElementById("submit-button").addEventListener("click",
                    //     function displayAvailableAnimals() {

                    //     }, false
                    // );




                    // function addBreed() {
                    //     var p1 = document.getElementById("pet-breeds"),
                    //         petBreeds = response.animals[0].breeds.primary;

                    //     p1.appendChild(addBreed);
                    // }

                    // addBreed();

                }
            };
            xhr.send();
        }
    };
    xmlhttp.send(JSON.stringify({
        "grant_type": "client_credentials",
        "client_id": "Z4kgtgXvezDWTvr2PEdPG7V325DqJDQe4w7HsVfGiTIzzP6LkJ",
        "client_secret": "mI05IC8FaXZYC80WVgb1d4gfhlJeB94wO6Qw2Wn0"
    }));
}
// displayAvailableAnimals(type, location);