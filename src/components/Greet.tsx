type GreetProps = {
  name: string;
  count?: number; //count may or may not exist in passed props
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { count = 0 } = props; // if no count in props,gives it a default value
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name},You have counted {count} times
        </h1>
      ) : (
        <h1>Hello Guest</h1>
      )}
    </div>
  );
};
