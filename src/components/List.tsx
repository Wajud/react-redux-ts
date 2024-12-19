import { useAppSelector } from "../store/store";

const List = () => {
  const persons = useAppSelector((state) => state.person.persons);
  return (
    <div>
      <p>This is List component</p>
      <table className="rounded-md">
        <thead>
          <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white">
            <th>ID:</th>
            <th>Name:</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id} className="even:bg-slate-50">
              <td className="p-2">{person.id}</td>
              <td className="p-2">{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
