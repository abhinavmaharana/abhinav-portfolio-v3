import { contacts } from '@/components/utils/data';

function Footer() {
    return (
      <>
        <div id="Footer" className="mx-auto p-5 lg:p-12">
          <div className="text-[2rem] font-bold lg:text-[4rem]">
            Want to Work Together?
          </div>
          <div className="mt-3 lg:text-[1.5rem]">
            Feel free to reach out for collaboration or just a{" "}
            <br className="hidden md:block" />
            friendly hello
          </div>
          <div className="mt-5 flex flex-col items-center md:flex-row md:space-x-8 lg:mt-24 lg:space-x-12">
            <a
              href="mailto:test@gmail.com"
              className="hover:bg-secondary w-full rounded-full bg-white px-16 py-2 text-center text-black transition-all hover:text-white md:w-auto lg:py-1 lg:text-[2rem]"
            >
              Contact Me
            </a>
            <div className="mt-5 flex items-center space-x-5 md:mt-0">
              {contacts.map((x) => {
                return (
                  <a
                    key={x.link}
                    target="_blank"
                    className="transition-all hover:translate-y-[-5%]"
                    href={x.link}
                  >
                    <img src={x.icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="space-grotesk mt-12 p-5 text-center lg:text-[1.25rem]">
          © 2023 copyright all right reserved
        </div>
      </>
    );
}

export default Footer