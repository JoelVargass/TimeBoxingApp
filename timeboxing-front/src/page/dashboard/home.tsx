import TaskList from '../task/TaskList';
import AddTaskForm from '../task/AddTaskForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-5xl w-full p-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl text-center text-red-400 font-bold mb-8">TimeBoxing</h1>
        <div className="flex">
          <TaskList />
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
