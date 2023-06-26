import Henrique from '../assets/henrique.png';
import Gear from '../assets/gear.svg';
import Github from '../assets/github.svg';
import Linkedin from '../assets/linkedin.svg';
import Whatsapp from '../assets/whatsapp.svg';

function Hero() {
  return (
    <div className="border items-center justify-center w-full">
      <p className="flex flex-col items-center justify-center pt-40 ">
        <img
          src={Henrique}
          alt="Henrique"
          className=" h-[200px] w-[200px] rounded-full border border-palette-tertiary border-2 shadow-2xl shadow-inner border-b-black bg-gradient-to-b"
        />
        <h1 className="inline-block bg-gradient-to-r from-palette-quaternary via-orange-200 to-palette-quinary bg-clip-text text-4xl font-bold text-transparent">
          Henrique Alexandre de Camargo
        </h1>
        <h2 className="text-2xl font-bold  font-extralight text-palette-quaternary">
          {' '}
          <span className="text-palette-quinary">
            <img className="inline-block w-[6.6%]" src={Gear} alt="" /> Back-End
          </span>{' '}
          Developer
        </h2>
      </p>
      <p className="mr-64 mt-4 flex items-center justify-center">
        <a className='mr-10' href="https://linkedin.com/in/henalecam" target='_blank' rel='noreferrer'>
        <img className="w-10 border border-palette-secondary shadow-xl hover:border-2 rounded-full" src={Linkedin} alt="" />
        </a>
        <a className='mr-10' href="https://github.com/henalecam" target='_blank' rel='noreferrer'>
        <img className="w-10 border border-palette-secondary shadow-xl hover:border-2 rounded-full" src={Github} alt="" />
        </a>
        <a href="https://wa.me/+5542998188268" target='_blank' rel='noreferrer'>
        <img className="w-10 border border-palette-secondary shadow-xl hover:border-2 rounded-full" src={Whatsapp} alt="" />
        </a>
      </p>
    </div>
  );
}

export default Hero;
