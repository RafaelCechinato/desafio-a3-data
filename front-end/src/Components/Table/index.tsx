import { ReactNode } from 'react'
import styled from 'styled-components';
import IconButton from '../IconButton';
import LabelComponent from '../Label';
import { changeArrayToMultiSelect, changeArrayToMultiSelectRoom, formatDate } from '../../Utils';
import { CiEdit } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

interface TableProps {
    is_dark_theme: boolean;
    setAllContext: ({}:any) => void;
    allContext: any;
    data: Array<{
      code: number;
      room: Array<{
        code: number;
        number: string;
        floor: string;
        block: string;
      }>;
      procedures: Array<{
        code: number;
        name: string;
      }>;
      doctor: string;
      pacient: string;
      hospital: Array<{
        code: number;
        name: string;
      }>;
      dateSurgical: string;
      dateCreate: string;
      observations: string;
    }>;
}

interface Room {
  code: number;
  number: string;
  floor: string;
  block: string;
}

interface Procedure {
  code: number;
  name: string;
}

interface Hospital {
  code: number;
  name: string;
}

interface MobileDescription {
  is_dark_theme: boolean;
  children: ReactNode;
}

interface HeaderProps{
  children: ReactNode;
}

interface thProps{
  is_dark_theme: boolean;
}

interface TrProps{
  is_dark_theme: boolean;
}

interface TdProps{
  className?: string;
}

const Table = styled.table<Omit<TableProps,'data'|'allContext'|'setAllContext'>>`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: ${(props) => (props.is_dark_theme ? 'white' : 'black')};
`;

const Thead = styled.thead`
  @media (max-width: 920px) {
    display: none;
  }
`

const Th = styled.th<thProps>`
  border: 1px solid ${(props) => (props.is_dark_theme ? 'white' : '#ddd')};
  padding: 8px;
  text-align: left;
  color: ${(props) => (props.is_dark_theme ? 'white' : 'black')};
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
`;

const Tr = styled.tr<TrProps>`
  border-bottom: 1px solid transparent;
  @media (max-width: 920px) {
    border-bottom: 1px solid ${(props) => (props.is_dark_theme ? 'white' : 'black')};
    display: flex;
    flex-direction: column;
  }
`

const Td = styled.td<TdProps>`
  border: 1px solid #ddd;
  padding: 8px;
  
  @media (max-width: 920px) {
    width: 100%;
    padding: 5px;
    border: 1px solid transparent;
  }
  ${(props) => (props.className?props.className:"")}
`;

const DivMobileOnly = styled.div`
  display: none;
  @media (max-width: 920px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  } 
`;

const DivDesktopOnly = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) {
    display: none;
  } 
`;

const DivList = styled.div`
  font-weight: none;
  @media (max-width: 920px) {
    font-weight: bold;
  } 
`;

const Container = styled.div<Omit<TableProps,'data'|'allContext'|'setAllContext'>>`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.is_dark_theme ? '#242424' : 'white')};
  border: 1px solid white;

