// import { useState } from "react";
import {
  //Modal,
  //TextInput,
  //NumberInput,
  //Select,
  Button,
  //Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  // const [name, setName] = useState<string>("");
  // const [amount, setAmount] = useState<string | number>(0);
  // const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  // let val_number: number = Number("500.0");
  // console.log(val_number + 100); // 600.0

  return (
    <>
      <div
        className="modal fade"
        id="modalregister"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="modalsubmitLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Expense</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="btn btn-success"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </>
  );
}
