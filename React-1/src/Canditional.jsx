

const Header = () => {
    const isLogedin=true;
  return (
    <div>
      {
        isLogedin ? <button>Dashboard</button> : <button>Login</button>
      }
      {
         isLogedin ? <> <button>Dashboard</button> <button>User</button> </>: <button>Login</button>
      } 
      {/* && || */}
      {
        // isLogedin && <h1>Hello</h1>
        isLogedin || <h1>Hello</h1>
      }
    </div>
  )
}

export default Header
//Ternery operator => ? :