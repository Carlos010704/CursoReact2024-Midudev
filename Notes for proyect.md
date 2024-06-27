```jsx
// Forma de pasar informacion como una prop -> 
    const formatUserName = (userName) => `@${userName}`;
    <TwitterFollowCard propName={formatUserName} userName="dimontemx" name="Mauricio Di Monte" isFollowing={true} />

// Se pueden pasar arrays
		<TwitterFollowCard numbers={[1, 2, 3]} userName="dimontemx" name="Mauricio Di Monte" isFollowing={true} />

// Se puede pasar informacion en la prop o como hijo de ese componente: 
    <TwitterFollowCard userName="dimontemx" name="Mauricio Di Monte" isFollowing={true} /> <-- En la prop
    <TwitterFollowCard userName="midudev" isFollowing={false}> Miguel Ángel Durán </TwitterFollowCard> <-- Como hijo

// Las props se pueden nombrar en la misma linea del componente o crearlas en un tipo objeto -- Recomendable en la misma linea del componente.
    // Props tipo objeto: 
       const midudev = { isFollowing: true, userName: 'midudev' };
       const isabel = { isFollowing: false, userName: 'isabelduquee' };
       
       <TwitterFollowCard {...midudev}> Miguel Ángel Durán </TwitterFollowCard> <-- Se concadenan asi.

// Tambien se le puede pasar variable inicial.
<TwitterFollowCard userName='midudev' initialFollowing={true}> Miguel Ángel Durán </TwitterFollowCard>
 <TwitterFollowCard userName='isabelduquee' initialFollowing={false}> Isabel Duque </TwitterFollowCard>
```

```jsx
// Al pasar el parametro Children, obtenemos lo que se redenderiza dentro de la función.

// Agregar un valor por defecto a una props -> userName = 'unknown';

const addAt = (userName) => `@${userName}`; <-- Para dar algo de formato a un valor/ Modificar el valor de manera diferentes
const formatedElement = <span>@user01</span>;

// Para el uso de useState hay dos manera -->

// Manera larga 3 variables = Su manera corta 1 linea;
const state = useState(false);       --- >
const isFollowing = state[0];        ---  > const [ isFollowing, setIsFollowing ] = useState(false);    
const setIsFollowing = state[1];     --- >

//  isFollowing --> Valor actual..
//  setIsFollowing --> Actualizador de ese valor..
```

```jsx
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) window.addEventListener('pointermove', handleMove)

    // Elimina el evento que se agrego antes de volver a validar ==> cleanup
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enable])

  // [] => Solo se ejecuta al montar el componente.
  // [enabled] => se ejecuta cuando cambia enabled y cuando se monta el componente.
  // undefined => se ejecuta cada ves que se renderiza el componente.
```
