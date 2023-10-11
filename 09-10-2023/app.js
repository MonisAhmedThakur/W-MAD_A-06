//console.log(document.childNodes[1].parentNode);


// var div = document.createElement("div");
// var p1 = document.createElement("p1");
// var h1 = document.createElement("h1");
// var p2 = document.createElement("p2");

// var student = {
//     name: "Monis",
//     email: "monisthakur_89@hotmail.com",
//     phone: 12345678901,
//     enrolled: true,
//     class: "test"
// }

// student.class = "Wam"

// delete student.name


// console.log(student.class)


var  carVariants  = {
    honda: {
        civic: {
            type: {
                name: "Honda Civic Reborn",
                year: 2006,
                price: 1500000,
                colors: ["red", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        crv: {
            type: {
                model: "Honda CR-V", 
                year: 2023, 
                price: 35000, 
                colors: ["blue", "gray", "white"], 
                doors: 4, 
                wheels: 4 
            }
        },
        accord: {
            type: {
                name: "Honda Accord",
                year: 2022,
                price: 28000,
                colors: ["silver", "black", "blue"],
                doors: 4,
                wheels: 4,
            }
        },
       fit: {
            type: {
                name: "Honda Fit",
                year: 2023,
                price: 22000,
                colors: ["red", "white", "gray"],
                doors: 4,
                wheels: 4,
            }
        },
        hrv: {
            type: {
                name: "Honda HR-V",
                year: 2022,
                price: 25000,
                colors: ["blue", "black", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        pilot: {
            type: {
                name: "Honda Pilot",
                year: 2023,
                price: 35000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        }
    },
    toyota: {
        camry: {
            type: {
                model: "Toyata Camry", 
                year: 2022, 
                price: 30000, 
                colors: ["silver", "black", "blue"], 
                doors: 4, 
                wheels: 4
            }
        },
        corolla: {
            type: {
                model: "Toyota Corolla",
                year: 2023,
                price: 25000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        rav4: {
            type: {
                model: "Toyota RAV4",
                year: 2022,
                price: 28000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        highlander: {
            type: {
                model: "Toyota Highlander",
                year: 2022,
                price: 35000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        tacoma: {
            type: {
                model: "Toyota Tacoma",
                year: 2022,
                price: 32000,
                colors: ["silver", "black", "blue"],
                doors: 2,
                wheels: 4,
            }
        }  
    },
    suzuki: {
        baleno: {
            type: {
                model: "Suzuki Baleno",
                year: 2023,
                price: 29000,
                colors: ["blue", "silver", "black"],
                doors: 5,
                wheels: 4
            }
        },
        ignis: {
            type: {
                model: "Suzuki Ignis",
                year: 2023,
                price: 27000,
                colors: ["orange", "white", "gray"],
                doors: 5,
                wheels: 4
            }
        },
        sx4: {
            type: {
                model: "Suzuki SX4",
                year: 2023,
                price: 31000,
                colors: ["red", "black", "silver"],
                doors: 4,
                wheels: 4
            }
        },
        celerio: {
            type: {
                model: "Suzuki Celerio",
                year: 2023,
                price: 25000,
                colors: ["white", "gray", "blue"],
                doors: 5,
                wheels: 4
            }
        },
        sCross: {
            type: {
                model: "Suzuki S-Cross",
                year: 2023,
                price: 33000,
                colors: ["green", "blue", "black"],
                doors: 5,
                wheels: 4
            }
        },
        swift: {
            type: {
                model: "Suzuki Swift",
                year: 2023,
                price: 32000,
                colors: ["red", "white", "gray"],
                doors: 5,
                wheels: 4
            }
        },
        vitara: {
            type: {
                model: "Suzuki Vitara",
                year: 2023,
                price: 35000,
                colors: ["green", "silver", "blue"],
                doors: 5,
                wheels: 4
            }
        },
        jimny: {
            type: {
                model: "Suzuki Jimny",
                year: 2023,
                price: 28000,
                colors: ["black", "yellow", "white"],
                doors: 3,
                wheels: 4
            }
        },
        alto: {
            type: {
                model: "Suzuki Alto", 
                year: 2022, 
                price: 30000, 
                colors: ["silver", "black", "blue"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    ford: {
        mustang: {
            type: {
                model: "ford Mustang",
                year: 2021, 
                price: 45000, 
                colors: ["red", "white", "black"], 
                doors: 2, 
                wheels: 4 
            } 
        },
        focus: {
            type: {
                model: "Ford Focus",
                year: 2023,
                price: 24000,
                colors: ["blue", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        escape: {
            type: {
                model: "Ford Escape",
                year: 2022,
                price: 28000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        explorer: {
            type: {
                model: "Ford Explorer",
                year: 2022,
                price: 35000,
                colors: ["red", "silver", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        f150: {
            type: {
                model: "Ford F-150",
                year: 2022,
                price: 40000,
                colors: ["blue", "black", "gray"],
                doors: 2,
                wheels: 4,
            }
        }
    },
    chevrolet: {
        camaro: {
            type: {
                model: "Chevrolet Camaro", 
                year: 2022, 
                price: 50000, 
                colors: ["yellow", "black", "white"], 
                doors: 2, 
                wheels: 4
            }

        }
    },
    bmw: {
        thirdSeries: {
            type: {
                model: "BMW-3-Series", 
                year: 2022, 
                price: 45000, 
                colors: ["gray", "blue", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    audi: {
        a4: {
            type: {
                model: "Audi-A4", 
                year: 2023, 
                price: 48000, 
                colors: ["white", "silver", "black"], 
                doors: 4, 
                wheels: 4
            }
        },
        q5: {
            type: {
                model: "Audi Q5",
                year: 2023,
                price: 52000,
                colors: ["blue", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        },
        a6: {
            type: {
                model: "Audi A6",
                year: 2023,
                price: 56000,
                colors: ["white", "silver", "gray"],
                doors: 4,
                wheels: 4
            }
        },
        q3: {
            type: {
                model: "Audi Q3",
                year: 2023,
                price: 48000,
                colors: ["red", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        },
        tt: {
            type: {
                model: "Audi TT",
                year: 2023,
                price: 51000,
                colors: ["black", "white", "red"],
                doors: 2,
                wheels: 4
            }
        }
    },   
    mercedes:{
        cClass: {
            type: {
                model: "Mercedes-Benzs C-Class", 
                year: 2022, 
                price: 52000, 
                colors: ["silver", "blue", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    nissan: {
        altima: {
            type:{
                model: "Nissan Altima", 
                year: 2023, 
                price: 32000, 
                colors: ["blue", "gray", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    hyundai: {
        elantra: {
            type: {
                model: "Hyundi Elantra", 
                year: 2022, 
                price: 25000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    }, 
    kia: {
        optima: {
            type: {
                model: "Kia Optima", 
                year: 2022, 
                price: 28000, 
                colors: ["blue", "gray", "white"], 
                doors: 4, 
                wheels: 4         
            }
        }
    },
    volkswagen: {
        jetta: {
            type: { 
                model: "Volkswagen Jetta", 
                year: 2023, 
                price: 27000, 
                colors: ["white", "gray", "black"], 
                doors: 4, 
                wheels: 4
            }
        } 
    },
    subaru: {
        impreza: {
            type: { 
                model: "Subaru Impreza", 
                year: 2022, 
                price: 26000, 
                colors: ["blue", "gray", "white"], 
                doors: 4, 
                wheels: 4
            }
        } 
    },
    mazda: {
        mazda3: {
            type: {
                model: "Mazda3", 
                year: 2023, 
                price: 29000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    }, 
    lexus: {
        es: {
            type: {
                model: "Lexus ES", 
                year: 2022, 
                price: 48000, 
                colors: ["silver", "blue", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    infiniti: {
        q50: {
            type: {
                model: "Infiniti Q50", 
                year: 2022, 
                price: 50000, 
                colors: ["white", "black", "gray"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    tesla: {
        model3: {
            type:{
                model: "Tesla Model 3", 
                year: 2023, 
                price: 50000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    volvo: {
        s60: {
            type: {
                model: "Volvo S60", 
                year: 2022, 
                price: 47000, 
                colors: ["gray", "blue", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    porsche: {
        panamera: {
            type: {
                model: "Porsche Panamera", 
                year: 2023, 
                price: 95000, 
                colors: ["white", "black", "gray"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    jaguar: {
        xe: {
            type: {
                model: "Jaguar XE", 
                year: 2022, 
                price: 54000, 
                colors: ["blue", "gray", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    landRover: {
        discovery: {
            type: {
                model: "Land-Rover Discovery", 
                year: 2023, 
                price: 65000, 
                colors: ["green", "black", "white"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    acura: {
        tlx: {
            type: {
                model: "Acura TLX", 
                year: 2022, 
                price: 45000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    mitsubishi: {
        outlander: {
            type: {
                model: "Mitsubishi Outlander", 
                year: 2023, 
                price: 35000, 
                colors: ["blue", "gray", "white"], 
                doors: 4, 
                wheels: 4
            }
        }
    },
    jeep: {
        cherokee: {
            type: {
                model: "Jeep Cherokee", 
                year: 2022, 
                price: 37000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        } 
    },
    buick: {
        regal: {
            type: {
                model: "Buick Regal", 
                year: 2022, 
                price: 40000, 
                colors: ["blue", "gray", "black"], 
                doors: 4, 
                wheels: 4
            }
        } 
    },
}

function showVariants() {
    var carSelect = document.getElementById("carSelect");
    var variantContainer = document.getElementById("variantContainer");
    var variantSelect = document.getElementById("variantSelect");
    
    var selectedCar = carSelect.value;
    if (selectedCar) {
        variantSelect.innerHTML = "<option value=''>Select Variant</option>";
        for (var variant in carVariants[selectedCar]) {
            variantSelect.innerHTML += `<option value='${variant}'>${variant}</option>`;
        }
        variantContainer.style.display = "block";
    } else {
        variantContainer.style.display = "none";
        document.getElementById("detailsContainer").style.display = "none";
    }
}

function showDetails() {
    var variantSelect = document.getElementById("variantSelect");
    var detailsContainer = document.getElementById("detailsContainer");
    var carDetails = document.getElementById("carDetails");

    var selectedCar = document.getElementById("carSelect").value;
    var selectedVariant = variantSelect.value;

    if (selectedVariant && selectedCar) {
        var details = carVariants[selectedCar][selectedVariant];
        carDetails.innerHTML = `
            <p>Model: ${details.model}</p>
            <p>Year: ${details.year}</p>
            <p>Price: $${details.price}</p>
            
            <p>Number of Doors: ${details.doors}</p>
            <p>Number of Wheels: ${details.wheels}</p>
        `;
        detailsContainer.style.display = "block";
    } else {
        detailsContainer.style.display = "none";
    }
}







    

