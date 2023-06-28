import InputField from "./InputField";

const Lecturers = () => {
  const lecturers = [
    { id: 1, firstName: "Loor", lastName: "Jacobson", department: "Networks" },
    {
      id: 2,
      firstName: "Peter",
      lastName: "Sekitoleko",
      department: "Computer Science",
    },
    { id: 3, firstName: "John", lastName: "Doe", department: "Networks" },
    {
      id: 4,
      firstName: "Travis",
      lastName: "Hamz",
      department: "Computer Science",
    },
    {
      id: 5,
      firstName: "Jaden",
      lastName: "Sendi",
      department: "Computer Science",
    },
    {
      id: 6,
      firstName: "James",
      lastName: "Doe",
      department: "Information Systems",
    },
    {
      id: 7,
      firstName: "Tevares",
      lastName: "Nono",
      department: "Information Systems",
    },
  ];
  return (
    <div className="card p-3 bg-white ml-3 rounded-lg ">
      <p className="text-xl font-semibold">Course unit</p>
      <InputField
        type="search"
        name="courseunitSearch"
        placeholder="Search for lecturer here.."
        classes="mb-4"
      />
      <div>
        {lecturers.map((lecturer) => (
          <p key={lecturer.id} className="flex items-center">
            <input
              type="checkbox"
              className="mr-3"
              name="lecturers"
              value={`${lecturer.firstName} ${lecturer.lastName}`}
            />
            {lecturer.firstName} {lecturer.lastName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Lecturers;
