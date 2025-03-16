import Button from './components/Button/Button.jsx'
// import StaticComponent from './components/StaticComponent/StaticComponent.jsx'
// import UserList from './components/UserList/UserList.jsx'
// import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading.jsx'
import SearchPosts from './components/SearchPosts/SearchPosts.jsx'
import CounterWithEffect from './components/CounterWithEffect.jsx'
import NameForm from './components/NameForm.jsx'

function App() {
  return (
    <section className="min-h-screen bg-gray-50 p-8 flex flex-col md:flex-row gap-6 items-start justify-center">
      <div className="space-y-6 max-w-md w-full">
        <NameForm className="bg-white p-6 rounded-xl shadow-sm" />
        
        <div className="bg-white p-6 rounded-xl shadow-sm grid gap-4">
          <CounterWithEffect />

          <SearchPosts/>
          
          <div className="flex gap-3 justify-end">
            <Button variant="blue" className="px-5 py-2 text-sm">
              Guardar
            </Button>
            <Button variant="outline" className="px-5 py-2 text-sm">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App