import { useRef } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson, createPerson } from "../store/features/personSlice";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name.current);
    dispatch(createPerson(name.current));
  };
  return (
    <form>
      <label htmlFor="" className="border rounded-md shadonw-md p-2">
        Person Name
      </label>
      <input
        type="text"
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (name.current = e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-violet-500 text-whte rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </form>
  );
};

export default Add;
