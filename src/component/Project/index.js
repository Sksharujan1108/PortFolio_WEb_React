import E_commerceWebSite from '../../assets/ecommerce-websites.jpg'
import Home from '../../assets/home.jpeg'
import cart from '../../assets/cart.jpeg'
import description from '../../assets/description.jpeg'
import Login from '../../assets/login.png'
import Menu from '../../assets/menu.png'


export default function Project() {

    const config = {
        projects: [
            {
                image: Home,
                description: 'Coffee-Shop. Built with React_Native',
                link: 'https://github.com/Sksharujan1108/Coffee_Shop_App_React-Native',
            },
            {
                image: Login,
                description: 'Log_In Page. Built with Flutter and Dart',
                link: 'https://github.com/Sksharujan1108/Flutter_App_LogIn',
            },
            {
                image: cart,
                description: 'Coffee-Shop_CartScreen. Built with React_Native',
                link: 'https://github.com/Sksharujan1108/Coffee_Shop_App_React-Native',
            },
            {
                image: Menu,
                description: 'E-commerce_HomeScreen. Built with React_Native',
                link: 'https://github.com/Sksharujan1108/E-Commerces_Mobile_App',
            }
        ]
    }

    return (
        <section id = "project" className = "flex flex-col px-5 py-20 justify-center bg-project text-white" >
            <div className = "w-full">
                <div className = "flex flex-col px-10 ">
                   <h1 className = "text-4xl text-white border-b-4 border-primary1 mb-4 w-[135px] font-bold"> Projects </h1>
                   <p > These are some of my project. I have built these with React Native, Flutter and Dart.</p>
                </div>
            </div>

            <div className = "w-full mt-10">
                {/* <img src = {E_commerceWebSite}/> */}
                <div className = 'flex flex-col md:flex-row px-10 gap-10'>

                    {config.projects.map((item) => ( 
                        <a href = {item.link}>
                            <div className = 'relative'>
                               <img className = 'h-[500px] w-[300px]' src = {item.image}/>

                                <div className = 'project-desc'>
                                  <p className = 'text-center px-5 py-10'> {item.description} </p>
                                  <div className = 'flex justify-center py-20'>
                                     <a className = 'btn' target = '_blank' href = {item.link}> View Project </a>
                                  </div>
                                </div>
                                
                            </div>
                        </a>
                    ))}
                    
                   {/* <div className = 'relative'>
                        <img className = 'h-[500px] w-[300px]' src = {Login}/>

                        <div className = 'project-desc'>
                           <p className = 'text-center px-5 py-10'> </p>
                        </div>
                   </div> */}

                    {/* <div className = 'relative'>
                        <img className = 'h-[500px] w-[300px]' src = {cart}/>

                        <div className = 'project-desc'>
                            <p className = 'text-center px-5 py-10'> </p>
                        </div>
                    </div> */}

                    {/* <div className = 'relative'>
                        <img className = 'h-[500px] w-[300px]' src = {Menu}/>

                        <div className = 'project-desc'>
                            <p className = 'text-center px-5 py-10'>  </p>
                        </div>
                    </div> */}


                </div>
            </div>
        </section>
    )
}