type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};
const Person = (props: PersonProps) => {
  return <div>{props.name.firstName} </div>;
};

export default Person;
