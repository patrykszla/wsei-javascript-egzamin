//4.1
console.log("zadanie 4.1")
function getTagsOfElements(elements) {
    let array1 = [];
    for (i = 0; i < elements.length; i++) {
    array1.push(elements[i].tagName);
    }
    return array1
}

let task1 = document.getElementsByClassName("sample_class");

console.log(getTagsOfElements(task1));

// 4.2

console.log("zadanie 4.2")
function getClassesOfElement(element) {
    let arr2 = [];
    for (i = 0; i < element.classList.length; i ++) {
        arr2.push(element.classList.item(i));
    }
    return arr2;
}

let task2 = document.getElementById("sample_id");

console.log(getClassesOfElement(task2));

//4.3
console.log("zadanie 4.3")

function getInnerTextsOfElements(elements) {
    let array3 = [];
    for (i = 0; i < elements.length; i++) {
        array3.push(elements[i].innerText);
    }
    return array3
}
let sampleClass = document.getElementsByClassName("sample_clas_2")
console.log(getInnerTextsOfElements(sampleClass));

// 4.4
console.log("zadanie 4,4")
function getAddressesOfElements(elements) {
    let array4 = []
    for (i = 0; i < elements.length; i++) {
        array4.push(elements[i].getAttribute('href'))
    }
    return array4
}

let allLinks = document.getElementsByTagName("a");
console.log(allLinks);
console.log(getAddressesOfElements(allLinks));

//4.5
console.log("zadanie 4.5");
var task5 = document.querySelector('.sample_class_3').children;

console.log(getTagsOfElements(task5));