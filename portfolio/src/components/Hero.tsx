import Henrique from '../assets/henrique.png'

function Hero() {
  return (
    <div>
      <div className='flex flex-col  items-center justify-center h-[500px]'>
        <img src={Henrique} alt="Henrique" className=' bg-gradient-to-tr from-cyan-700 via-gray-700 to-transparent w-[200px] h-[200px] rounded-full' />
        <h1 className='text-4xl font-bold bg-gradient-to-r from-teal-700 via-cyan-700 to-sky-700 inline-block text-transparent bg-clip-text'>Henrique Alexandre de Camargo</h1>
        <h2 className='text-2xl font-bold text-cyan-500'><span className='text-sky-700'>Back-End</span> Developer</h2>
      </div>
    </div>
  )
}

export default Hero