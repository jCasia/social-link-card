import profileImage from './images/avatar-jessica.jpeg';
const socialMedia = [
  'GitHub',
  'Frontend Mentor',
  'LinkedIn',
  'Twitter',
  'Instagram',
];

const App = () => {
  return (
    <main className='bg-colorOffBlack w-full h-screen flex items-center justify-center '>
      <div className='bg-colorDarkGrey mx-5 p-6 rounded-lg flex flex-col gap-6 max-w-[320px]'>
        <div className='flex flex-col text-center justify-center items-center gap-4'>
          <img
            src={profileImage}
            alt='Profile Image'
            className='rounded-full w-1/3'
          />
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl text-colorWhite font-medium '>
              Jessica Randall
            </h1>
            <h2 className='text-sm text-colorGreen font-medium '>
              London, United Kingdom
            </h2>
          </div>
          <q className='text-colorWhite font-light text-sm px-2'>
            Front-end developer and avid reader.
          </q>
        </div>
        <div className='text-colorWhite flex flex-col gap-4'>
          {socialMedia.map((social, index) => {
            return (
              <a
                href='#'
                key={index}
                className='bg-colorGrey text-center py-3 font-medium rounded-lg text-sm hover:bg-colorGreen hover:text-colorDarkGrey transition ease-linear duration-300 '
              >
                <p>{social}</p>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default App;
