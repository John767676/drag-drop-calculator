import React, {useState} from 'react';
import './Components/Styles/constructor-styles.css'
import './Components/Styles/drag_styles.css'
import {useAppSelector} from "./hooks/useAppSelector";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";
import BrickImage from "./Components/Bricks/BrickImage";

const App:React.FC = () => {

    // const dispatch = useAppDispatch()
    //
    // const {dropList} = useAppSelector(state => state.drag)

    type bricksType = {
        id: string,
        items: itemType[]
    }

    type itemType = {
        id: string,
        path: string,
        order: number
    }

    const bricks:bricksType[] = [
        {
            id: 'col-1',
            items: [
                {
                    id: 'display',
                    path: './Group8.png',
                    order: 1,
                },
                {
                    id: 'operations',
                    path: './Group7.png',
                    order: 2,
                },
                {
                    id: 'keyboard',
                    path: './Group6.png',
                    order: 3,
                },
                {
                    id: 'result',
                    path: './Group5.png',
                    order: 4
                }
            ]
        },
        {
            id: 'col-2',
            items: []
        }

    ]

    const [items, setItems] = useState(bricks)

    const handleDragAndDrop = (results:DropResult) => {

        console.log(results);

        const { source, destination} = results;

        if (!destination) return;
        // если нет назначение то ничего не делаем

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;
        // так же ничего не делаем если индекс назначения равен индексу источника

        if (destination.droppableId === 'col-1') return;

        const itemSourceIndex = source.index;
        // индекс источника
        const itemDestinationIndex = destination.index;
        // индекс назначения

        const itemsSourceIndex = items.findIndex((item) => item.id === source.droppableId);
        // storeSourceIndex будет содержать индекс элемента в массиве items, у которого id равен source.droppableId.
        // storeDestinationIndex будет содержать индекс элемента в массиве items, у которого id равен destination.droppableId.

        const itemsDestinationIndex = items.findIndex((item) => item.id === destination.droppableId);
        // аналогично с destination

        const newSourceItems = [...items[itemsSourceIndex].items];
        const newDestinationItems = source.droppableId !== destination.droppableId ? [...items[itemsDestinationIndex].items] : newSourceItems;
        // newSourceItems и newDestinationItems создают копии массивов элементов из исходных списков.
        // Если source.droppableId и destination.droppableId разные, то newDestinationItems будет копией элементов из списка назначения.
        // В противном случае он будет копией элементов из исходного списка.

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        // С помощью splice из newSourceItems удаляется элемент с индексом itemSourceIndex.
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);
        // Затем этот удаленный элемент вставляется в newDestinationItems на позицию с индексом itemDestinationIndex.
        const newStores = [...items];
        // Создается новый массив newStores, который является копией исходного массива items.

        newStores[itemsSourceIndex] = {
            ...items[itemsSourceIndex],
            items: newSourceItems,
        };
        newStores[itemsDestinationIndex] = {
            ...items[itemsDestinationIndex],
            items: newDestinationItems,
        };
        // В newStores обновляются элементы с индексами storeSourceIndex и storeDestinationIndex.
        // Их свойство items обновляется соответствующими значениями newSourceItems и newDestinationItems.

        setItems(newStores);
    };

    return (
            <div className="wrapper">
                <DragDropContext onDragEnd={handleDragAndDrop}>
                        {bricks.map(brick => <Droppable
                            droppableId={brick.id}
                            type='brick'
                            key={brick.id}
                        >
                            {provided => (
                                <div className={brick.id === 'col-1' ? 'constructor__wrapper' : 'drag__wrapper'} {...provided.droppableProps} ref={provided.innerRef}>
                                    {brick.items.map((el, index) => <Draggable
                                        draggableId={el.id} index={index}
                                        key={el.id}
                                        isDragDisabled={brick.id === 'col-2' ? el.order === index : false}
                                    >
                                        {(provided) => (
                                            <div className='img__wrapper' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <BrickImage url={el.path} order={el.order} id={el.id}/>
                                            </div>
                                        )}
                                    </Draggable>)}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>)}
                </DragDropContext>
            </div>
    );
};

export default App;
            //     <div className='constructor__wrapper'>
            //         <div className="drag__wrapper">
            //             <p className="dra__img">
            //                     <img src={require('./Components/Bricks/Group.png')} alt="logo"/>
            //                 </p>
            //                     <div className="drag__text">
            //                         <h1 className="drag__title">
            //                             Перетащите сюда
            //                         </h1>
            //                         <p className="drag__text-p">
            //                             любой элемент <br/> из левой панели
            //                         </p>
            //                     </div>
            //         </div>
            //     </div>
