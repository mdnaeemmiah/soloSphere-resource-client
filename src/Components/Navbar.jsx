import { useContext } from 'react'
import logo from '../assets/logo.png'
import { AuthContext } from '../Provider/AuthProvider'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const { user ,logOut} = useContext(AuthContext)

    const handleLogOut = ()=>{
        logOut()
    }

    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <span className='font-bold'>SoloSphere</span>
                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    {!user && (
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>)
                    }
                </ul>

                {user && (<div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div title={user?.displayName} className='w-10 rounded-full' title=''>
                            <img
                                referrerPolicy='no-referrer'
                                alt='User Profile Photo'
                                src={user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                        <li>
                            <Link to='/add-job' className='justify-between'>Add Job</Link>
                        </li>
                        <li>
                            <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                        </li>
                        <li>
                            <Link to='/my-bids'>My Bids</Link>
                        </li>
                        <li>
                            <Link to='/bid-request'>Bid Requests</Link>
                        </li>
                        <li className='mt-2'>
                            {
                                user ? <button onClick={()=>handleLogOut()} className='bg-gray-200 block text-center'>Logout</button>:
                                <button to='/' className='bg-gray-200 block text-center'>login</button>
                            }
                        </li>
                    </ul>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar