import Container from '../../ui/Container'

const Contest = () => {
  return (
    <Container className='flex items-center justify-center '>
        <div className='w-[1500px] 2xl:w-full 2xl:px-10 py-4 flex flex-col  h-full gap-6'>
            <div className='w-full flex items-center justify-center'>
                <h2 className="uppercase text-xl text-green-600 md:text-lg
                    relative
                    before:absolute before:w-16 before:h-[2px] before:content-[''] before:top-1/2  before:bg-green-600 before:-translate-x-[150%]
                    after:absolute after:w-16 after:h-[2px] after:content-[''] after:top-1/2  after:bg-green-600 after:translate-x-[50%]
                    ">
                        Bäsleşikler
                </h2>
            </div>
        </div>
    </Container>
  )
}

export default Contest