import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVERURL
export const imgUrl = process.env.REACT_APP_SERVERFILE

export const getCategories = async () => {
    const categories = await axios.get(`${serverUrl}/category/trending`)
    return {trending_categories: categories.data}
}

export const getTrendingRecipes = async () => {
    const recipes = await axios.get(`${serverUrl}/recipes/trending`)
    return {trending_recipes: recipes}
}

export const getRecipes = async (page = 1) => {
    const recipes = await axios.get(`${serverUrl}/recipes/all?page=${page}`)
    return {recipes: recipes}
}

export const getTrendingCookpages = async () => {
    const cookpages = await axios.get(`${serverUrl}/pages/trending`)
    return {trending_cookpages: cookpages}
}