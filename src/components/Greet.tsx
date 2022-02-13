type GreetProps = {
  name: string;
  count: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name},You have counted {props.count} times
        </h1>
      ) : (
        <h1>Hello Guest</h1>
      )}
    </div>
  );
};
