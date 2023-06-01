export default (props) => {
  const random =
    parseInt(Math.random() * (props.end - props.init)) + props.init;
  return (
    <div>
      <p>Valor mínimo: {props.init}</p>
      <p>Valor máximo: {props.end}</p>
      <p>Valor sorteado: {random} </p>
    </div>
  );
};
