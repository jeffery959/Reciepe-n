import axios from "axios"
export const UrlLink:string ='https://reciepe-ma1u530fz-jeffery959s-projects.vercel.app'
export const getRecipe = async(setRecipeList:any)=>{
   await axios.get(`${UrlLink}/api/AllRecipe`)
    .then((response)=>{
     setRecipeList(response.data.recipeList)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

