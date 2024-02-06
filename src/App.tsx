import React, {useState} from 'react';
import './Components/Styles/constructor-styles.css'
import './Components/Styles/drag_styles.css'
import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {DragDropContext, Draggable, DragStart, Droppable, DropResult} from "react-beautiful-dnd";
import EmptyDrag from "./EmptyDrag";


const App:React.FC = () => {

    type bricksType = {
        id: string,
        items: itemType[]
    }

    type itemType = {
        id: string,
        path: string,
        order: number
    }

    const bricksInitialState:bricksType[] = [
        {
            id: 'col-1',
            items: [
                {
                    id: 'display',
                    path: 'Group8.png',
                    order: 0,
                },
                {
                    id: 'operations',
                    path: 'Group7.png',
                    order: 1,
                },
                {
                    id: 'keyboard',
                    path: 'Group6.png',
                    order: 2,
                },
                {
                    id: 'result',
                    path: 'Group5.png',
                    order: 3
                }
            ]
        },
        {
            id: 'col-2',
            items: []
        }
    ]

    const [bricks, setBricks] = useState(bricksInitialState)
    const [stub, setStub] = useState([])

    const handleDragAndDrop = (results:DropResult) => {

        const {source, destination} = results;

        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;


        if (source.droppableId === 'col-2' && destination.droppableId === 'col-1') {
            return alert('Double click on element to remove')
        }

        if (destination.droppableId === 'col-1') return;

        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;

        const itemsSourceIndex = bricks.findIndex((item) => item.id === source.droppableId);
        const itemsDestinationIndex = bricks.findIndex((item) => item.id === destination.droppableId);

        const newSourceItems = [...bricks[itemsSourceIndex].items];
        const newDestinationItems = source.droppableId !== destination.droppableId ? [...bricks[itemsDestinationIndex].items] : newSourceItems;

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

        const newStores = [...bricks];

        newStores[itemsSourceIndex] = {
            ...bricks[itemsSourceIndex],
            items: newSourceItems
        };
        newStores[itemsDestinationIndex] = {
            ...bricks[itemsDestinationIndex],
            items: newDestinationItems,
        };

        setBricks(newStores);
    };

    function handleDoubleClick(obj: itemType, index: number) {

        const tempArray = [...bricks]
        const newItems = [...bricks[0].items]

        const [deleteItem] = tempArray[1].items.splice(index, 1)
        newItems.splice(obj.order,0,deleteItem)

        tempArray[0] = {
            ...bricks[0],
            items: newItems
        };
        tempArray[1] = {
            ...bricks[1],
            items: [...tempArray[1].items]
        };

        setBricks(tempArray)
    }

    function handleDragStart (result: DragStart) {

    }

    return (
        <div className="layout">
            <div className="wrapper">
                <DragDropContext onDragEnd={handleDragAndDrop}>
                        {bricks.map(brick => <Droppable droppableId={brick.id} type='brick' key={brick.id} >
                            {provided => (
                                <div className={brick.id === 'col-1' ? 'constructor__wrapper' : 'drag__wrapper'} style={brick.items.length > 0 ? {justifyContent: 'start'} : undefined} {...provided.droppableProps} ref={provided.innerRef}>
                                    {brick.items.length > 0 ? brick.items.map((el, index) =>
                                        <Draggable draggableId={el.id} index={index} key={el.id} isDragDisabled={brick.id === 'col-2' && el.id === 'display'}>
                                            {(provided) => (
                                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onDoubleClick={brick.id === 'col-2' ? () => handleDoubleClick(el, index) : undefined}>
                                                    <img src={require(`./Components/Bricks/${el.path}`)} alt={`${el.id}`}/>
                                                </div>
                                            )}
                                    </Draggable>) : brick.id === 'col-2' ? <EmptyDrag/> : null
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>)}
                </DragDropContext>
            </div>
        </div>
    );
};

export default App;
