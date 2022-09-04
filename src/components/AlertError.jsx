const AlertError = ({children}) => {
  return (
    <div role="alert">
    <div className="bg-red-600 text-white text-center font-bold uppercase rounded-md px-4 py-2 mt-5">
        {children}
    </div>
    
  </div>
  )
}

export default AlertError