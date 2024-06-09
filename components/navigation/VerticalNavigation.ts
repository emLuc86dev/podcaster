type SidebarRoutesProps = {
    route: string,
    label: string,
    imgURL: string
}

export const sidebarRoute: SidebarRoutesProps[] = [
    {
        route: '/profile',
        label: 'Profile',
        imgURL: '/icons/microphone.svg'
    },
    {
        route: '/',
        label: 'Home',
        imgURL: '/icons/home.svg'
    },
]

