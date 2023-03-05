export const addTask = (tasks, navigate, setButtonSelected) => {
    const taskID = tasks?.length ?? 0;
    navigate('AddNewTask', { taskID: taskID + 1 });

    // set button selected to 0
    setTimeout(() => setButtonSelected(0), 1000);
}