import Link from 'next/link'
import Image from 'next/image'
import { sidebarRoute } from './navigation/VerticalNavigation'


const LeftSidebar = () => {
    return (
        <section className='left_sidebar'>
            <nav className='flex flex-col gap-6'>
                <Link href='/' className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                    <Image src='/icons/logo.svg' alt='Logo' width={23} height={27} />
                    <h1 className='text-24 font-extrabold text-white max-lg:hidden'>Podcastr</h1>
                </Link>
                {sidebarRoute.map(({ route, label, imgURL }) => {
                    return (
                        <Link key={route} href={route} className='flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                            <Image src={imgURL} alt='Logo' width={23} height={27} />
                            <h1 className='text-24 font-extrabold text-white max-lg:hidden'>{label}</h1>
                        </Link>)
                })}
            </nav>
        </section>
    )
}

export default LeftSidebar
