 const useCurrentPage = () => {
  const page = window.location.pathname
  
  return {
    isCurrentPage: (path: string) => page === path
  }
}

export default useCurrentPage