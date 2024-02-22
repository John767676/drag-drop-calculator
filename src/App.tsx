import React, {useState} from 'react';
import './Components/Styles/constructor-styles.css'
import './Components/Styles/drag_styles.css'
import {useAppSelector} from "./hooks/useAppSelector";
import {
    DragDropContext,
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
    Droppable,
    DropResult
} from "react-beautiful-dnd";
import EmptyDrag from "./EmptyDrag";
import Switcher from "./Components/Switcher";
import Display from "./Components/Calculator/Display";
import Result from "./Components/Calculator/Result";
import Keyboard from "./Components/Calculator/Keyboard";
import Operations from "./Components/Calculator/Operations";


const App:React.FC = () => {


    const {process} = useAppSelector(state => state.calculator)

    type bricksType = {
        id: string,
        items: itemType[]
    }

    type itemType = {
        id: string,
        path: string,
        order: number
    }

    const itemsInitial:itemType[] = [
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

    const bricksInitialState:bricksType[] = [
        {
            id: 'col-1',
            items: itemsInitial
        },
        {
            id: 'col-2',
            items: []
        }
    ]

    const [bricks, setBricks] = useState(bricksInitialState)

    function getStyle(style:any, snapshot:any) {
        if (!snapshot.isDropAnimating) {
            return style;
        }
        return {
            ...style,
            transitionDuration: `0.001s`,
        };
    }

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

        if (deletedItem === undefined) return

        if (results.draggableId === 'display') {
            newDestinationItems.splice(0, 0, deletedItem);
        } else {
            newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);
        }


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

    return (
        <div className="layout">
            <div className="container">
                <Switcher/>
                <div className="wrapper">
                    {process === 'con' ?
                        <DragDropContext onDragEnd={handleDragAndDrop}>
                            {bricks.map(brick => <Droppable droppableId={brick.id} type='brick' key={brick.id}>
                                {provided => (
                                    <div className={brick.id === 'col-1' ? 'constructor__wrapper' : 'drag__wrapper'} style={brick.items.length > 0 ? {justifyContent: 'start'} : undefined} {...provided.droppableProps} ref={provided.innerRef}>
                                        {brick.items.length > 0 ? brick.items.map((el, index) =>
                                            <Draggable draggableId={el.id} index={index} key={el.id}>
                                                {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onDoubleClick={brick.id === 'col-2' ? () => handleDoubleClick(el, index) : undefined}   style={getStyle(provided.draggableProps.style, snapshot)}>
                                                        <img className='brick__img' src={require(`./Components/Bricks/${el.path}`)} alt={`${el.id}`}/>
                                                    </div>
                                                )}
                                            </Draggable>) : brick.id === 'col-2' ? <EmptyDrag/> : null
                                        }
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>)}
                        </DragDropContext>
                        :
                        <>
                            <div className='drag__wrapper' style={{justifyContent: 'start', gap: '16px'}}>
                                {bricks[1].items.map(item => {
                                    switch (item.id) {
                                        case 'display':
                                            return <Display key={item.id}/>
                                        case 'operations':
                                            return <Operations key={item.id}/>
                                        case 'keyboard':
                                            return <Keyboard key={item.id}/>
                                        case 'result':
                                            return <Result key={item.id}/>
                                        default:
                                            return null
                                    }
                                })}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default App;
