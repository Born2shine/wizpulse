import { FOOTER_LOGO, WIZPULSE_LOGO } from "@/assets/images";

export default function Home() {
  return (
    <section className='w-screen h-screen bg-[#CCE3F9] flex justify-center items-center md:m-5 md:rounded-3xl md:border md:w-[30rem] md:mx-auto'>
        <div>
            <img src={WIZPULSE_LOGO} alt="logo" />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <img src={FOOTER_LOGO} alt="footer-logo" />
            </div>
        </div>
    </section>
  )
}
