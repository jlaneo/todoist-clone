import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import TaskList from '../components/TaskList'

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <TaskList />
      </div>
    </div>
  )
}