import './LoadingSpinner.scss'

const Loder = () => {
  return (
    <div className="loader-center">
      <div
        role="status"
        className="spinner-grow text-primary"
      >
        <span className="sr-only">
          Loading...
        </span>
      </div>
    </div>
  )
}

export default Loder
