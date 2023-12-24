import { useState } from "react";
import Form from "./Form";
import Table from "./Table";


function AppLayout() {


  return (
      <div className="w-100 p-16 flex flex-col justify-start items-center gap-4">
        <h1 className="text-4xl">Flights</h1>
        <div>
          <Form/>
          <Table />
        </div>
      </div>
    
    
  );
}

export default AppLayout;
