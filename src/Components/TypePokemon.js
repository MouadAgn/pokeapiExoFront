import "../style/TypePoke.css"

function TypePokemon(props) {
    let types = props.types
    console.log(types[0])
    return (
      <>
       {types.map((type) => (
        <>
        <p className={type.type.name}>Type: {type.type.name}</p>
      </>
       ))}
       </>
    );
  }

  export default TypePokemon;