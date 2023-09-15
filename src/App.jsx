import './App.css'
import NavBar from './components/NavBar'
import Card from './components/Card'
import Welcome from './components/Welcome'
import { State } from './components/State'
import { CountBtn } from './components/CountBtn'
import { Effect } from './components/Effect'

function App() {
  const data = [

    { "id": 1,
      "description": "Software Engineer with a passion for building scalable web applications.",
      "position": "Software Engineer",
      "company": "TechCorp",
      "name": "Alice Johnson",
      "image": "https://example.com/alice.jpg"
    },
    {
      "id": 2,
      "description": "Marketing Specialist with expertise in digital marketing strategies.",
      "position": "Marketing Specialist",
      "company": "Marketing Pro",
      "name": "Bob Smith",
      "image": "https://example.com/bob.jpg"
    },
    {
      "id":3,
      "description": "Experienced Project Manager skilled in leading cross-functional teams.",
      "position": "Project Manager",
      "company": "Project Solutions Inc.",
      "name": "Carol Davis",
      "image": "https://example.com/carol.jpg"
    },
    {
      "id": 4,
      "description": "Creative Graphic Designer known for delivering stunning visuals.",
      "position": "Graphic Designer",
      "company": "DesignMasters",
      "name": "David Brown",
      "image": "https://example.com/david.jpg"
    }
  ]

  const hey = () => { alert('you clicked me')}
  const text = "Welcome to GomyCode"
  return (
    <div className='bg-[red] h-screen'>
      <NavBar />
      <Welcome alert = {hey} message = {text} />
      <div className='flex flex-row gap-4'>
        {
          data.map((item) => (
            <Card 
              key={item.id} 
              description={item.description} 
              position={item.position} 
              company={item.company} 
              name={item.name} 
              image={item.image}
            />
          ))
        }
      </div>
      <State />
      <CountBtn />
      <Effect />
    </div>
  )
}

export default App
