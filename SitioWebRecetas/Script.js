function filterRecipes() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const recipes = document.querySelectorAll(".recipe-card");

    recipes.forEach(recipe => {
        const ingredientsText = recipe.querySelector(".ingredients").innerText.toLowerCase();
        if (ingredientsText.includes(searchInput)) {
            recipe.style.display = "block";
        } else {
            recipe.style.display = "none";
        }
    });
}
