import ListHeader from './components/ListHeader';

const App = () => {

  const getData = () => {
    try {

    } catch (err) {
      console.error(err)
    }
  }


  return (
    <div className="app">
     <ListHeader listName={'🌴 Holiday tick list'}/>     
    </div>
  )
}

export default App