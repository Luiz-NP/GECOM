/*========== FIREBASE IMPORTS ==========*/
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const getTasks = async (
  setTasks,
  setPendingTasks,
  setCompletedTasks,
) => {
  const {uid} = auth().currentUser;

  const tasksRef = firestore().collection('users').doc(uid).collection('Tasks');
  const tasksData = (await tasksRef.get()).docs.map(task => task.data());

  // all tasks
  setTasks(tasksData);

  // pending tasks
  const tasksPending =
    tasksData?.filter(task => task.status === 'pending') || null;
  setPendingTasks(tasksPending);

  // completed tasks
  const tasksCompleted =
    tasksData?.filter(task => task.status === 'completed') || null;
  setCompletedTasks(tasksCompleted);
};
