import React from 'react'

const Search = () => {
  return (
    <div className='search continer section'>
      <div className='sectionContainer grid'>

        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy</span>
          </div>

          <div className='singleBtn'>
            <span>Business Class</span>
          </div>

          <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>

        <div className='serachInputs flex'>
          <div className='singleInput flex'>
            <div className='iconDiv'>
              <HiOutlineLocationMarker className='icon'/>
            </div>

            <div className='texts'>
              <h4>Location</h4>
              <input type='text' placeholder='Where do you want to go'/>
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RiAccountpinCircleLine className='icon'/>
            </div>

            <div className='texts'>
              <h4>Travellers</h4>
              <input type='text' placeholder='Add guests'/>
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalender className='icon'/>
            </div>

            <div className='texts'>
              <h4>Check In</h4>
              <input type='text' placeholder='Add date'/>
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='iconDiv'>
              <RxCalender   className='icon'/>
            </div>

            <div className='texts'>
              <h4>Check Out</h4>
              <input type='text' placeholder='Add date'/>
            </div>
          </div>

          <button className='btn btnBlack flex'>Search Flight</button>
        </div>

      </div>
    </div>
  )
}

export default Search
