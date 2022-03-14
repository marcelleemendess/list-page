import './App.css';
import { useEffect, useState} from 'react'
import Pagination from './components/Pagination';

function App() {

  const [ itens, setItens] = useEffect([]);
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => data)
      console.log(result)

      setItens(result)
    }
    fetchData() 
  }, [])


  return (
    <div className="App">
      {currentItens?.map(item => {
        return <div className="item"><span>{item.id}</span><span>{item.title}</span><spa>{item.completed}</spa></div>
      })}
      <Pagination pages={pages} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
