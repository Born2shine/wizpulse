import { ARROW_LEFT, MESSAGE_ICON, PADLOCK } from "@/assets/images";
import { Button, Input, SectionHeader, TogglePassword } from "@/components";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="p-7 pt-10 md:m-5 md:rounded-3xl md:border md:w-[30rem] md:mx-auto">
            <img src={ARROW_LEFT} alt="arrow-icon" />
            <SectionHeader
                title="Welcome back! Let’s pick up from where we left off"
                subStitle=""
                titleClass="text-[24px] font-bold"
                className="w-4/5 mx-auto mt-4"
            />
            <form>
                <div className='relative mb-3'>
                    <Input
                        label='Email Address'
                        id='email'
                        name="email"
                        value=""
                        onChange={() => null}
                        error={""}
                        isRequired
                        placeholder='email id with your child’s school record'
                        className='pl-10 py-5 placeholder:text-isGray400'
                    />
                    <img src={MESSAGE_ICON} width="20" className='absolute left-3 top-11 text-isGray400' />
                </div>
                <div className='relative mb-3'>
                    <Input
                        label='Enter Password'
                        id='password'
                        name="password"
                        value=""
                        onChange={() => null}
                        error={""}
                        isRequired
                        placeholder='e.g. example123&_'
                        className='pl-10 py-5 placeholder:text-isGray400'
                    />
                    <img src={PADLOCK} width="22" className='absolute left-3 top-10 text-isGray400' />
                    <TogglePassword className="top-11" showPassword setShowPassword={() => null}/>
                </div>
                <Link to="" className="text-sm underline text-[#0045C2]">Forgot password?</Link>
                <div className="mt-6">
                    <Button
                        className="w-full shadow-shadowThree p-[1.4rem]"
                        type="submit"
                    >Sign In</Button>
                </div>
                <div className="text-center mt-10 text-gray-500">
                    <span>Alternatively sign in with <span className="text-primary font-semibold">Phone number</span></span>
                    <span className="block text-sm mt-4">Don’t have an account? <Link to="" className="text-primary font-semibold">Sign Up</Link></span>
                </div>
            </form>
        </section>
    )
}
