import { useForm } from "../contexts/FormContext";
import Form from "./Form";
import Table from "./Table";


function AppLayout() {
  const {currenTripOption} = useForm();
  
  return (
      <div className="w-100 p-16 flex flex-col justify-start items-center gap-4">
        <h1 className="text-4xl">Flights</h1>
        <div>
          <Form/>
          <Table />
          {currenTripOption === "Round trip" && <Table type={currenTripOption}/>}
        </div>
      </div>
    
    
  );
}

export default AppLayout;
