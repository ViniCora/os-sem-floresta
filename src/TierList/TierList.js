import React, {useEffect, useState} from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from "../Header/Header.js";
import NpcDataService from '../Services/NpcService.js';
import AtributesDataService from '../Services/AtributesService.js';
import CardPersonagem from '../CardPersonagem/CardPersonagem';


function TierList(){

    const [NPCs, setNPCsAtribute] = useState([]);
    const [players, setPlayersAtribute] = useState([]);
    
    useEffect(() => {
        retrieveNPCAtributes();
        retrievePlayersAtribute()
      }, []);

    const retrieveNPCAtributes = () => {
        NpcDataService.getNPC()
        .then((response) => {
    
        var data = response.data.sort((a,b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
    
        setNPCsAtribute(data);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    const retrievePlayersAtribute = () => {
        AtributesDataService.getPlayers()
        .then((response) => {
    
        var data = response.data.sort((a,b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
    
        setPlayersAtribute(data);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    function handleOnDragEnd(result) {
        console.log(result);
        if (!result.destination) return;
        const items = Array.from(NPCs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setNPCsAtribute(items);
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent: 'center'}}>
            <Header></Header>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                        {NPCs.map((npc, index) => {
                        if(!npc.mostrar_tela){
                            return;
                        }
                        return (
                            <Draggable key={npc._id} draggableId={npc._id} index={index}>
                            {(provided) => (
                                <div style={{marginBottom: '20px'}}>
                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <CardPersonagem Atributes={npc}></CardPersonagem>
                                    </li>
                                </div>
                            )}
                            </Draggable>
                        );
                        })}
                        {provided.placeholder}
                    </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default TierList;