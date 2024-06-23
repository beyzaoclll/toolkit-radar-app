import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux"


const ListViews = ({setDetailId}) => {
 const {flights} = useSelector(store => store.flight);

  // gösterilcek ilk elemanın state'i
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına gösterlicek eleman sayısı
  const itemsPerPage = 10;

  // son gösterilecek elemanı belirler
  const endOffset = itemOffset + itemsPerPage;

  // belirlenen aralıktaki elemanları alır
  const currentItems = flights.slice(itemOffset, endOffset);

  // maksimum sayfa sayısını belirle
  const pageCount = Math.ceil(flights.length / itemsPerPage);

  // her yeni sayfa seçildğinde çalışır
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % flights.length;

    // state'i güncelle
    setItemOffset(newOffset);
  };


  return (
    <div className="p-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
            <td>{flight.id}</td>
            <td>{flight.code}</td>
            <td>{flight.lat}</td>
            <td>{flight.lng}</td>
            <td>
              <button onClick={() => setDetailId(flight.id)}>Detay</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>

      
      <ReactPaginate
        className="pagination justify-content-center my-5"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="page-link"
        activeClassName="active"
        breakLabel="..."
        nextLabel="ileri>"
        previousLabel="<geri"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        
        renderOnZeroPageCount={null}
      />
      
    </div>
  )
}

export default ListViews