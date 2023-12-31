import { useState } from 'react'
import user from '../../assets/images/user.svg'
import ae86 from '../../assets/images/ae86.jpg'

function SignIn() {

  const [showSignin, setShowSignin] = useState(true)

  return (
    <div 
    id="signin-wrapper"
    className={`
    inset-0
    z-50
    fixed
    transition
    duration-500
    ${showSignin ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <div className="
      w-full
      h-full
      bg-neutral-800/30
      flex
      items-center
      justify-center
      ">
        <div 
        id='signin-content'
        className="
        flex
        flex-col
        items-center
        ">

          <div 
          id='signin-avatar'
          className="
          rounded-full
          bg-neutral-100/50
          w-[160px]
          h-[160px]
          md:w-[250px]
          md:h-[250px]
          flex
          items-center
          justify-center
          border-neutral-500
          border-2
          ">
            <img src={ae86} alt="User" className='w-full h-full rounded-full'/>
          </div>

          <h1 className='text-white mt-6 text-2xl md:text-4xl signin-animated'>Mihajlo Čabraja's Portfolio</h1>

          <button className='
          signin-animated
          text-white
          mt-5
          px-8
          py-2
          border-neutral-100
          border-2
          bg-neutral-100/30
          hover:bg-neutral-100/10
          transition
          text-md
          '
          onClick={() => setShowSignin(false)}>
            Sign in
          </button>
          <small className='mt-4 signin-animated-delay text-neutral-300'>Hint: For best experience, view this website on desktop</small>

        </div>
      </div>
    </div>
  )
}

export default SignIn