
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

const App=()=>{
  return(
    <div className='w-full  bg-gray-200'>

    <div className='flex flex-col w-[90vw] mx-auto  h-[100vh] justify-center items-center '>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-1/5 mx-auto  mt-1'></div>
        <Testimonial reviews={reviews}/>
      </div>

    </div>
    </div>
    
  )
}

export default App;
