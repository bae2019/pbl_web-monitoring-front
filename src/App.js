import './App.css';
import Data1 from './components/Data1'

const factory = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '공장1',
    'process1' : '000125',
    'process2' : '111206',
    'process3' : '012789',
    'pass' : 'True'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '공장2',
    'process1' : '005168',
    'process2' : '111249',
    'process3' : '012000',
    'pass' : 'True'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '공장3',
    'process1' : '000000',
    'process2' : '100000',
    'process3' : '000022',
    'pass' : 'False'
  }  
]

function App() {
  return (
    <div className="white-background">
      <h2>휴스타</h2>
      <p>휴스타</p>
      {
        factory.map(c =>{
          return (
          <Data1
          key = {c.id}
          id = {c.id}
          image = {c.image}
          name = {c.name}
          process1 = {c.process1}
          process2 = {c.process2}
          process3 = {c.process3}
          pass = {c.pass}
          />)
        })
      }
      
    </div>
  );
}

export default App;
