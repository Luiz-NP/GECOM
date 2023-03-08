export const addTask = (navigate, setButtonSelected) => {
    navigate('AddNewTask');

    // set button selected to 0
    setTimeout(() => setButtonSelected(0), 1000);
}