import React, { useEffect, useState, } from 'react'

import ReactPaginate from 'react-paginate';


const Roms = () => {



  const [RomData, setRomData] = useState([].slice(10));
  const [pageNumber, setPageNumber] = useState(0);


  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const getUsers = async () => {
    try {
        const response = await fetch('API');

        
        setRomData(await response.json());
    } catch (error) {
      
       
    }
}

useEffect(() => {
    getUsers();
}, []);
  



  const displayUsers = RomData
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((RomData) => {
      const { id, name, link, build, version, Type ,changelog} = RomData;
      return (


        <div className="card-container" >
          <div className="card ">
            <div className="card-body">


              <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-1" key={id} >
                

                <div className="rounded-xl  main-card flex flex-col p-8">
                  <span className="card-number card-circle subtle">{id}</span>
                  <div className=" imgbox h-16 inline-flex items-center justify-center rounded-full  text-green-500 mb-5 flex-shrink-0 p-4">
                    <h1 className="r-name" style={{ color: "black" }} >{name}</h1>
                  </div>
                  <div className="flex-grow text-white">

                    <p className=" des  leading-relaxed text-sm text-justify">
                      clean flash is recommended you may download some kernals too.
                    </p>
                    <h3 className="Ver" >{version}</h3>
                    <h3 className="Ver1" >{build}</h3>
                    <h3 className="Ver1" >{Type}</h3>
                   



                  </div>

                </div>

              </div>

              <a className="d-btn1 " target="_blank" href="https://t.me/Team_O2_Generic">Discussion</a>
              <a className="d-btn " target="_blank" href={link}>Download</a>

            </div>
          </div>
        </div>



      );
    });

  const pageCount = Math.ceil(RomData.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (


    <div className="Main" >
      <div className=" Main2 team-1 py-4 md:py-12 bg-gray-100">
        <div className="heading"><h1 className="heading-h1">Rom Downloads</h1></div>
        <div className=" md:w-10/12 xl:w-8/12 md:px-4 text-center md:mx-auto">



        </div>
        <section className="main-card--cointainer">
          {displayUsers}



        </section>
        <div className="rp"><ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        /></div>



      </div>
    </div>



  )

}

export default Roms
