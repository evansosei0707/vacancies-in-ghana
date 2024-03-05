
import PostJobForm from './components/PostJobForm';
import AsideTips from './components/AsideTips';



const createJobPage = () => {

    return (
        <main className=" bg-[#f6f6f6] flex w-full h-full gap-5 items-start p-9 lg:p-12 justify-start flex-col-reverse lg:flex-row">
            <PostJobForm />
            <AsideTips />
        </main>
       
    )
  }

export default createJobPage;




