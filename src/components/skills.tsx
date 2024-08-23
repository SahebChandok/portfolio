import Image from "next/image";

function Skills() {
  return (
    <div id='skills' className="container mx-auto px-4 pt-16 pb-24 mb-10 mt-30 border-b-2 border-gray-200 max-w-[1400px]">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Skills</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
        <div className="bg-gray-100 p-6 rounded-lg border-gray-300 border-2">
          <h3 className="text-lg font-semibold text-center mb-6">Front End</h3>
          <div className="grid grid-cols-5 gap-6 text-center mb-10">
            <div className="flex flex-col items-center">
              <Image src="./html.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className=" mt-2 text-xs md:text-sm">HTML</p>
            </div>

            <div className="flex flex-col items-center">
              <Image src="./css.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./react.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">React JS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./tailwind.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Tailwind</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./js.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />

              <p className="mt-2 text-xs md:text-sm">JavaScript</p>
            </div>
          </div>

        </div>

        {/*Backend*/}
        <div className="bg-gray-100 p-6 rounded-lg border-gray-300 border-2">
          <h3 className="text-lg font-semibold text-center mb-6">Backend</h3>
          <div className="grid grid-cols-5 gap-6 text-center mb-10">
            <div className="flex flex-col items-center">
              <Image src="./node.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Node JS</p>
            </div>
            <div className="flex flex-col items-center ">
              <Image src="./flex.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Flexcube</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./mongo.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Mongo DB</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./aws.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px]  mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">AWS</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./spring.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Springboot</p>
            </div>
          </div>

        </div>

        {/* Coding Languages */}
        <div className="bg-gray-100 p-6 rounded-lg border-gray-300 border-2">
          <h3 className="text-lg font-semibold text-center mb-6">Coding Languages</h3>
          <div className="grid grid-cols-5 gap-6 text-center mb-10">
            <div className="flex flex-col items-center">
              <Image src="./java.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Java</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./cpp.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />

              <p className="mt-2 text-xs md:text-sm">C++</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./net.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">.NET</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./python.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Python</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./type.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">TypeScript</p>
            </div>
          </div>

        </div>

        {/* Tools */}
        <div className="bg-gray-100 p-6 rounded-lg border-gray-300 border-2">
          <h3 className="text-lg font-semibold text-center mb-6">Tools</h3>
          <div className="grid grid-cols-5 gap-6 text-center mb-10">
            <div className="flex flex-col items-center">
              <Image src="./jira.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Jira</p>
            </div>
            <div className="flex flex-col items-center">

              <Image src="./postman.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Postman</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./confluence.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Confluence</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./intell.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">Intell IJ</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="./vs.svg" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] mt-5 md:w-[50px] md:h-[50px]" />
              <p className="mt-2 text-xs md:text-sm">VS Code</p>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
