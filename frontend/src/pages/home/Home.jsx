import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/Sidebar/Sidebar"



const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] h-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-100">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home