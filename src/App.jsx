import { Suspense, useState } from "react";
import "./App.css";
import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Progress from "./component/Progress/Progress";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const fetchTicket = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const ticketPromise = fetchTicket();
  const [inProgress, setInProgress] = useState([]);
  const handleCard = (ticket) => {
    const isExist=inProgress.find((item)=>item.id == ticket.id)
    if(isExist)
      {toast.error("This item is already being processed")
        return;
      }
    const progressItem = [...inProgress, ticket];
    setInProgress(progressItem);
    toast.success("Ticket added successfully")
  };
  const [resolve, setResolve] = useState([]);
  const handleComplete = (ticket) => {
    toast.success("Completed Item")
    const resolveItem = [...resolve, ticket];
    setResolve(resolveItem);
    const remainingProgress = inProgress.filter(
      (item) => item.id !== ticket.id
    );
    setInProgress(remainingProgress);
    const remainingTickets = tickets.filter((item) => item.id !== ticket.id);
    setTickets(remainingTickets);
  };
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    ticketPromise.then((data) => {
      setTickets(data);
    });
  }, []);

  return (
    <>
      {/* nav section  */}
      <Navbar></Navbar>

      {/* divider section  */}
      <div className="m-20">
        <Progress
          resolve={resolve.length}
          inProgress={inProgress.length}
        ></Progress>
      </div>

      {/* card section  */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center p-4 m-20">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Card
          tickets={tickets}
          resolve={resolve}
          handleComplete={handleComplete}
          inProgress={inProgress}
          handleCard={handleCard}
          ticketPromise={ticketPromise}
        ></Card>
      </Suspense>

      {/* footer section  */}

      <Footer></Footer>
      <ToastContainer autoClose={3000}></ToastContainer>
    </>
  );
}

export default App;
