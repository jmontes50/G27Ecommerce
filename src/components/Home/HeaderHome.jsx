const HeaderHome = () => {
  return (
    <div className="relative">
      {/* si queremos tener contenido estáticop (jpg, mp4, etc) en la app lo ideal es ponerlo en public*/}
      <img src="headerpicture.avif" alt="headerphoto" />
      <div className="absolute flex flex-col gap-5 top-24 left-20">
        <span className="text-3xl">
          Classic Exclusive|
        </span>
        <h2 className="text-5xl font-bold">
          Women's Collection
        </h2>
        <span className="text-3xl">
          Up to 40% Off
        </span>
        <button className="w-36 btn btn-black">
          Shop now!!
        </button>
      </div>
    </div>
  )
}

export default HeaderHome