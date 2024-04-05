import AboutImg from '../../assets/about.png'
export default function About() {

  // dynamic .... 
  const config = {
    line1: `Hi, I'm Sk Sarujan, a mobile developer specializing in React Native. 
            I have a passion for crafting beautiful and functional mobile applications.`,

    line2: `With expertise in frontend technologies like React Native, 
            Redux, Redux Toolkit, Axios, and stylesheet, 
            I've built numerous engaging mobile apps.`,

    line3: `Besides mobile development, I also possess extensive knowledge in HTML, 
            CSS, Android Studio, JavaScript, TypeScript, Node.js, React.js, 
            Tailwind CSS, Java, Jenkins, Version Control, and MongoDB. Currently, 
            I'm expanding my skill set by delving into Flutter and Dart to 
            broaden my development capabilities even further.`
  };  

    return (
        <section id = 'about' className = 'flex flex-col md:flex-row bg-about px-5 py-10' >

            <div className = 'md:w-1/2 py-5'>
                <img src = {AboutImg}/>
            </div>

            <div className = 'md:w-1/2 flex justify-center '>

               <div className = 'flex flex-col justify-center text-white'>

                  <h1 className = 'text-4xl text-white border-b-2 border-primary mb-4 w-[105px] font-bold'> About </h1>

                  <p className = 'text-1.8xl pb-4'> 
                     {config.line1}
                   </p>

                   <p className = 'text-1.8xl pb-4'> 
                      {config.line2}
                   </p>

                   <p className = 'text-1.8xl '> 
                     {config.line3}
                   </p>
                   
               </div>
            </div>

        </section>
    )
}