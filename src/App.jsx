import './App.css'

function App() {
  

  return (
    <>
    <h1>Aula Boostrap</h1>
    <div className='row'>
      <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
      <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
      <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
      <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
    </div>
    <div className="text-primary container border border-dark">Container</div>
    <div className="text-secondary container-sm border border-dark">Container</div>
    <div className="text-success container-md border border-dark">Container</div>
    <div className="text-danger container-lg border border-dark">Container</div>
    <div className=" bg-primary container-xl border border-dark">Container</div>
    <div className="container-xxl border border-dark">Container</div>
    <div className="container-fluid border border-dark">
      <p className='my-5 pt-5 border border-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quam ex alias iste accusantium modi! Natus corrupti velit deserunt commodi.</p>
    </div>
    <br></br>
    <button className='btn btn-primary'>Clique aqui</button>
    <button className='btn btn-success'>Clique aqui</button>
    <button className='btn btn-danger'>Clique aqui</button>
    <button className='btn btn-warning'>Clique aqui</button>
    <button className='btn btn-info'>Clique aqui</button>
    <button className='btn btn-light'>Clique aqui</button>
    <button className='btn btn-dark'>Clique aqui</button>
    <button className='btn btn-link'>Clique aqui</button>
    <br />
    <button className='btn btn-outline-primary'>Clique aqui</button>
    <button className='btn btn-outline-success'>Clique aqui</button>
    <button className='btn btn-outline-danger'>Clique aqui</button>
    <button className='btn btn-outline-warning'>Clique aqui</button>
    <button className='btn btn-outline-info'>Clique aqui</button>
    <button className='btn btn-outline-light'>Clique aqui</button>
    <button className='btn btn-outline-dark'>Clique aqui</button>
    <button className='btn btn-outline-link'>Clique aqui</button>
    <br />
    <br />
    <br />
    <table className='table'>
      <thead>
        <th>Nome</th>
        <th>Endereço</th>
        <th>Telefone</th>
      </thead>
      <tbody>
        <tr className='table-primary'>
          <td>Eric</td>
          <td>Rua Camilo, 182</td>
          <td>05045-020</td>
        </tr>
        <tr>
          <td>Rodney</td>
          <td>Rua Camilo, 182</td>
          <td>05045-020</td>
        </tr>
        <tr>
          <td>Mathew</td>
          <td>Rua Camilo, 182</td>
          <td>05045-020</td>
        </tr>
        
      </tbody>
    </table>
    </>
  )
}

export default App
