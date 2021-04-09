import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    let todoLists = props.todolists;
    let remainingList = todoLists.filter((itemInTheList) => itemInTheList.id != props.activeid)
    let selectedList = todoLists.filter((itemInTheList) => itemInTheList.id == props.activeid)
    // let selectedList = selectedListArray[0];
    if (selectedList == undefined) {
        selectedList = [];
    }
    remainingList = selectedList.concat(remainingList);
    return (
        <>
            {
                remainingList &&
                remainingList.map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
                ))
            }
        </>
    );
};

export default SidebarList;