export const BundledCheatsheet {

const ModalBackground = styled.div`
top:0;
left: 0;
top: 0;
overflow: auto;
position: fixed;
z-index: 1;
`;

const [shouldShow, setShouldShow] = useState(false);


return (
<>
<button onClick={() => setShouldShow(true)> Show Modal </button>
{shouldShow && (
<ModalBackground>
<ModalBody onClick=(e => e.stopPropagation()}>
<button onClick={() => setShouldShow(false)}>Hide Modal</button>
{children}
</ModalBody>
</ModalBackground>
</>
)

}


export const CurrentUserLoader = ({ children }) => {
 
  const [user, setUser] = useState(null);
  
  useEffect(() => {
   (async () => {
     const response = await axios.get('/currentUser');
     setUser(reponse.data);
  })();
}, []);
}


return (
<>
  {React.Children.map(children, child => {
   if (React.isValidElement(child)) {
      return React.closeElement(child, {user});
}

 return child;
})}
  </>)
                  


const isObject = x => typeof x === 'object' && x !== null;

export const RecursiveComponent = ({ data  }) => {
 if (!isObject(data)) {
   return (
   <li>{data}</li>

     );
 }
                               
const pairs = Object.entries(data);
  
  
  return (
    {pairs.map(([key, value]) => (
  <li>
    {key):
     <ul>
     <RecursiveComponent data={value/>
     </ul>
     </li>

