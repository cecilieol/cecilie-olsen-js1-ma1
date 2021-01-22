// Question 1

const cat = {
    complain: function () {
        console.log("Meow!");
    }
}


// Question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");


// Question 5

var paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);

    paragraphs[i].style.color = "red";
}


// Question 6

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>"
resultsContainer.style.backgroundColor = "yellow";


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catInfo(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

catInfo(cats);

// Question 8

function createCats(cats) {

    let catsList = "";

    for (let i = 0; i < cats.length; i++) {

        let catsAge = "Unknown";

        if (cats[i].age) {
            catsAge = cats[i].age;
        }

        catsList += `<div class="cats-name">
                        <h5>${cats[i].name}</h5>
                        <p>Age: ${catsAge}</p>
                    </div>`
    }

    return catsList;

}

const catsHtml = createCats(cats);

console.log(catsHtml);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = catsHtml;