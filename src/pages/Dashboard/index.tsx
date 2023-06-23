import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Food from '../../components/Food';
import ModalAddFood from '../../components/ModalAddFood';
import ModalEditFood from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import IFoodPlate from '../../types/FoodPlate';
import {useDeleteFoodMutation, useGetFoodsQuery} from "../../services/foodSlice";
import { useSnackbar } from 'notistack';
const Dashboard: React.FC = () => {
  const [foods, setFoods] = useState<IFoodPlate[]>([]);
  const [editingFood, setEditingFood] = useState<IFoodPlate>({} as IFoodPlate);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const { data, isFetching } = useGetFoodsQuery()
  const [deleteFood, status] = useDeleteFoodMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect( () => {
    if(data){
      setFoods(data)
    }
  },[data])

  useEffect( () => {

    if(isFetching){
      console.log('loading....')
    }
  }, [isFetching])
  async function handleDeleteFood(id: number): Promise<void> {
    await deleteFood({id})
  }

  useEffect(() => {

    if(status.isSuccess){
      enqueueSnackbar("Comida removida com sucesso" ,{ variant: "success" });
    }

    if(status.isError){
      enqueueSnackbar(JSON.stringify(status.error),{ variant: "error" });
    }

  },[status])
  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }
  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }
  function handleEditFood(food: IFoodPlate): void {
    setEditingFood(food);
    toggleEditModal();
  }

  return (
    <>
      <Header openModal={toggleModal} />
      <ModalAddFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
      />
      <ModalEditFood
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foods &&
          foods.map(food => (
            <Food
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))}
      </FoodsContainer>
    </>
  );
};

export default Dashboard;
