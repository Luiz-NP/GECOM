<ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={styles.tasks}>
  {tasksFiltered?.map(task => {
    return <TaskHome key={task.id} data={task} navigate={navigate} />;
  })}
  <View
    style={
      tasksFiltered?.length === 0 && loading === true
        ? styles.notFoundTask
        : styles.notFoundTaskHidden
    }>
    <LottieView
      style={{width: '100%'}}
      source={require('../assets/img/not_found.json')}
      autoPlay
      loop
    />
    <Text style={styles.notFoundTaskText}>Procurando suas tarefas...</Text>
  </View>
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={() => {
      const taskID = tasks?.length ?? 0;
      navigate('AddNewTask', {taskID: taskID + 1});

      // set button selected to 0
      setTimeout(() => setButtonSelected(0), 1000);
    }}
    style={[
      buttonSelected === 1 || buttonSelected === 2
        ? styles.buttonHidden
        : styles.addTaskButton,
      loading === true ? styles.buttonHidden : null,
    ]}>
    <Svg
      width={32}
      height={32}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.883 3.007L12 3a1 1 0 01.993.883L13 4v7h7a1 1 0 01.993.883L21 12a1 1 0 01-.883.993L20 13h-7v7a1 1 0 01-.883.993L12 21a1 1 0 01-.993-.883L11 20v-7H4a1 1 0 01-.993-.883L3 12a1 1 0 01.883-.993L4 11h7V4a1 1 0 01.883-.993L12 3l-.117.007z"
        fill="#00c4ac"
      />
    </Svg>
  </TouchableOpacity>
</ScrollView>;
