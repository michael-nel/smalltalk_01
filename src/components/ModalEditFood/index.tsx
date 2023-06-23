import React, {useRef, useEffect} from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import IFoodPlate from "../../types/FoodPlate";
import {useUpdateFoodMutation} from "../../services/foodSlice";
import { useSnackbar } from 'notistack';
interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: IFoodPlate;
}
const ModalEditFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingFood,
}) => {

  const { enqueueSnackbar } = useSnackbar();

  const formRef = useRef<FormHandles>(null);

  const [ editFood, status] = useUpdateFoodMutation()

  useEffect(() => {

    if(status.isSuccess){
      enqueueSnackbar("Comida atualizada com sucesso" ,{ variant: "success" });
      setIsOpen()

    }

    if(status.isError){
      enqueueSnackbar(JSON.stringify(status.error),{ variant: "error" });
    }

  },[status])

  const handleSubmit = async (values: any) => {
    await editFood({ id: editingFood.id,
      ...values});
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
