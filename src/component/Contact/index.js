export default function Contact() {

    const config = {
        email: 'sksharujan27@gmail',
        phone: '0769101360',
    }

    return (
        <section id = "contact" className = 'flex flex-col bg-contact px-5 py-12' >

            <div className = 'flex flex-col items-center text-white '>

                  <h1 className = 'text-4xl  border-b-4 border-primary1 mb-4 w-[135px] font-bold'> Contact </h1>

                  <p className = 'text-2xl mt-4 '> 
                     If you want to discuss more in details, please contact me.
                  </p>

                  <p className = 'text-2xl py-6 '> <span className = "font-bold text-2xl"> Email :</span> {config.email} </p>
                  <p className = 'text-2xl py-2 '> <span className = "font-bold text-2xl"> PhoneNo :</span> {config.phone} </p>
  
            </div>

        </section>
    )
}