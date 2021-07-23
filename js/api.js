// Petfinder api - https://www.petfinder.com/developers/v2/docs/

function displayAvailableAnimals(type, location, breed) {

    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance 
    var theUrl = "https://api.petfinder.com/v2/oauth2/token";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            var bearer = JSON.parse(xmlhttp.responseText).access_token;
            var url = "https://api.petfinder.com/v2/animals?type=" + type + "&location=" + location + "&breed=" + breed;
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



                    document.getElementsByClassName('adopt-section3')[0].innerHTML = " ";

                    console.log(response.animals[0]);

                    var animals_to_show = response.animals.length;
                    if (animals_to_show > 8) {
                        animals_to_show = 8;
                    }

                    for (i = 0; i < animals_to_show; i++) {

                        if (response.animals[i].primary_photo_cropped == null) {
                            var image = "images/noimage.jpeg";
                        } else {
                            var image = response.animals[i].primary_photo_cropped.full;
                        }


                        var breed = response.animals[i].breeds.primary;
                        var gender = response.animals[i].gender;
                        var age = response.animals[i].age;
                        var size = response.animals[i].size;
                        var name = response.animals[i].name;




                        let placeholder = `
                    <figure>
                        <div>
                            <img src="${image}" class="pet-image" id="pet-image" alt="Dog or Cat" title="Dog or Cat">
                        </div>

                        <div class="pet-info">
                            <p id="pet-name"><span>Name:</span> ${name}</p>
                            <p id="pet-breeds"><span>Breed:</span> ${breed}</p>
                            <p id="pet-gender"><span>Gender:</span> ${gender}</p>
                            <p id="pet-age"><span>Age:</span> ${age}</p>
                            <p id="pet-size"><span>Size:</span> ${size}</p>
                        </div>
                     </figure>
                    `


                        document.getElementsByClassName('adopt-section3')[0].innerHTML += placeholder;

                    }



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