`;

const Header = styled.div<HeaderProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MobileDescription = ({is_dark_theme, children}:MobileDescription) => (
  <LabelComponent 
    size={'18px'} 
    color={is_dark_theme?'white':'black'} 
    className={`
      text-align: start;
      display: none;
      @media (max-width: 920px) {
        display: block;
      }
    `}
  >
    {children}
  </LabelComponent>
)

const RoomInfo: React.FC<{ rooms: Room[] }> = ({ rooms }) => (
  <Td className='border: 1px solid transparent'>
    {rooms.map((room) => (
      <DivList  key={room.code}>
        {`Número: ${room.number}, Andar: ${room.floor}, Bloco: ${room.block}`}
      </DivList>
    ))}
  </Td>
);

const ProcedureInfo: React.FC<{ procedures: Procedure[] }> = ({ procedures }) => (
  <Td className='border: 1px solid transparent'>
    {procedures.map((procedure) => (
      <DivList key={procedure.code}>{procedure.name}</DivList>
    ))}
  </Td>
);

const HospitalInfo: React.FC<{ hospitals: Hospital[] }> = ({ hospitals }) => (
  <Td className='border: 1px solid transparent'>
    {hospitals.map((hospital) => (
      <DivList key={hospital.code}>{hospital.name}</DivList>
    ))}
  </Td>
);

function TableComponent({data,is_dark_theme,setAllContext,allContext}:TableProps) {
  
  function handleEditSurgicalRequest(request:any){

    let newData = request;
    newData.room = changeArrayToMultiSelectRoom(request.room);
    newData.procedures = changeArrayToMultiSelect(request.procedures);
    newData.hospital = changeArrayToMultiSelect(request.hospital);

    setAllContext({...allContext,codeOfSurgicalSelected:request.code,modalContent: "edit", showModal:true,form: newData});
  }

  function handleDeleteSurgicalRequest(request:any){
    setAllContext({...allContext,codeOfSurgicalSelected:request.code,modalContent: "delete", showModal:true});
  }

  return (
    <Container is_dark_theme={is_dark_theme}>
      <Header>
        <IconButton onClick={() => setAllContext({...allContext,is_dark_theme:!is_dark_theme})} is_dark_theme={is_dark_theme}> 
          {is_dark_theme? <CiDark />:<CiLight />}
        </IconButton>
      </Header>
      {data !== undefined && data.length > 0?
        <Table is_dark_theme={is_dark_theme}>
          <Thead>
            <tr>
              <Th is_dark_theme={is_dark_theme}>Código</Th>
              <Th is_dark_theme={is_dark_theme}>Salas</Th>
              <Th is_dark_theme={is_dark_theme}>Procedimentos</Th>
              <Th is_dark_theme={is_dark_theme}>Doutor</Th>
              <Th is_dark_theme={is_dark_theme}>Paciente</Th>
              <Th is_dark_theme={is_dark_theme}>Hospital</Th>
              <Th is_dark_theme={is_dark_theme}>Data da Cirurgia</Th>
              <Th is_dark_theme={is_dark_theme}>Data de Criação</Th>
              <Th is_dark_theme={is_dark_theme}>Observações Gerais</Th>
              <Th is_dark_theme={is_dark_theme}>Gerenciar</Th>
            </tr>
          </Thead>
          <tbody>
            {data.map((item, index) => (
              <Tr is_dark_theme={is_dark_theme} key={index}>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Código: <strong>{item.code}</strong>
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    {item.code}
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Salas: <RoomInfo rooms={item.room} />
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    <RoomInfo rooms={item.room} />
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Procedimentos: <ProcedureInfo procedures={item.procedures} />
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    <ProcedureInfo procedures={item.procedures} />
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Doutor: <strong>{item.doctor}</strong>
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    {item.doctor}
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Paciente: <strong>{item.pacient}</strong>
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    {item.pacient}
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Hospitais: <HospitalInfo hospitals={item.hospital} />
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    <HospitalInfo hospitals={item.hospital} />
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Data Cirurgia: <strong>{formatDate(item.dateSurgical)}</strong>
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    {formatDate(item.dateSurgical)}
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Data Criação: <strong>{formatDate(item.dateCreate)}</strong>
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    {formatDate(item.dateCreate)}
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <MobileDescription is_dark_theme={is_dark_theme}>
                      Observações: <strong>{item.observations}</strong>
                    </MobileDescription>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    {item.observations}
                  </DivDesktopOnly>
                </Td>
                <Td>
                  <DivMobileOnly>
                    <IconButton onClick={() => handleEditSurgicalRequest(item)} is_dark_theme={is_dark_theme}> 
                      <CiEdit />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteSurgicalRequest(item)} is_dark_theme={is_dark_theme}> 
                      <MdDeleteForever />
                    </IconButton>
                  </DivMobileOnly>
                  <DivDesktopOnly>
                    <IconButton onClick={() => handleEditSurgicalRequest(item)} is_dark_theme={is_dark_theme}> 
                      <CiEdit />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteSurgicalRequest(item)} is_dark_theme={is_dark_theme}> 
                      <MdDeleteForever />
                    </IconButton>
                  </DivDesktopOnly>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
        :
        <LabelComponent
          size={'20px'} 
          color={is_dark_theme?'white':'black'}
          className='align-items: center; justify-content:center;'
        >
          {"Não foi encontrado nenhum resultado"}
        </LabelComponent>
      }
      
    </Container>
   
  )
}

export default TableComponent
