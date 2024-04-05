import ResumeImg from '../../assets/resume.jpg'
export default function Resume() {

    const config = {
        link: 'https://drive.google.com/file/d/1VmYySpCgbWb4a2Zvo2e5bOD_E-oxPKTA/view?usp=drive_link'
    }

    return (
        <section id = "resume" className = 'flex flex-col md:flex-row bg-about px-5 py-12'>

            <div className = 'md:w-1/2 py-10 flex justify-center md:justify-end'>
                <img className = 'w-[350px]' src = {ResumeImg}/>
            </div>

            <div className = 'md:w-1/2 flex justify-center '>

               <div className = 'flex flex-col justify-center text-white'>

                  <h1 className = 'text-4xl text-white border-b-4 border-primary mb-4 w-[135px] font-bold'> Resume </h1>

                  <p className = 'text-1.8xl mt-4'> 
                    You Can View My Resume ...... <a className = 'btn' href = {config.link}> Download </a> 
                   </p>
                   
               </div>
            </div>

        </section>
    )
}