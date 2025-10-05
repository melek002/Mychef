// Mock recipe data - In Django, this would come from your backend
const mockRecipes = [
    {
        id: 1,
        name: "Creamy Garlic Pasta",
        description: "A rich and indulgent pasta dish with a velvety garlic cream sauce, perfect for a cozy dinner.",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2h8ZW58MXx8fHwxNzU5NTEyOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        reviews: 124,
        cookTime: "25 min",
        servings: 4,
        cuisine: "Italian",
        ingredients: [
            "400g pasta (fettuccine or linguine)",
            "4 cloves garlic, minced",
            "2 cups heavy cream",
            "1/2 cup parmesan cheese, grated",
            "2 tbsp butter",
            "Salt and pepper to taste",
            "Fresh parsley for garnish"
        ],
        instructions: [
            "Cook pasta according to package directions in salted boiling water until al dente. Reserve 1 cup of pasta water before draining.",
            "In a large skillet, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragrant.",
            "Pour in heavy cream and bring to a gentle simmer. Let it cook for 3-4 minutes, stirring occasionally.",
            "Add parmesan cheese and stir until melted and smooth. Season with salt and pepper.",
            "Add drained pasta to the sauce and toss to coat. If needed, add reserved pasta water to adjust consistency.",
            "Serve immediately, garnished with fresh parsley and extra parmesan cheese."
        ],
        comments: [
            {
                user: "Sarah M.",
                comment: "Absolutely delicious! The sauce was so creamy and flavorful. My family loved it!",
                rating: 5
            },
            {
                user: "Mike R.",
                comment: "Great recipe. I added some grilled chicken for extra protein. Will make again!",
                rating: 4
            }
        ]
    },
    {
        id: 2,
        name: "Herb-Grilled Chicken",
        description: "Juicy grilled chicken marinated in fresh herbs and citrus, served with roasted vegetables.",
        image: "https://images.unsplash.com/photo-1682423187670-4817da9a1b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMG1lYWx8ZW58MXx8fHwxNzU5NDk4NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.6,
        reviews: 89,
        cookTime: "40 min",
        servings: 4,
        cuisine: "Mediterranean",
        ingredients: [
            "4 chicken breasts",
            "3 tbsp olive oil",
            "2 lemons, juiced and zested",
            "3 cloves garlic, minced",
            "2 tbsp fresh rosemary, chopped",
            "2 tbsp fresh thyme",
            "Salt and pepper to taste",
            "Mixed vegetables for roasting"
        ],
        instructions: [
            "In a bowl, combine olive oil, lemon juice and zest, garlic, rosemary, thyme, salt, and pepper to create the marinade.",
            "Place chicken breasts in a shallow dish and pour marinade over them. Cover and refrigerate for at least 30 minutes.",
            "Preheat grill to medium-high heat. Remove chicken from marinade and let excess drip off.",
            "Grill chicken for 6-7 minutes per side, or until internal temperature reaches 165°F (74°C).",
            "While chicken is grilling, roast your choice of vegetables in the oven at 400°F (200°C) for 20-25 minutes.",
            "Let chicken rest for 5 minutes before serving. Serve with roasted vegetables and enjoy!"
        ],
        comments: [
            {
                user: "Emma K.",
                comment: "The marinade is fantastic! So much flavor and the chicken came out perfectly juicy.",
                rating: 5
            }
        ]
    },
    {
        id: 3,
        name: "Mediterranean Quinoa Bowl",
        description: "A healthy and colorful bowl packed with quinoa, fresh vegetables, feta cheese, and lemon dressing.",
        image: "https://images.unsplash.com/photo-1620019989479-d52fcedd99fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NTk1NzI1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        reviews: 156,
        cookTime: "20 min",
        servings: 2,
        cuisine: "Mediterranean",
        ingredients: [
            "1 cup quinoa, cooked",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/2 red onion, thinly sliced",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup kalamata olives",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "Fresh mint and parsley"
        ],
        instructions: [
            "Cook quinoa according to package instructions and let it cool slightly.",
            "In a large bowl, combine cooked quinoa, cherry tomatoes, cucumber, red onion, and olives.",
            "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.",
            "Pour dressing over the quinoa mixture and toss well to combine.",
            "Top with crumbled feta cheese, fresh mint, and parsley.",
            "Serve immediately or refrigerate for 30 minutes for flavors to meld."
        ],
        comments: [
            {
                user: "Lisa T.",
                comment: "Perfect lunch option! Light, refreshing, and so satisfying.",
                rating: 5
            },
            {
                user: "David L.",
                comment: "Love this recipe. I meal prep it for the week!",
                rating: 5
            }
        ]
    },
    {
        id: 4,
        name: "Decadent Chocolate Lava Cake",
        description: "Rich chocolate cake with a molten center, topped with vanilla ice cream and fresh berries.",
        image: "https://images.unsplash.com/photo-1673551490243-f29547426841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0fGVufDF8fHx8MTc1OTU4MzYzOXww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        reviews: 203,
        cookTime: "15 min",
        servings: 4,
        cuisine: "French",
        ingredients: [
            "1/2 cup butter",
            "4 oz dark chocolate, chopped",
            "2 eggs",
            "2 egg yolks",
            "1/4 cup sugar",
            "2 tbsp flour",
            "Butter and cocoa powder for ramekins",
            "Vanilla ice cream for serving"
        ],
        instructions: [
            "Preheat oven to 425°F (220°C). Butter four ramekins and dust with cocoa powder.",
            "Melt butter and chocolate together in a double boiler or microwave, stirring until smooth.",
            "In a bowl, whisk eggs, egg yolks, and sugar until thick and pale.",
            "Fold melted chocolate mixture into the egg mixture, then gently fold in flour.",
            "Divide batter among prepared ramekins. Bake for 12-14 minutes until edges are firm but center is still soft.",
            "Let cool for 1 minute, then invert onto plates. Serve immediately with vanilla ice cream."
        ],
        comments: [
            {
                user: "Rachel P.",
                comment: "This is restaurant-quality! The molten center is perfection.",
                rating: 5
            }
        ]
    },
    {
        id: 5,
        name: "Dragon Roll Sushi",
        description: "Beautiful sushi rolls with tempura shrimp, avocado, and a sweet eel sauce drizzle.",
        image: "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzU5NDk0Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.5,
        reviews: 67,
        cookTime: "45 min",
        servings: 4,
        cuisine: "Japanese",
        ingredients: [
            "4 sheets nori seaweed",
            "2 cups sushi rice, cooked",
            "8 tempura shrimp",
            "2 avocados, sliced",
            "1 cucumber, julienned",
            "Eel sauce",
            "Sesame seeds",
            "Rice vinegar, sugar, salt for seasoning"
        ],
        instructions: [
            "Prepare sushi rice and season with rice vinegar, sugar, and salt. Let cool to room temperature.",
            "Place nori sheet on bamboo mat, spread rice evenly leaving 1 inch at the top.",
            "Add tempura shrimp and cucumber in a line across the center of the rice.",
            "Roll tightly using the bamboo mat, sealing the edge with a little water.",
            "Place sliced avocado on top of the roll and gently press to adhere.",
            "Slice into 8 pieces, drizzle with eel sauce and sprinkle with sesame seeds."
        ],
        comments: [
            {
                user: "Tom W.",
                comment: "Impressive! Easier than I thought it would be.",
                rating: 4
            }
        ]
    },
    {
        id: 6,
        name: "Classic Beef Burger",
        description: "Juicy beef patty with melted cheese, crispy bacon, and all the fixings on a toasted brioche bun.",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllc3xlbnwxfHx8fDE3NTk0OTExMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        reviews: 178,
        cookTime: "20 min",
        servings: 4,
        cuisine: "American",
        ingredients: [
            "1.5 lbs ground beef (80/20)",
            "4 brioche buns",
            "4 slices cheddar cheese",
            "8 strips bacon, cooked",
            "Lettuce, tomato, onion",
            "Pickles",
            "Special sauce (mayo, ketchup, mustard)",
            "Salt and pepper"
        ],
        instructions: [
            "Divide ground beef into 4 equal portions and form into patties slightly larger than your buns. Season generously with salt and pepper.",
            "Heat a griddle or large skillet over medium-high heat. Cook burgers for 4-5 minutes per side for medium.",
            "In the last minute of cooking, top each patty with a slice of cheese and cover to melt.",
            "Toast brioche buns on the griddle until golden brown.",
            "Mix together mayo, ketchup, and mustard to create the special sauce.",
            "Assemble burgers: spread sauce on buns, add lettuce, tomato, patty with cheese, bacon, onion, and pickles. Serve with fries!"
        ],
        comments: [
            {
                user: "Alex J.",
                comment: "Best burger I've made at home! The special sauce is amazing.",
                rating: 5
            },
            {
                user: "Nina S.",
                comment: "So good! My family requests this every weekend now.",
                rating: 5
            }
        ]
    }
];

