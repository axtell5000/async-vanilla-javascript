// Basic illustration of Asynchronous
// const second = () => {
//     setTimeout(() => {
//         console.log('Async Hey there');
//     }, 2000);
// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     console.log('The end');
// }
// first();

// illustrating call back hell
// function getRecipe() {
//   setTimeout(() => {
//     const recipeID = [521, 45, 774, 4];
//     console.log(recipeID);
//     setTimeout(id => {
//       const recipe = {title: 'Fresh tomato pasta', publisher: 'Stephen'};
//       console.log(`${id}: ${recipe.title}`);

//       setTimeout(publisher => {
//         const recipe2 = {title: 'HMS Pizza', publisher: 'Stephen'};
//         console.log(recipe2);
//       }, 1500, recipe.publisher);

//     }, 1500, recipeID[2]); // this third param for timeOutccan be used as the parameter for the callback function inside Timeout
//   }, 1500);
// }

// getRecipe();

// Using Promises

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([223, 883, 332, 444]);
    }, 1500);
});
const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Stephen'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};
const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'HMS Pizza', publisher: 'Stephen'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};
// getIDs
// .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Stephen Axtell');
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log('Error!!');
// });

// async happens in the background. Only use await inside an async function
// async function getRecipesAW() {
//     const IDs = await getIDs;
//     console.log(IDs);
//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe)//;
//     const related = await getRelated('Stephen Axtell');
//     console.log(related);
//     return recipe;
// }
// have to use .then() if you want to work what is returned. Because the async is asynchronous and works in the background nothing
// will be returned if you try use it normally 
// getRecipesAW().then(result => console.log(`${result} is the best ever!`));

// A little function using a weatherapi, plus fake CORS
function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then(result => {
        // console.log(result);
        return result.json(); // .json() returns a promise, we have to chain a .then()
    })
    .then(data => {
        // console.log(data);
        const today = data.consolidated_weather[0];
        console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}.`);
    })
    .catch(error => console.log(error));
}
getWeather(2487956);
getWeather(44418);

