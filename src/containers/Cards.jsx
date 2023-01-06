import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import Card from '../components/Card'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card title='Single User' price='$149' storage='500 GB Storage' users='1 Granted User' email='Send up to 2 GB' image={Single}/>
        <Card title='Double User' price='$180' storage='500 GB Storage' users='2 Granted User' email='Send up to 2 GB' image={Double}/>
        <Card title='Triple User' price='$220' storage='500 GB Storage' users='3 Granted User' email='Send up to 2 GB' image={Triple}/>
      </div>
    </div>
  )
}

export default Cards