// Application State
let recipes = [...mockRecipes];
let currentPage = 'home';
let selectedRecipe = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    initializeAddRecipeForm();
    renderRecipes();
});

// Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateTo(page);
        });
    });

    // Back buttons
    document.getElementById('backButton').addEventListener('click', () => navigateTo('home'));
    document.getElementById('addBackButton').addEventListener('click', () => navigateTo('home'));
    document.getElementById('cancelButton').addEventListener('click', () => navigateTo('home'));
}

function navigateTo(page) {
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show selected page
    let pageElement;
    switch(page) {
        case 'home':
            pageElement = document.getElementById('homePage');
            break;
        case 'add':
            pageElement = document.getElementById('addPage');
            break;
        case 'favorites':
            pageElement = document.getElementById('favoritesPage');
            break;
        case 'login':
            pageElement = document.getElementById('loginPage');
            break;
        case 'detail':
            pageElement = document.getElementById('detailPage');
            break;
    }

    if (pageElement) {
        pageElement.classList.add('active');
    }

    currentPage = page;
    window.scrollTo(0, 0);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        
        if (query === '') {
            renderRecipes(recipes);
        } else {
            const filtered = recipes.filter(recipe => 
                recipe.name.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.cuisine.toLowerCase().includes(query)
            );
            renderRecipes(filtered);
        }
    });
}

