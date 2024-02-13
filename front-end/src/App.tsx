import TableComponent from './Components/Table/index.tsx'
import Form from './Components/Form/index.tsx'
import { useContext, useEffect, useState } from 'react'
import { RiAddCircleFill } from "react-icons/ri";
import { deleteItem, getAll, post, put } from './Axios.tsx';
import { styled } from 'styled-components';
import { Context } from './Context.jsx';
import IconButton from './Components/IconButton/index.tsx';
import ModalComponent from './Components/Modal/index.tsx';
import Swal from 'sweetalert2';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContainerButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 5px;
  padding: 5px;
`;

const Label = styled.label`
    font-size:16px;
    margin-left: 5px;
`;

const ContainerDelete = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`;

const ButtonDelete = styled.button`
    background-color: #dc3545;
    margin-top: 15px;
    width: 100px;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
`;

const formInitialState = {
    room:"", 
    procedures:"",
    doctor:"",
    pacient: "",
    hospital: "",
    dateSurgical:"",
    observations: "",
    dateCreate:""
}


export default function App() {
    const { allContext, setAllContext } = useContext<any>(Context);
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllSurgicalRequest();
    },[])

    async function getAllSurgicalRequest(){
        const data = await getAll("/surgical-request");
        setData(data);
    }

    function formatMultiSelectsToData(oldArray:{value:number,label:string}[]){
        let newArray: {code:number}[] = [];
        oldArray.map((item:{value:number}) => {newArray.push({code:item.value})})
        return newArray;
    }

    async function deleteSurgicalRequest(){
        const response = await deleteItem(`/surgical-request/${allContext.codeOfSurgicalSelected}`);
        if(response !== 'erro'){
            Swal.fire({
                icon: "success",
                title: `Pedido excluido com Sucesso`,
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            Swal.fire({
                icon: "error",
                title: `Ops... Pedido não excluido, tente novamente mais tarde`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        setAllContext({...allContext,codeOfSurgicalSelected:0,showModal: false, modalContent: ""})
        getAllSurgicalRequest();
    }

    async function createOrUpdateSurgicalRequest(){
        let data = allContext.form;
        data.room = formatMultiSelectsToData(allContext.form.room);
        data.procedures = formatMultiSelectsToData(allContext.form.procedures);
        data.hospital = formatMultiSelectsToData(allContext.form.hospital);
        let response = "";
        if(allContext.modalContent === "add"){
            response = await post("/surgical-request",data);
        }else {
            console.log("Data edit",data);
            response = await put(`/surgical-request/${allContext.codeOfSurgicalSelected}`,data);
        }
         
        if(response !== 'erro'){
            Swal.fire({
                icon: "success",
                title: `Pedido ${allContext.modalContent === "add"?"criado":"alterado"} com Sucesso`,
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            Swal.fire({
                icon: "error",
                title: `Ops... ${allContext.modalContent === "add"?"Cadastro não realizado":"Alteração não realizada"} , tente novamente mais tarde`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        setAllContext({...allContext,form:formInitialState,showModal: false, codeOfSurgicalSelected:0,modalContent: ""})
        getAllSurgicalRequest();
    }

    return(
        <Container>
            <ContainerButton>
                <IconButton 
                    className={`
                        border-radius: 5px;
                        width: auto;
                        font-size: 24px;
                        background-color: ${allContext.is_dark_theme?"#242424":"white"};
                        border: 1px solid ${allContext.is_dark_theme?"white":"#242424"}
                    `}
                    onClick={() => setAllContext({...allContext, showModal: true, form:formInitialState, modalContent:"add"})} 
                    is_dark_theme={allContext.is_dark_theme}
                > 
                    <RiAddCircleFill />  <Label>{"Adicionar Pedido Cirurgico "}</Label>
                </IconButton>
            </ContainerButton>
            <TableComponent 
                setAllContext={setAllContext}
                data={data} 
                is_dark_theme={allContext.is_dark_theme} 
                allContext={allContext}            
            />
        <ModalComponent is_open={allContext.showModal} onClose={() => setAllContext({...allContext, showModal: false})} >
            {allContext.modalContent==="delete"?
                <ContainerDelete>
                    <Label>Tem certeza que deseja excluir?</Label>
                    <ButtonDelete onClick={() => deleteSurgicalRequest()}>Excluir</ButtonDelete>
                </ContainerDelete>
                :
                <Form 
                    sendApi={
                        () => createOrUpdateSurgicalRequest()
                    }
                >
                </Form>
            }
        </ModalComponent>
      </Container>
    )
}