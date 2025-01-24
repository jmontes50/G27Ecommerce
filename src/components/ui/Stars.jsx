const Stars = ({ rating }) => {

  const totalMaxStars = 5;
  const arrCurrentStars = [...Array(totalMaxStars)]; //[undefined, undefined, undefined, undefined, undefined]

  return (
    // <i class="fa-solid fa-star"></i>
    <div className="flex items-center mb-4">
      {arrCurrentStars.map((item, index) => (
        <i 
          key={index}
          className={`text-yellow-400 ${index < rating ? "fa-solid" : "fa-regular"} fa-star`}
        />
      ))}
      <span className="text-slate-400 ms-1">{rating.toFixed(1)}</span>
    </div>
  )
}

export default Stars;