// Render recipe cards
function renderRecipes(recipesToRender = recipes) {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = '';

    recipesToRender.forEach(recipe => {
        const card = createRecipeCard(recipe);
        grid.appendChild(card);
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => viewRecipe(recipe);

    const stars = '★'.repeat(Math.floor(recipe.rating)) + '☆'.repeat(5 - Math.floor(recipe.rating));

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-card-image" onerror="this.src='https://via.placeholder.com/400x200?text=Recipe+Image'">
        <div class="recipe-card-content">
            <h3 class="recipe-card-title">${recipe.name}</h3>
            <p class="recipe-card-description">${recipe.description}</p>
            <div class="recipe-card-meta">
                <div class="recipe-card-rating">
                    <svg class="star-icon" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>${recipe.rating} (${recipe.reviews})</span>
                </div>
                <span>⏱ ${recipe.cookTime}</span>
            </div>
            <button class="recipe-card-button" onclick="event.stopPropagation(); viewRecipe(${recipe.id});">
                View Recipe
            </button>
        </div>
    `;

    return card;
}

// View recipe detail
function viewRecipe(recipeOrId) {
    let recipe;
    if (typeof recipeOrId === 'number') {
        recipe = recipes.find(r => r.id === recipeOrId);
    } else {
        recipe = recipeOrId;
    }

    if (!recipe) return;

    selectedRecipe = recipe;
    renderRecipeDetail(recipe);
    navigateTo('detail');
}

function renderRecipeDetail(recipe) {
    const detailContent = document.getElementById('detailContent');

    const ingredientsHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    const instructionsHTML = recipe.instructions.map((inst, idx) => `
        <li>
            <div class="instruction-number">${idx + 1}</div>
            <div>${inst}</div>
        </li>
    `).join('');

    const commentsHTML = recipe.comments.map(comment => {
        const stars = '★'.repeat(comment.rating) + '☆'.repeat(5 - comment.rating);
        return `
            <div class="comment-item">
                <div class="comment-header">
                    <span class="comment-user">${comment.user}</span>
                    <div class="comment-rating">${stars}</div>
                </div>
                <p class="comment-text">${comment.comment}</p>
            </div>
        `;
    }).join('');

    detailContent.innerHTML = `
        <div class="detail-card">
            <img src="${recipe.image}" alt="${recipe.name}" class="detail-image" onerror="this.src='https://via.placeholder.com/900x400?text=Recipe+Image'">
            <div class="detail-body">
                <div class="detail-header">
                    <h2 class="detail-title">${recipe.name}</h2>
                    <div class="detail-meta">
                        <div class="detail-meta-item">
                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>${recipe.cookTime}</span>
                        </div>
                        <div class="detail-meta-item">
                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span>${recipe.servings} servings</span>
                        </div>
                        <div class="detail-meta-item">
                            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                <line x1="4" x2="4" y1="22" y2="15"></line>
                            </svg>
                            <span>${recipe.cuisine}</span>
                        </div>
                        <div class="detail-rating">
                            <svg class="star-icon" viewBox="0 0 24 24">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>${recipe.rating} (${recipe.reviews} reviews)</span>
                        </div>
                    </div>
                </div>

                <div class="detail-section">
                    <h3>Ingredients</h3>
                    <ul class="ingredient-list">
                        ${ingredientsHTML}
                    </ul>
                </div>

                <div class="detail-section">
                    <h3>Instructions</h3>
                    <ol class="instruction-list">
                        ${instructionsHTML}
                    </ol>
                </div>

                ${recipe.comments && recipe.comments.length > 0 ? `
                    <div class="detail-section">
                        <h3>User Reviews</h3>
                        ${commentsHTML}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Add Recipe Form
function initializeAddRecipeForm() {
    const form = document.getElementById('addRecipeForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const title = document.getElementById('recipeTitle').value;
        const description = document.getElementById('recipeDescription').value;
        const cuisine = document.getElementById('recipeCuisine').value;
        const cookTime = document.getElementById('recipeCookTime').value;
        const servings = parseInt(document.getElementById('recipeServings').value);
        const ingredients = document.getElementById('recipeIngredients').value
            .split('\n')
            .filter(line => line.trim() !== '');
        const instructions = document.getElementById('recipeInstructions').value
            .split('\n')
            .filter(line => line.trim() !== '');

        const newRecipe = {
            id: recipes.length + 1,
            name: title,
            description: description,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
            rating: 0,
            reviews: 0,
            cookTime: cookTime,
            servings: servings,
            cuisine: cuisine,
            ingredients: ingredients,
            instructions: instructions,
            comments: []
        };

        recipes.unshift(newRecipe);
        
        // Reset form
        form.reset();
        
        // Show success message
        alert('Recipe added successfully!');
        
        // Navigate back to home and render recipes
        navigateTo('home');
        renderRecipes();
    });
}
