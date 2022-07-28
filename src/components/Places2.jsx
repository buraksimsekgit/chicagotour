// import logo from './logo.svg'

function Places2(props) {
  const { name, image, address } = props;
  return (
    <div>
      <img src={`./public/images/${image}`}     
        height="300"
        alt="Buckingham Fountain is a Chicago Landmark"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default Places2;