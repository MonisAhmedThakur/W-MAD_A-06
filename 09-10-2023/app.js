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


var carVariants  = {
    honda: {
        civic: {
            type: {
                image: "https://www.gari.pk/images/new/cars/2022-03/1585_1_33577.jpg",
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
                image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/34457/cr-v-exterior-right-front-three-quarter.jpeg?q=80",
                name: "Honda CR-V", 
                year: 2023, 
                price: 35000, 
                colors: ["blue", "gray", "white"], 
                doors: 4, 
                wheels: 4 
            }
        },
        accord: {
            type: {
                image: "https://dealboxx-images.s3.us-west-2.amazonaws.com/vehicles/438174/Gray.jpg",
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
                image: "https://www.ccarprice.com/products/Honda-Fit-Sport-2020.jpg",
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
                image: "https://www.autowheels.pk/wp-content/uploads/2022/11/Honda-HR-V-Price-in-Pakistan-2023-780x470.jpg",
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
                image: "https://cars.usnews.com/cars-trucks/syndication/insurance_image/15223/image_640x480/",
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
                image: "https://static3.toyotabharat.com/images/showroom/camry/color/c_h_3.webp",
                name: "Toyata Camry", 
                year: 2022, 
                price: 30000, 
                colors: ["silver", "black", "blue"], 
                doors: 4, 
                wheels: 4
            }
        },
        corolla: {
            type: {
                image: "https://imgcdn.zigwheels.pk/large/gallery/exterior/14/118/toyota-corolla-front-angle-low-view.jpg",
                name: "Toyota Corolla",
                year: 2023,
                price: 25000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        rav4: {
            type: {
                image: "https://cars.usnews.com/static/images/Auto/izmo/i159615499/2023_toyota_rav4_angularfront.jpg",
                name: "Toyota RAV4",
                year: 2022,
                price: 28000,
                colors: ["blue", "gray", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        highlander: {
            type: {
                image: "https://cdcssl.ibsrv.net/autodata/images/?img=USD30TOS141A022007.jpg&width=370",
                name: "Toyota Highlander",
                year: 2022,
                price: 35000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        tacoma: {
            type: {
                image: "https://cars.usnews.com/static/images/Auto/izmo/i159614113/2020_toyota_tacoma_angularfront.jpg",
                name: "Toyota Tacoma",
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
                image: "https://specs.com.pk/wp-content/uploads/2021/02/baleno-thumb.jpg",
                name: "Suzuki Baleno",
                year: 2023,
                price: 29000,
                colors: ["blue", "silver", "black"],
                doors: 5,
                wheels: 4
            }
        },
        ignis: {
            type: {
                image: "https://cache4.pakwheels.com/system/car_generation_pictures/5868/original/Suzuki-Ignis-2018.jpg?1632477259",
                name: "Suzuki Ignis",
                year: 2023,
                price: 27000,
                colors: ["orange", "white", "gray"],
                doors: 5,
                wheels: 4
            }
        },
        sx4: {
            type: {
                image: "https://cdn.carbuzz.com/car-thumbnails/700x375/8000/600/8618.jpg",
                name: "Suzuki SX4",
                year: 2023,
                price: 31000,
                colors: ["red", "black", "silver"],
                doors: 4,
                wheels: 4
            }
        },
        celerio: {
            type: {
                image: "https://images.summitmedia-digital.com/topgear/images/2022/05/06/suzuki-celerio-2022-main-1651825334.jpg",
                name: "Suzuki Celerio",
                year: 2023,
                price: 25000,
                colors: ["white", "gray", "blue"],
                doors: 5,
                wheels: 4
            }
        },
        sCross: {
            type: {
                image: "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy/auto-client/c10ead598bcab652ab2f638e0184abb8/scross_1500x1000px.jpg",
                name: "Suzuki S-Cross",
                year: 2023,
                price: 33000,
                colors: ["green", "blue", "black"],
                doors: 5,
                wheels: 4
            }
        },
        swift: {
            type: {
                image: "https://suzukipakistan.com/media/products/New%20Swift/Color/Soild%20White.png",
                name: "Suzuki Swift",
                year: 2023,
                price: 32000,
                colors: ["red", "white", "gray"],
                doors: 5,
                wheels: 4
            }
        },
        vitara: {
            type: {
                image: "https://www.suzukiislamabad.pk/media/620x485/vitara/big1.png",
                name: "Suzuki Vitara",
                year: 2023,
                price: 35000,
                colors: ["green", "silver", "blue"],
                doors: 5,
                wheels: 4
            }
        },
        jimny: {
            type: {
                image: "https://static.pakwheels.com/2019/08/Suzuki-Jimny-00.jpg",
                name: "Suzuki Jimny",
                year: 2023,
                price: 28000,
                colors: ["black", "yellow", "white"],
                doors: 3,
                wheels: 4
            }
        },
        alto: {
            type: {
                image: "https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Pearl-Black-720x466.jpg",
                name: "Suzuki Alto", 
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
                image: "https://www.cars.com/i/large/in/v2/stock_photos/0775c428-13df-4f8a-b7c6-d93d5d4a29ce/1103bbf9-410d-4f33-9e90-10f75761dc1a.png",
                name: "ford Mustang",
                year: 2021, 
                price: 45000, 
                colors: ["red", "white", "black"], 
                doors: 2, 
                wheels: 4 
            } 
        },
        focus: {
            type: {
                image: "https://www.motortrend.com/uploads/sites/10/2017/10/2018-ford-focus-se-sedan-angular-front.png",
                name: "Ford Focus",
                year: 2023,
                price: 24000,
                colors: ["blue", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        escape: {
            type: {
                image: "https://edgecast-img.yahoo.net/mysterio/api/691D058CEE6FEC8029D509AC9352F42BC64AC28146750FA91CDCD12CA1E1D045/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC70FOS131A021001.jpg",
                name: "Ford Escape",
                year: 2022,
                price: 28000,
                colors: ["gray", "white", "black"],
                doors: 4,
                wheels: 4,
            }
        },
        explorer: {
            type: {
                image: "https://www.motortrend.com/uploads/sites/10/2023/03/2023-ford-explorer-xlt-suv-angular-front.png",
                name: "Ford Explorer",
                year: 2022,
                price: 35000,
                colors: ["red", "silver", "white"],
                doors: 4,
                wheels: 4,
            }
        },
        f150: {
            type: {
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8Ys2Fzy5a-GLEsweA0s3jIisRG0-Q8bZdQ&usqp=CAU",
                name: "Ford F-150",
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
                image: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2024/performance/camaro/design/v2/2024-camaro-collector-ed-3v2.png?imwidth=960",
                name: "Chevrolet Camaro", 
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
                image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/bmw-3-series-my20-index-1.png",
                name: "BMW-3-Series", 
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
                image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-A4-190120211207.jpg&w=730&h=484&q=75&c=1",
                name: "Audi-A4", 
                year: 2023, 
                price: 48000, 
                colors: ["white", "silver", "black"], 
                doors: 4, 
                wheels: 4
            }
        },
        q5: {
            type: {
                image: "https://cache2.pakwheels.com/system/car_generation_pictures/6078/original/Audi_q5_2018.jpg?1640171345",
                name: "Audi-Q5",
                year: 2023,
                price: 52000,
                colors: ["blue", "gray", "black"],
                doors: 4,
                wheels: 4
            }
        },
        a6: {
            type: {
                image: "https://cache3.pakwheels.com/system/car_generation_pictures/5995/original/2021-Audi-A6-Premium-.png?1635346122",
                name: "Audi-A6",
                year: 2023,
                price: 56000,
                colors: ["white", "silver", "gray"],
                doors: 4,
                wheels: 4
            }
        },
        q3: {
            type: {
                image: "https://cache1.pakwheels.com/system/car_generation_pictures/6476/original/Audi_Q3.jpg?1658913566",
                name:"Audi-Q3",
                year:2023,
                price: 48000,
                colors: ["red", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        },
        tt: {
            type: {
                image: "https://www.motortrend.com/uploads/sites/10/2022/07/2021-audi-tt-4wd-coupe-angular-front.png?fit=around%7C875:492.1875",
                name: "Audi-TT",
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
                image: "https://www.carlelo.com/laravel/public/uploads/variant-option/MmYPRc7zW5JAgf7WmbC6jfPgBh2kprRISQfJ7Syr.jpeg",
                name: "Mercedes-Benzs C-Class", 
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
                image: "https://www.motortrend.com/uploads/sites/10/2019/09/2020-nissan-altima-sr-fwd-sedan-angular-front.png",
                name: "Nissan Altima", 
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
                image: "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/classifieds/d/d9/dd96ab11-f6dc-53cc-a48e-a9678f52558d/5ea65bbb1ab66.image.jpg",
                name: "Hyundi Elantra", 
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
                image: "https://edgecast-img.yahoo.net/mysterio/api/1C2A9CA69BF192F1AD8CCEE5FDEEC58E2272ECEDD88AE007B49613E61C848795/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USC60KIC052C021001_2.jpg",
                name: "Kia Optima", 
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
                image: "https://www.cars.com/i/large/in/v2/stock_photos/bd16c3d4-f5e3-4697-8598-f4ea325476e7/e8a44422-9250-4241-8493-0c8692a6ec08.png",
                name: "Volkswagen Jetta", 
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
                image: "https://edgecast-img.yahoo.net/mysterio/api/26E75FAC4E5688DB146D9171FEE6BC6EB34E4FDA52A1FCAC3B1F7F99BDC049C9/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/CAD00SUC041B021001.jpg",
                name: "Subaru Impreza", 
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
                image: "https://mazda-uae.com/media/zmadawqc/mazda3_bpl1_bejslah_46g_by6_ext_360_24_transparentpng_0005.png",
                name: "Mazda-3", 
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
                image: "https://www.lexus.com/content/dam/lexus/images/models/es/2024/visualizer/350/exterior/17-twin-v-spoke-alloy-dark-metallic-machined-finish/eminent-white-pearl/small-1.jpg",
                name: "Lexus ES", 
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
                image: "https://orag-vehicle-images.s3.us-west-2.amazonaws.com/2023/INFINITI/Q50/cc_2023INC250006_01_1280_KH3.png",
                name: "Infiniti Q50", 
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
                image: "https://www.tesla.com/ownersmanual/images/GUID-BEE67A59-6DD7-460C-9C49-0DD47E707A02-online-en-US.png",
                name: "Tesla Model 3", 
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
                image: "https://media.chromedata.com/MediaGallery/media/MjkzOTU4Xk1lZGlhIEdhbGxlcnk/cGozHsYJN2iBDDwtgeQqc_B33PkKu1pSpcq3HX9-7XSxXLV-B0odQbRYGLZs9BXyLjtpiTNqqIQkWlqjXYnmSwnB4d0MX7cfdhHfS_2nydc_NtJRCEMpErXhLaXVu__3REPHTjffwj4qJ80eri1ImTaXC8JcLZbeqJfPDqRiQw8/cc_2023VOC170020_01_640_723.png",
                name: "Volvo S60", 
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
                image: "https://configurator.porsche.com/model-start/pictures/97CFT1/extcam01.webp",
                name: "Porsche Panamera", 
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
                image: "https://static.cdn.circlesix.co/styles/large_article/s3/uploads/posts/2019/02/00cbbe058e298068b0f2423cf7df0b2c.jpg?itok=elE-U2DP",
                name: "Jaguar XE", 
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
                image: "https://cache4.pakwheels.com/system/car_generation_pictures/5877/original/Land-Rover-Discovery_2018.png?1632735024",
                name: "Land-Rover Discovery", 
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
                image: "https://edgecast-img.yahoo.net/mysterio/api/87C0B639C1271D6E37C0724E53A9B6BE0050DDBD8F5091924CB0225B8BD7ADB0/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/autodata/images/USD10ACC181A021001.jpg",
                name: "Acura TLX", 
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
                image: "https://mitsubishi-motors.cl/wp-content/uploads/2022/05/OUT22_Rojo-Diamante-Metalico-P62_1200x550_1.png",
                name: "Mitsubishi Outlander", 
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
                image: "https://cars.usnews.com/static/images/Auto/izmo/i159615605/2023_jeep_cherokee_angularfront.jpg",
                name: "Jeep Cherokee", 
                year: 2022, 
                price: 370000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        },
        gladiator: {
            type: {
                image: "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/Gladiator.png",
                name: "Jeep Gladiator",    
                year: 2022, 
                price: 240000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        }, 
        renegade: {
            type: {
                image: "https://inv.assets.ansira.net/ChromeColorMatch/us/TRANSPARENT_cc_2022JES170034_01_1280_PPE.png",
                name: "Jeep Renegade",    
                year: 2022, 
                price: 780000, 
                colors: ["red", "white", "black"], 
                doors: 4, 
                wheels: 4
            }
        }, 
    },
    buick: {
        regal: {
            type: {
                image: "https://www.motortrend.com/uploads/sites/10/2019/11/2020-buick-regal-sportback-essence-5door-hatchback-angular-front.png?fit=around%7C875:492.1875",
                name: "Buick Regal", 
                year: 2022, 
                price: 40000, 
                colors: ["blue", "gray", "black"], 
                doors: 4, 
                wheels: 4
            }
        } 
    },
}

var company = document.getElementById("company");
var brand = document.getElementById("brand");
var allCars = document.getElementById("allCars");

company.innerHTML = `<option value="">Select Company</option>`;
brand.innerHTML = `<option value="">Select Model</option>`;

for (var key in carVariants) {
    company.innerHTML += `
        <option value="${key}">${key.toUpperCase()}</option>
    `
    for (var key1 in carVariants[key]) {
        for (var key2 in carVariants[key][key1]){
            var carData = carVariants[key][key1][key2];
            var colorsDiv = "";
            for (var i = 0 ; i < carData.colors.length ; i++) {
                colorsDiv += `<div class="me-2" style="border: 1px solid; width: 20px; height: 20px; border-radius: 10px; background: ${carData.colors[i]}"></div>
                `
            }
            allCars.innerHTML += `
            <div class="col mb-2">
                <div class="card">
                <img src="${carData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carData.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${carData.year}</h6>
                        <h2>Rs ${carData.price}</h2>
                        <div class="d-flex">
                        ${colorsDiv}
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }
}

function onCompanyChange() {
    brand.innerHTML = "";
    brand.innerHTML = `<option value="">Select Model</option>`;
    
    for (var key in carVariants[company.value]) {
        brand.innerHTML += `
        <option value="${key}">${key.toUpperCase()}</option>
        `
    }
}

function filterCars() {
    var carData = carVariants[company.value][brand.value].type;
    allCars.innerHTML = `
            <div class="col mb-2">
                <div class="card">
                <img src="${carData.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${carData.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${carData.year}</h6>
                        <h2>Rs ${carData.price}</h2>
                    </div>
                </div>
            </div>
            `
}
















// function showVariants() {
//     var carSelect = document.getElementById("carSelect");
//     var variantContainer = document.getElementById("variantContainer");
//     var variantSelect = document.getElementById("variantSelect");
    
//     var selectedCar = carSelect.value;
//     if (selectedCar) {
//         variantSelect.innerHTML = "<option value=''>Select Variant</option>";
//         for (var variant in carVariants[selectedCar]) {
//             variantSelect.innerHTML += `<option value='${variant}'>${variant}</option>`;
//         }
//         variantContainer.style.display = "block";
//     } else {
//         variantContainer.style.display = "none";
//         document.getElementById("detailsContainer").style.display = "none";
//     }
// }

// function showDetails() {
//     var variantSelect = document.getElementById("variantSelect");
//     var detailsContainer = document.getElementById("detailsContainer");
//     var carDetails = document.getElementById("carDetails");

//     var selectedCar = document.getElementById("carSelect").value;
//     var selectedVariant = variantSelect.value;

//     if (selectedVariant && selectedCar) {
//         var details = carVariants[selectedCar][selectedVariant];
//         carDetails.innerHTML = `
//             <p>Model: ${details.model}</p>
//             <p>Year: ${details.year}</p>
//             <p>Price: $${details.price}</p>
            
//             <p>Number of Doors: ${details.doors}</p>
//             <p>Number of Wheels: ${details.wheels}</p>
//         `;
//         detailsContainer.style.display = "block";
//     } else {
//         detailsContainer.style.display = "none";
//     }
// }

// Populate brand options


// var brandSelect = document.getElementById('brandSelect');
// for (var brand in carData) {
//     var option = document.createElement('option');
//     option.value = brand;
//     option.text = brand;
//     brandSelect.appendChild(option);
// }

// // Event listener for brand selection
// // brandSelect.addEventListener('change', function() {
// //     var categorySelect = document.getElementById('categorySelect');
// //     var brand = this.value;
// //     categorySelect.innerHTML = `<option value="">Select Car</option>
// //     <option value="honda">Honda</option>
// //     <option value="toyota">Totota</option>
// //     <option value="suzuki">Suzuki</option>
// //     <option value="ford">Ford</option>
// //     <option value="chevrolet">Chevrolet</option>
// //     <option value="bmw">BMW</option>
// //     <option value="audi">Audi</option>
// //     <option value="mercedes">Mercedes Benz's</option>
// //     <option value="nissan">Nissan</option>
// //     <option value="hyundai">Hyundai</option>
// //     <option value="kia">KIA</option>
// //     <option value="volkswagen">Volks Wagen</option>
// //     <option value="subaru">Subaru</option>
// //     <option value="mazda">Mazda</option>
// //     <option value="lexus">Lexus</option>
// //     <option value="infiniti">Infiniti</option>
// //     <option value="tesla">Tesla</option>
// //     <option value="volvo">Volvo</option>
// //     <option value="porsche">Porsche</option>
// //     <option value="jaguar">Jaguar</option>
// //     <option value="landRover">Land Rover</option>
// //     <option value="acura">Acura</option>
// //     <option value="mitsubishi">Mitsubishi</option>
// //     <option value="jeep">Jeep</option>
// //     <option value="buick">Buick</option>`; 
// // Clear previous options

//     for (var category in carData[brand]) {
//         var option = document.createElement('option');
//         option.value = category;
//         option.text = category;
//         categorySelect.appendChild(option);
//     }
// });

// // Event listener for category selection
// categorySelect.addEventListener('change', function() {
//     var typeSelect = document.getElementById('typeSelect');
//     var brand = brandSelect.value;
//     var category = this.value;
//     typeSelect.innerHTML = ''; // Clear previous options

//     for (var type in carData[brand][category]) {
//         var option = document.createElement('option');
//         option.value = type;
//         option.text = type;
//         typeSelect.appendChild(option);
//     }
// });

// // Event listener for form submission
// document.getElementById('carForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     var brand = brandSelect.value;
//     var category = categorySelect.value;
//     var type = typeSelect.value;
//     var carDetails = carData[brand][category][type];
    
//     var carDetailsContainer = document.getElementById('carDetails');
//     carDetailsContainer.innerHTML = `
//         <h2>Car Details</h2>
//         <p><strong>Model Name:</strong> ${carDetails.model}</p>
//         <p><strong>Year:</strong> ${carDetails.year}</p>
//         <p><strong>Price:</strong> $${carDetails.price}</p>
//         <p><strong>Colors:</strong> ${carDetails.colors.join(', ')}</p>
//         <p><strong>Doors:</strong> ${carDetails.doors}</p>
//         <p><strong>Wheels:</strong> ${carDetails.wheels}</p>
//     `;
// });






    

