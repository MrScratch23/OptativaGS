import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [contador, setContador] = useState(0);

  // funcion para agregar las tareas
  const addTask = () => {
    // si no se ha introducido nada, return
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now().toString(), title: task }]);
    // hay que volver a ponerlo en blanco para introducir nuevas
    setTask('');
  };
  // busco la tarea por ID en caso de que se quiera borrar usando un filter
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  // aqui simplemente las cuento
  const totalTasks = tasks.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Lista de tareas</Text>
      
      {/* he puesto el contoador arriba del todo primero */}
      <View style={styles.manualCounterContainer}>
        <Text style={styles.counterLabel}>Contador manual:</Text>
        <View style={styles.counterControls}>
          <TouchableOpacity 
            style={styles.counterButton}
            onPress={() => setContador(contador - 1)}
          >
            <Text style={styles.counterButtonText}>-</Text>
          </TouchableOpacity>
          
          <Text style={styles.counterValue}>{contador}</Text>
          
          <TouchableOpacity 
            style={styles.counterButton}
            onPress={() => setContador(contador + 1)}
          >
            <Text style={styles.counterButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* y aqui el contador de tareas */}
      <View style={styles.taskCounterContainer}>
        <Text style={styles.taskCounterText}>
          {/* terniario por si hay mas de una tarea, es una tonteria pero que al menos ponga tareas en vez de tarea para que no de toc */}
          Tareas: {totalTasks} {totalTasks === 1 ? 'tarea' : 'tareas'}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe una nueva tarea..."
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity 
              style={styles.taskContent}
              onPress={() => deleteTask(item.id)}
              activeOpacity={0.7}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.deleteIcon}
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.deleteIconText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>📝</Text>
            <Text style={styles.emptyText}>No hay tareas</Text>
            <Text style={styles.emptySubtext}>¡Añade tu primera tarea!</Text>
          </View>
        }
      />
    </View>
  );
}

// un poco de css para los emojis y en general
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f0f8ff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  manualCounterContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#3498db',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  counterLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 10,
    fontWeight: '500',
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  counterButton: {
    backgroundColor: '#3498db',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  counterButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 35,
  },
  counterValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2c3e50',
    minWidth: 60,
    textAlign: 'center',
  },
  taskCounterContainer: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 25,
    marginBottom: 20,
    alignSelf: 'center',
    minWidth: 120,
    alignItems: 'center',
  },
  taskCounterText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#3498db',
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
    color: '#2c3e50',
  },
  addButton: {
    backgroundColor: '#3498db',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  list: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  taskContent: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    color: '#2c3e50',
    paddingRight: 10,
  },
  deleteIcon: {
    padding: 8,
  },
  deleteIconText: {
    fontSize: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 40,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#dfe6e9',
    borderStyle: 'dashed',
  },
  emptyEmoji: {
    fontSize: 50,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 20,
    color: '#7f8c8d',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
  },
});