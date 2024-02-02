import Logo from '@/assets/Logo.png';

const Footer = () => {
  return (
    <section className='bg-primary-100 py-16 mt-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img alt='logo' src={Logo} />
                <p className='my-5'>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.
                </p>
                <p>
                    © Evogym All Rights Reserved.
                </p>
            </div>

            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Mass orci senectus</p>
                <p className='my-5'>et gravida id et etiam</p>
                <p>ullamcorper viviamus</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold' >Contact Us</h4>
                <p className='my-5'>Tempus metus matitis risus</p>
                <p className='my-5'>et gravida id et etiam</p>
            </div>
        </div>
        
    </section>
  );
}

export default Footer