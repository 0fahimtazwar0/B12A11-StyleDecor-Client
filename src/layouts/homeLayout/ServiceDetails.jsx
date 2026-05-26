import { FaBookmark, FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row gap-10'>
        <img
          src='https://5.imimg.com/data5/JH/FW/KP/SELLER-22691327/wedding-stage-decorator-service.jpg'
          alt='Decoration Package Picture'
          className='flex-1 object-cover rounded-2xl border-4 border-primary'
        />
        <div className='w-fit flex-1 flex flex-col'>
          <div className='badge badge-soft badge-primary'>
            Wedding Decoration
          </div>
          <h2 className='font-bold text-3xl mt-0.5'>
            Elegant Wedding Decoration Package
          </h2>
          <div className='flex gap-4 mt-3'>
            <div className='flex items-center gap-1 '>
              <FaStar className='text-amber-400' />
              <b>4.9</b>
              <p>(120 Reviews)</p>
            </div>
            <div className='flex items-center gap-1 '>
              <FaBookmark className='text-primary' />
              <p>245+ Bookings</p>
            </div>
          </div>
          <div className='flex-1 min-h-10 '></div>
          <div className='flex flex-col gap-5 '>
            <div className=''>
              <p>Starting From</p>
              <h1 className='text-primary text-4xl font-black'>$499</h1>
            </div>
            <div className='pr-30'>
              <button
                className='btn btn-primary w-full'
                onClick={() =>
                  document.getElementById("booking-details-modal").showModal()
                }
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-4xl font-bold'>Description</h1>
        <p className='mt-4  text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nulla
          repudiandae optio aliquid ipsam enim perspiciatis magnam aut impedit
          blanditiis accusamus officia corrupti recusandae nam nobis
          praesentium, quasi distinctio culpa hic magni quae eligendi, pariatur
          odio vero. Magnam animi blanditiis nam vel aliquid itaque distinctio
          quidem voluptatum officiis, cumque ipsa in et modi iusto, voluptates
          earum libero laudantium perspiciatis natus omnis dolor dolorem. Cum
          mollitia maiores aut soluta dolor? Inventore doloremque quos modi
          aliquid laboriosam, adipisci nemo ad minus quas quod animi, voluptas
          odit fugit sit consectetur eveniet iste minima a eligendi. Fuga illum
          eaque delectus neque, earum libero error quidem laborum amet ipsum,
          culpa quasi. Dolore corrupti sunt nulla ab facilis suscipit tempore
          voluptates possimus assumenda itaque laboriosam, quo aut architecto,
          ex quasi esse repudiandae, dolor enim. Possimus quisquam velit porro
          beatae eaque tenetur molestias magni, numquam sed unde nostrum libero
          neque provident praesentium quibusdam necessitatibus dicta, quasi
          consequatur commodi earum veritatis assumenda ut nemo. Asperiores ut
          numquam temporibus fugiat alias dicta inventore ullam perspiciatis
          voluptates iure fuga ex non dolor, debitis, natus sint expedita earum
          at vel incidunt vero laborum sapiente quasi velit. Porro, corrupti
          rerum aliquam ex ipsum excepturi dolore minus eum natus iusto
          praesentium laborum velit.
        </p>
      </div>

      <dialog id='booking-details-modal' className='modal'>
        <div className='modal-box'>
          <form className='fieldset bg-base-200 border-base-300 rounded-box w-full border p-4'>
            <legend className='fieldset-legend text-2xl'>Booking Form</legend>

            <label className='label'>Name</label>
            <input
              type='text'
              className='input w-full text-base-content'
              defaultValue={"Fahim Tazwar"}
              readOnly
              disabled
            />

            <label className='label'>Email</label>
            <input
              type='email'
              className='input w-full text-base-content'
              defaultValue={"0fahimtazwar0@gmail.com"}
              readOnly
              disabled
            />

            <label className='label'>Phone Number</label>
            <input
              type='number'
              className='input w-full'
              minLength={11}
              maxLength={11}
              defaultValue={"01"}
              required
            />

            <label className='label'>Location</label>
            <input type='text' className='input w-full' required />

            <label className='label'>Date</label>
            <input type='date' className='input w-full' required />

            <div className='flex items-end gap-5'>
              <button type='submit' className='btn btn-neutral mt-4 flex-1'>
                Submit
              </button>
              <button
                className='btn w-full btn-outline flex-1'
                type='button'
                onClick={() =>
                  document.getElementById("booking-details-modal").close()
                }
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
