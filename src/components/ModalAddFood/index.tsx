import React, {useRef, useEffect} from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import { FormHandles } from '@unform/core';
import Modal from '../Modal';
import Input from '../Input';
import {useCreateFoodMutation} from "../../services/foodSlice";
import {useSnackbar} from "notistack";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAddFood: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const formRef = useRef<FormHandles>(null);
  const { enqueueSnackbar } = useSnackbar();
  const [ createFood, status ] = useCreateFoodMutation()

  useEffect(() => {

    if(status.isSuccess){
      enqueueSnackbar("Comida adicionada com sucesso" ,{ variant: "success" });
      setIsOpen();
    }

    if(status.isError){
      enqueueSnackbar(JSON.stringify(status.error),{ variant: "error" });
    }
  }, [status])
  const handleSubmit = async (values: any) => {
      await createFood(values)
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui"/>

        <Input name="name" placeholder="Ex: Moda Italiana"/>
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
