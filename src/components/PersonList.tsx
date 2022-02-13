type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((person) => (
        <h1>
          {person.first} 😁 {person.last}
        </h1>
      ))}
      <h1>Clark Kent</h1>
      <h1>Princess Diana</h1>
    </div>
  );
}

export default PersonList;
