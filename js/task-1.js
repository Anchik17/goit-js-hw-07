const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll('.item');
const categoryCount = categoryItems.length;

console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li');
    const elementCount = categoryElements.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementCount}`);
});