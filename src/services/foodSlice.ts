import IFoodPlate from '../types/FoodPlate';

import {apiSlice} from "../services/apiSlice"

const endpointUrl = '/foods';

export const initialState: IFoodPlate = {
  id: 0,
  name: '',
  image: '',
  price: '',
  description: '',
  available: false,
};

function getFoods(){
  return `${endpointUrl}`
}
function getFood({id}: { id: number }){
  return `${endpointUrl}/${id}`
}
function createFoodMutation(food: IFoodPlate){
  return {
    method: "POST",
    url: `${endpointUrl}`,
    body: food
  }
}
function updateFoodMutation(food: IFoodPlate){
  return {
    method: "PUT",
    url: `${endpointUrl}/${food.id}`,
    body: food
  }
}
function updateAvailableMutation(food: IFoodPlate){
  return {
    method: "PUT",
    url: `${endpointUrl}/${food.id}`,
    body: food
  }
}

function deleteFoodMutation({id}: {id:number}){
  return {
    url: `${endpointUrl}/${id}`,
    method: "DELETE"
  }
}


export const foodApiSlice = apiSlice.injectEndpoints({
  endpoints: ({query, mutation}) => ({
      getFoods: query<IFoodPlate[], void>({
          query: getFoods,
          providesTags: ["Foods"],
      }),
    getFood: query<IFoodPlate, { id: number }>({
      query: getFood,
      providesTags: ["Foods"],
    }),
    createFood: mutation<IFoodPlate, IFoodPlate>({
      query: createFoodMutation,
      invalidatesTags: ["Foods"]
    }),
    updateFood: mutation<IFoodPlate, IFoodPlate>({
      query: updateFoodMutation,
      invalidatesTags: ["Foods"]
    }),
    updateAvailable: mutation<IFoodPlate, IFoodPlate>({
      query: updateAvailableMutation
    }),
    deleteFood: mutation<void, { id: number }>({
      query: deleteFoodMutation,
      invalidatesTags: ["Foods"]
      })
    }),
});
export const {
    useGetFoodsQuery,
    useLazyGetFoodQuery,
    useCreateFoodMutation,
    useUpdateFoodMutation,
    useDeleteFoodMutation,
    useUpdateAvailableMutation
} = foodApiSlice

